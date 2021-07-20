<template>
  <Navber/>
  <GoTop/>
  <div class="checkoutPay">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <h5 class="fw-bold mb-0 text-black-50">填寫資料</h5>
        <i class="fas fa-arrow-right fs-5 mx-2"></i>
        <h5 class="fw-bold mb-0 text-black-50" :class="{'active': !order.is_paid}">確認付款</h5>
        <i class="fas fa-arrow-right fs-5 mx-2"></i>
        <h5 class="text-black-50 fw-bold mb-0 " :class="{'active': order.is_paid}">訂單完成</h5>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="d-flex align-items-center" v-if="order.is_paid">
            <i class="fas fa-truck fs-3 me-3"></i>
            <h2 class="fw-bold mb-0">感謝您的購買 !</h2>
          </div>
          <h6 class="fw-bold mt-4 mb-5" v-if="order.is_paid">親愛的顧客您好，您已付款成功，商品將於 20 日內送達 !</h6>
          <h2 class="fs-3 text-center fw-bold">商品明細</h2>
          <div class="table-responsive-md mt-4">
            <table class="table lh-lg">
              <thead class="table-dark text-center">
                <tr class="table-nowrap">
                  <th>商品名稱</th>
                  <th>數量</th>
                  <th width="200" class="text-end">價格</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in order.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end">NT$ {{ $filters.currency(item.final_total) }} 元</td>
                </tr>
              </tbody>
              <tfoot class="text-center">
                <tr>
                  <td colspan="2" class="text-end">總價 :</td>
                  <td class="text-end">NT$ {{ $filters.currency(order.total) }} 元</td>
                </tr>
                </tfoot>
            </table>
          </div>
          <h2 class="fs-3 text-center fw-bold mt-5">寄送明細</h2>
          <div class="table-responsive-md">
            <table class="table lh-lg">
              <tbody>
                <tr class="table-nowrap">
                  <th width="100" class="fw-bold text-end">訂單編號 :</th>
                  <td>{{ order.id }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th width="100" class="fw-bold text-end">訂購日期 :</th>
                  <td>{{ $filters.date(order.create_at) }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th width="100" class="fw-bold text-end">Email :</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">姓名 :</td>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">收件人電話 :</td>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">收件人地址 :</td>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">付款狀態 :</td>
                  <td><span v-if="!order.is_paid">尚未付款</span><span v-if="order.is_paid" class="text-strong">付款完成</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-center mt-3 mt-md-5">
            <button type="button" class="btn btn-dark btn-hover rounded-0" v-if="!order.is_paid" @click="pay()">確認付款</button>
            <button type="button" class="btn btn-dark btn-hover rounded-0" v-if="order.is_paid" @click="goProducts()">繼續逛逛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navber from '@/components/Navber.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'

export default {
  name: 'CheckoutPay',
  components: {
    Navber,
    Footer,
    GoTop
  },
  data () {
    return {
      isLoading: false,
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.order = response.data.order
          this.isLoading = false
        }
      })
    },
    pay () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
          this.getOrder()
          document.documentElement.scrollTop = 0
        }
      })
    },
    goProducts () {
      this.$router.push('/products/all')
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>

<style scoped>
.checkoutPay{
  margin-top: 100px;
}
</style>
