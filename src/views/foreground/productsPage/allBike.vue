<template>
  <div class="allBike mt-3">
    <Loading v-model:active="isLoading"/>
    <!-- 商品內容 -->
    <div class="container px-0">
      <div class="row row-cols-1 row-cols-md-5 g-3">
        <div class="col" v-for="item in products" :key="item.id">
          <div class="card border-0 box-shadow rounded-0 h-100" @click="getProduct(item.id)">
            <div style="height: 250px; background-size: cover; background-position: center" :style="{ backgroundImage: `url(${item.imageUrl})` }" class="text-end">
            </div>
            <div class="card-body text-center">
              <h4 class="card-title fw-bold">{{item.title}}</h4>
              <div class="d-flex justify-content-around align-items-end">
                <div class="fs-6 text-muted" v-if="!item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </div>
                <del class="fs-6 text-muted" v-if="item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </del>
                <div class="fs-5 text-black fw-bold" v-if="item.price">
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
    <!-- 分頁 -->
    <Pagination :pages="pagination" @emit-pages="getProducts"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'AllBike',
  components: {
    Pagination
  },
  data () {
    return {
      isLoading: false,
      products: [],
      pagination: {}
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.products = response.data.products
          this.pagination = response.data.pagination
          this.isLoading = false
        }
      })
      document.documentElement.scrollTop = 0
    },
    getProduct (id) {
      this.$router.push(`/productPage/${id}`)
    },
    addtoCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
          this.emitter.emit('resetCart')
          this.isLoading = false
        } else {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
          this.isLoading = false
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
