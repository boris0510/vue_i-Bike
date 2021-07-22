<template>
  <Navber/>
  <Banner/>
  <div class="about mt-5">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <section>
        <div class="d-flex justify-content-center">
          <h1 class="hidden-h1 bg-logo">關於 i-Bike</h1>
        </div>
        <div class="row d-flex align-items-center mt-5">
          <div class="col-md-6">
            <img src="https://images.unsplash.com/photo-1605050825077-289f85b6cf43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="關於i-Bike" class="img-fluid px-5">
          </div>
          <div class="col-md-6 mt-3">
            <p class="fs-5 lh-lg">
              <span class="fw-bold">i-Bike</span> 是自行車業的專家，專注於自行車領域數十年，不斷研發與創新，如何讓騎乘者，能更安心、更舒適的騎乘。
              <br>
              每一輛自行車皆通過嚴格的十道關卡程序，來把關每一輛單車從零件到成品，任何細節都不放過。
              <br>
              在研發這麼多自行車當中，<span class="fw-bold">i-Bike</span> 了解到自行車不僅是代步工具，而是讓我們身心靈能放鬆且讓身體健康的好夥伴。
            </p>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <h2 class="text-center fw-bold">聯繫我們</h2>
        <div class="row mt-5">
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src="../../../public/img/i-bike-sm.svg" alt="logo" class="mb-4">
            <p class="mb-4 fs-5"><span class="fw-bold">實體店面 :</span> 高雄市三民區路建國二路000號</p>
            <p class="mb-4 fs-5"><span class="fw-bold">營業時間 :</span> 周一至六早10點 ~ 晚9點，周日公休</p>
            <p class="mb-4 fs-5"><span class="fw-bold">聯絡電話 :</span> 07-3212345</p>
            <div class="mb-4">
              <a href="#" @click.prevent=""><i class="fab fa-facebook-square me-4 fs-4 text-dark a-hover"></i></a>
              <a href="#" @click.prevent=""><i class="fab fa-facebook-messenger me-4 fs-4 text-dark a-hover"></i></a>
              <a href="#" @click.prevent=""><i class="fab fa-instagram-square fs-4 text-dark a-hover"></i></a>
            </div>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5059.40505069479!2d120.30325747604454!3d22.64000781749225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04f4871d07a7%3A0xccb9296f1ea5e649!2z6auY6ZuE6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1621142424227!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" width="100%" height="350"></iframe>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7">
              <h2 class="text-center fw-bold mb-4">提供寶貴意見</h2>
              <Form class="row g-3 needs-validation" v-slot="{ errors }" @submit="submitFrom">
                <div class="col-md-12">
                  <label for="name" class="form-label">姓名 <small>(必填)</small></label>
                  <Field type="text" class="form-control"  name="姓名" id="name" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"></Field>
                  <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <label for="email" class="form-label">電子郵件 <small>(必填)</small></label>
                  <Field type="email" class="form-control" id="email" name="Email" :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入電子郵件" rules="email|required"></Field>
                  <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <label for="phone" class="form-label">電話 <small>(必填)</small></label>
                  <Field type="number" class="form-control" :class="{ 'is-invalid': errors['電話'] }" name="電話" id="phone" placeholder="請輸入電話" rules="required"></Field>
                  <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="textarea" style="height: 150px" required></textarea>
                    <label for="textarea">請輸入內容</label>
                  </div>
                  <div class="valid-feedback">
                    輸入正確
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-end">
                  <button class="btn btn-dark btn-hover rounded-0" type="submit">送出</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navber from '@/components/Navber.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Navber,
    Banner,
    Footer
  },
  data () {
    return {
      isLoading: false
    }
  }
}
</script>

<style scoped>
.bg-logo{
  background: no-repeat url("../../../public/img/i-bike.svg") ;
  background-size: 200px 50px;
}
h5{
  line-height: 2;
}
@media (max-width: 768px) {
  .bg-logo{
    background-size: 130px 35px;
  }
}
</style>
