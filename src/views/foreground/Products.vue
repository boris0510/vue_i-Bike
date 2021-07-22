<template>
  <Navber/>
  <div class="products">
    <div class="container">
      <!-- 優惠碼 -->
      <div class="row d-flex justify-content-center align-items-center border py-3 mx-0">
        <div class="col-md-2 text-center d-none d-md-block">
          <img src="https://images.unsplash.com/photo-1566591286939-369d286ecfff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid" alt="優惠碼" width="200">
        </div>
        <div class="col-md-9 pt-4 fs-4">
          <p>領取優惠碼，一起 Bike 吧</p>
          <p>12/31前輸入優惠碼 <span class="border border-dark py-1 px-2 lh-lg text-strong fw-bold">ilovebike</span>，結帳時可享 8 折優惠，一起享受騎乘吧!</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 mb-4">
          <div class="row d-flex justify-content-between align-items-end">
            <!-- 選單 -->
            <div class="col-md-9 d-none d-md-block">
              <router-link to="all" class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                顯示全部
              </router-link>
              <router-link to='city' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                城市自行車
              </router-link>
              <router-link to='electric' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                電動自行車
              </router-link>
              <router-link to='mountain' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                登山車
              </router-link>
              <router-link to='road' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-biking"></i>
                公路車
              </router-link>
            </div>
            <div class="col-md-3">
              <!-- 下拉式選單 -->
              <select class="form-select d-block d-md-none select-icon mt-0"  @change="toProducts">
                <option value="all" selected>&#xf84a; 顯示全部</option>
                <option value="city">&#xf84a; 城市自行車</option>
                <option value="electric">&#xf84a; 電動自行車</option>
                <option value="mountain">&#xf84a; 登山車</option>
                <option value="road">&#xf84a; 公路車</option>
              </select>
            </div>
          </div>
        </div>
        <RouterView/>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navber from '@/components/Navber.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Products',
  components: {
    Navber,
    Footer
  },
  methods: {
    toProducts (e) {
      const path = `/products/${e.target.value}`
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.products{
  margin-top: 100px;
}
</style>
