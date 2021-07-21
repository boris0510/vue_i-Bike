<template>
  <div class="coupons mt-4">
    <Loading v-model:active="isLoading"/>
    <div class="text-end">
      <button type="button" class="btn btn-dark btn-hover rounded-0" @click="openCouponModal(true)">
        建立優惠券
      </button>
    </div>
    <div class="table-responsive-lg mt-4">
      <table class="table table-striped lh-lg">
        <thead class="table-dark">
          <tr class="table-nowrap">
            <th width="150" class="text-center">名稱</th>
            <th width="150" class="text-center">優惠碼</th>
            <th width="150" class="text-center">折扣百分比</th>
            <th width="150" class="text-center">到期日</th>
            <th width="150" class="text-center">是否啟用</th>
            <th width="150" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr class="table-nowrap" v-for="(item, key) in coupons" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filters.date(item.due_date) }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-strong">啟用</span>
              <span v-else class="text-dark-50">未起用</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-dark btn-hover rounded-0 me-2"
                @click="openCouponModal(false, item)"
              >
                編輯
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
    <Pagination :pages="pagination" @emit-pages="getCoupons"/>
    <!-- CouponModal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true" ref="couponModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h4 class="modal-title fw-bold" id="exampleModalLabel" v-if="isNew">新增優惠碼</h4>
            <h4 class="modal-title fw-bold" id="exampleModalLabel" v-if="!isNew">更新優惠碼</h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                    placeholder="請輸入標題">
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
                    placeholder="請輸入優惠碼">
            </div>
            <div class="mb-3">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date"
                    v-model="due_date">
            </div>
            <div class="mb-3">
              <label for="price">折扣百分比</label>
              <input type="number" class="form-control" id="price"
                    v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比">
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="tempCoupon.is_enabled" id="is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark btn-hover rounded-0" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark btn-hover rounded-0" v-if="isNew"
                    @click="updateCoupon">新增優惠券
            </button>
            <button type="button" class="btn btn-dark btn-hover rounded-0" v-if="!isNew"
                    @click="updateCoupon">更新優惠券
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- DelCouponModal -->
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="delCouponModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠碼</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-strong">{{ tempCoupon.title }}</strong> 優惠碼(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark btn-hover rounded-0" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark btn-hover rounded-0" @click="delCoupon">確認刪除</button>
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
  name: 'Coupons',
  components: {
    Pagination
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: ''
      },
      pagination: {},
      due_date: new Date(),
      couponModal: '',
      delCouponModal: '',
      isLoading: false,
      isNew: false
    }
  },
  watch: {
    due_date () {
      const timestamp = Math.floor(new Date(this.due_date) / 1000)
      this.tempCoupon.due_date = timestamp
    }
  },
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.coupons = response.data.coupons
          this.pagination = response.data.pagination
          this.isLoading = false
        }
      })
    },
    updateCoupon () {
      if (this.isNew) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.isLoading = true
        this.$http.post(api, { data: this.tempCoupon }).then((response) => {
          if (response.data.success) {
            this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
            this.getCoupons(this.pagination.current_page)
            this.couponModal.hide()
            this.isLoading = false
          }
        })
      } else {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.isLoading = true
        this.due_date = new Date(this.tempCoupon.due_date * 1000)
        this.$http.put(api, { data: this.tempCoupon }).then((response) => {
          if (response.data.success) {
            this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
            this.getCoupons()
            this.couponModal.hide()
            this.isLoading = false
          }
        })
      }
    },
    delCoupon () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
          this.getCoupons()
          this.delCouponModal.hide()
          this.isLoading = false
        }
      })
    },
    openCouponModal (isNew, item) {
      if (isNew) {
        this.isNew = true
        this.tempCoupon = {}
      } else {
        this.isNew = false
        this.tempCoupon = { ...item }
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
          .toISOString()
          .split('T')
        this.due_date = dateAndTime[0]
      }
      this.couponModal.show()
    },
    openDelModal (item) {
      this.tempCoupon = item
      this.delCouponModal.show()
    }
  },
  created () {
    this.getCoupons()
  },
  mounted () {
    this.couponModal = new Modal(this.$refs.couponModal)
    this.delCouponModal = new Modal(this.$refs.delCouponModal)
  }
}
</script>
