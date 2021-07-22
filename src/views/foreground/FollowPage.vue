<template>
  <Navber/>
  <Banner/>
  <div class="FollowPage mt-5">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <h1 class="fs-2 text-center fw-bold" v-if="followProduct.length !== 0">我的收藏</h1>
      <div class="d-flex flex-column align-items-center" v-if="followProduct.length === 0">
        <p class="fs-2 fw-bold">目前沒有收藏的產品 !</p>
        <a href="#/products/all" class="btn btn-dark btn-hover rounded-0 mt-5">查看產品 Go</a>
      </div>
      <div class="row row-cols-1 row-cols-md-5 g-3 mt-5" v-if="followProduct.length !== 0">
        <div class="col" v-for="item in followProduct" :key="item.id">
          <div class="card border-0 box-shadow rounded-0 h-100" @click="getProduct(item.id)">
            <div style="height: 250px; background-size: cover; background-position: center" :style="{ backgroundImage: `url(${item.imageUrl})` }" class="text-end">
            </div>
            <div class="card-body text-center">
              <h4 class="card-title fw-bold">{{ item.title }}</h4>
              <div class="d-flex justify-content-around align-items-end">
                <div class="fs-6 text-black-50" v-if="!item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </div>
                <del class="fs-6 text-black-50" v-if="item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </del>
                <div class="fs-5 text-strong fw-bold" v-if="item.price">
                  NT$ {{ $filters.currency(item.price) }}
                </div>
              </div>
            </div>
            <div class="card-footer border-0 d-flex justify-content-between align-items-center bg-transparent">
              <div>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning" v-if="Math.floor(Math.random() * 2) == 1"></i>
              </div>
              <small>已售出 {{ Math.floor(Math.random() * 150) }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navber from '@/components/Navber.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'FollowPage',
  components: {
    Navber,
    Banner,
    Footer
  },
  data () {
    return {
      isLoading: false,
      products: [],
      followProduct: [],
      followData: JSON.parse(localStorage.getItem('follow')) || []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.products = response.data.products
          this.getFollow()
          this.isLoading = false
        }
      })
      document.documentElement.scrollTop = 0
    },
    getFollow () {
      this.followProduct = this.products.filter(item => this.followData.indexOf(item.id) !== -1)
    },
    getProduct (id) {
      this.$router.push(`/productPage/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
