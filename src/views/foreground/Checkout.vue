<template>
  <Navber/>
  <GoTop/>
  <div class="checkout">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <h5 class="fw-bold mb-0 active">填寫資料</h5>
        <i class="fas fa-arrow-right fs-5 mx-2"></i>
        <h5 class="text-black-50 fw-bold mb-0 ">確認付款</h5>
        <i class="fas fa-arrow-right fs-5 mx-2"></i>
        <h5 class="text-black-50 fw-bold mb-0 ">訂單完成</h5>
      </div>
      <div class="row">
        <div class="col-md-7">
          <h1 class="fs-3 text-center fw-bold">寄送資訊</h1>
          <div class="d-flex justify-content-center">
            <Form class="col-11" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
                <label for="email" class="form-label">Email <small>(必填)</small></label>
                <Field id="email" name="Email" type="email" class="form-control"
                        :class="{ 'is-invalid': errors['Email'] }"
                        placeholder="請輸入 Email" rules="email|required"
                        v-model="form.user.email"></Field>
                <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名 <small>(必填)</small></label>
                <Field id="name" name="姓名" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        placeholder="請輸入姓名" rules="required"
                        v-model="form.user.name"></Field>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話 <small>(必填)</small></label>
                <Field id="tel" name="電話" type="tel" class="form-control"
                        :class="{ 'is-invalid': errors['電話'] }"
                        placeholder="請輸入電話" rules="required"
                        v-model="form.user.tel"></Field>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">收件人地址 <small>(必填)</small></label>
                <Field id="address" name="地址" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['地址'] }"
                        placeholder="請輸入地址" rules="required"
                        v-model="form.user.address"></Field>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
              </div>
              <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-outline-dark btn-hover rounded-0" @click.prevent="goCart">回購物清單</button>
                <button type="submit" class="btn btn-dark btn-hover rounded-0">下一步 付款去</button>
              </div>
            </Form>
          </div>
        </div>
        <div class="col-md-5 mt-5 mt-md-0">
          <h2 class="fs-3 text-center fw-bold">商品明細</h2>
          <div class="table-responsive-md mt-4">
            <table class="table lh-lg">
              <thead class="table-dark text-center">
                <tr class="table-nowrap">
                  <th>商品名稱</th>
                  <th>數量</th>
                  <th class="text-end">價格</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in carts" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end"><span :class="{'text-decoration-line-through': item.final_total !== item.total}">NT$ {{ $filters.currency(item.total) }} 元</span><br><span class="text-strong" v-if="item.final_total !== item.total">NT$ {{ $filters.currency(item.final_total) }} 元</span></td>
                </tr>
              </tbody>
              <tfoot class="text-center">
                <tr v-if="carts.length !== 0">
                  <td colspan="2" class="text-end">總價 :</td>
                  <td class="text-end">NT$ {{ $filters.currency(total) }} 元</td>
                </tr>
                <tr v-if="final_total !== total">
                  <td colspan="2" class="text-end text-strong">折扣價 :</td>
                  <td class="text-end text-strong">NT$ {{ $filters.currency(final_total) }} 元</td>
                </tr>
                </tfoot>
            </table>
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
  name: 'Checkout',
  components: {
    Navber,
    Footer,
    GoTop
  },
  data () {
    return {
      isLoading: false,
      carts: [],
      total: 0,
      final_total: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.carts = response.data.data.carts
          this.total = response.data.data.total
          this.final_total = response.data.data.final_total
          this.isLoading = false
        }
      })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
          this.$router.push(`/checkoutPay/${response.data.orderId}`)
        }
      })
    },
    goCart () {
      this.$router.push('/cart')
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped>
.checkout{
  margin-top: 100px;
}
</style>
