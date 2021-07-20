<template>
  <div class="orders mt-4">
    <Loading v-model:active="isLoading"/>
    <div class="table-responsive-lg mt-4">
      <table class="table table-striped lh-lg">
        <thead class="table-dark">
          <tr class="table-nowrap">
            <th width="150" class="text-center">購買時間</th>
            <th width="200" class="text-center">訂單編號</th>
            <th width="200" class="text-center">Email</th>
            <th class="text-center">購買項目</th>
            <th width="150" class="text-end">應付金額</th>
            <th width="150" class="text-center">是否付款</th>
            <th width="180" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr
            class="table-nowrap"
            v-for="(item, key) in orders"
            :key="key"
            :class="{ 'text-black-50': !item.is_paid }"
          >
            <td>{{ $filters.date(item.create_at) }}</td>
            <td>{{ item.id }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} {{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-end">NT$ {{ $filters.currency(item.total) }}</td>
            <td>
              <span v-if="item.is_paid" class="text-strong">已付款</span>
              <span v-else class="text-muted">尚未付款</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-dark btn-hover rounded-0 me-2"
                @click="openOrderModal(item)"
              >
                查看詳細
              </button>
              <button
                type="button"
                class="btn btn-outline-dark btn-hover rounded-0"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分頁 -->
    <Pagination :pages="pagination" @emit-pages="getOrders"/>
    <!-- orderModal -->
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true" ref="orderModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h4 class="modal-title fw-bold" id="exampleModalLabel">訂單資訊 <span class="fs-6">( {{ tempOrder.id }} )</span></h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <h5 class="fw-bold">訂購日期</h5>
              <p>{{ $filters.date(tempOrder.create_at) }}</p>
              <hr>
            </div>
            <div class="mb-3">
              <h5 class="fw-bold">商品</h5>
              <div v-for="item in tempOrder.products" :key="item.id">
                <div class="row">
                  <div class="col-6">
                    <p>{{ item.product.title }} {{ item.qty }} {{ item.product.unit }}</p>
                  </div>
                  <div class="col-6">
                    <p class="text-end">NT$ {{ $filters.currency(item.final_total) }} 元</p>
                  </div>
                </div>
              </div>
              <p class="text-end">總價: NT$ {{ $filters.currency(tempOrder.total) }} 元</p>
              <hr>
            </div>
            <div class="mb-3">
              <h5 class="fw-bold">Email</h5>
              <p>{{ tempOrder.user.email }}</p>
              <hr>
            </div>
            <div class="mb-3">
              <h5 class="fw-bold">姓名</h5>
              <p>{{ tempOrder.user.name }}</p>
              <hr>
            </div>
            <div class="mb-3">
              <h5 class="fw-bold">收件人電話</h5>
              <p>{{ tempOrder.user.tel }}</p>
              <hr>
            </div>
            <div class="mb-3">
              <h5 class="fw-bold">收件人地址</h5>
              <p>{{ tempOrder.user.address }}</p>
              <hr>
            </div>
            <div class="mb-3">
              <h5 class="fw-bold">備註</h5>
              <p>{{ tempOrder.message }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark btn-hover rounded-0" data-bs-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
    <!-- DelOrderModal -->
    <div class="modal fade" id="delOrderModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="delOrderModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除訂單</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-strong">{{ tempOrder.id }}</strong> 訂單(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark btn-hover rounded-0" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark btn-hover rounded-0" @click="delOrder">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal.js'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Orders',
  components: {
    Pagination
  },
  data () {
    return {
      orders: {},
      tempOrder: {
        user: {}
      },
      pagination: {},
      isLoading: false,
      isNew: false,
      orderModal: '',
      delOrderModal: ''
    }
  },
  methods: {
    getOrders (Page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${Page}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.orders = response.data.orders
          this.pagination = response.data.pagination
          this.isLoading = false
        }
      })
    },
    delOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
          this.getOrders()
          this.delOrderModal.hide()
          this.isLoading = false
        }
      })
    },
    openOrderModal (item) {
      this.tempOrder = item
      this.orderModal.show()
    },
    openDelModal (item) {
      this.tempOrder = item
      this.delOrderModal.show()
    }
  },
  created () {
    this.getOrders()
  },
  mounted () {
    this.orderModal = new Modal(this.$refs.orderModal)
    this.delOrderModal = new Modal(this.$refs.delOrderModal)
  }
}
</script>
