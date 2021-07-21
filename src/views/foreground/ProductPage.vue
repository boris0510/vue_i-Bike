<template>
  <Navber/>
  <GoTop/>
  <div class="productPage">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <!-- 分類 -->
      <nav class="mb-md-4 d-flex justify-content-center justify-content-md-start" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="me-3"><a href="#" class="text-dark a-hover fw-bold" @click.prevent="goBack"><i class="fas fa-arrow-left"></i></a></li>
          <li class="breadcrumb-item"><a href="#/products/all" class="text-dark a-hover fw-bold">產品</a></li>
          <li class="breadcrumb-item"><a href="#" class="text-dark a-hover fw-bold" @click.prevent="changePage">{{ product.category }}</a></li>
          <li class="breadcrumb-item fw-bold active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <!-- 內容 -->
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 p-0 d-flex justify-content-center">
          <div class="row">
            <div class="col p-0">
              <img :src="product.imageUrl" class="img-fluid" alt="商品照片">
            </div>
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <div class="ps-0 ps-md-5">
            <div class="d-flex justify-content-between">
              <h4 class="fw-bold fs-5">{{ product.category }}</h4>
              <a href="#" title="加入收藏" @click.prevent="addFollow(product.id)">
                <i class="far fa-heart text-strong fs-4" v-if="followData.indexOf(product.id) === -1"></i>
                <i class="fas fa-heart text-strong fs-4" v-else></i>
              </a>
            </div>
            <h2 class="fw-bold">{{ product.title }}</h2>
            <div class="d-flex align-items-center mt-3">
              <div class="me-3">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning" v-if="Math.floor(Math.random() * 2) == 1"></i>
              </div>
              <small>已售出 {{ Math.floor(Math.random() * 150) }}</small>
            </div>
            <hr class="mt-4">
            <h4 class="text-strong fw-bold fs-5 mt-4">產品特色</h4>
            <p>{{ product.description }}</p>
            <div class="d-flex align-items-end mt-4">
              <h3 class="text-muted text-decoration-line-through fs-6 me-3">
                NT$ {{ $filters.currency(product.origin_price) }}
              </h3>
              <h3 class="text-black fw-bold fs-4">
                NT$ {{ $filters.currency(product.price) }}
              </h3>
            </div>
            <div class="d-flex align-items-end pt-4">
              <select class="fs-5 px-2 py-1" v-model.number="quantity">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button type="button" class="btn btn btn-dark btn-hover rounded-0 ms-4" @click="addtoCart(product.id, quantity)">加入購物車</button>
            </div>
            <hr class="mt-4">
            <h4 class="text-strong fw-bold fs-5 mt-4">產品介紹</h4>
            <ul class="lh-lg">
              <li>世界頂級的碳纖維車身，降低車身重量</li>
              <li>車身堅固並降低風阻，騎乘時不會有阻饒</li>
              <li>低風阻抓地力高輪胎，提升操控自信</li>
              <li>一體式碟煞系統，安全無疑</li>
              <li>輕量化，操控得宜</li>
            </ul>
            <hr class="mt-4">
            <h4 class="text-strong fw-bold fs-5 mt-4">購物須知</h4>
            <p class="lh-lg">商品下訂後3~7天組裝，組裝完後出貨時間為1~3天，商品運送時間為3~7天，一律採用黑貓寄送。</p>
            <hr class="mt-4">
            <h4 class="text-strong fw-bold fs-5 mt-4">退換貨須知</h4>
            <p class="lh-lg">本產品不適用7天鑑賞期，若商品有瑕疵請聯絡客服，我們將提供專人到府服務。</p>
          </div>
        </div>
      </div>
      <hr class="my-5">
      <div>
        <h3 class="text-center fw-bold mb-5">熱門產品</h3>
        <div class="row row-cols-1 row-cols-md-5 g-3">
          <div class="col" v-for="item in products" :key="item.id">
            <div class="card border-0 box-shadow rounded-0 h-100" @click="getProduct(item.id,'hot')">
              <div style="height: 250px; background-size: cover; background-position: center" :style="{ backgroundImage: `url(${item. imageUrl})` }">
              </div>
              <div class="card-body text-center">
                <h4 class="card-title fw-bold">{{ item.title }}</h4>
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
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navber from '@/components/Navber.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'

export default {
  name: 'ProductPage',
  components: {
    Navber,
    Footer,
    GoTop
  },
  data () {
    return {
      product: [],
      products: [],
      quantity: 1,
      random: 0,
      followData: JSON.parse(localStorage.getItem('follow')) || [],
      isLoading: false
    }
  },
  methods: {
    getProduct (id, text) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      if (text === 'hot') {
        this.$router.push(`/productPage/${id}`)
        this.getProduct(id)
      } else {
        this.$http.get(api).then((response) => {
          if (response.data.success) {
            this.product = response.data.product
            this.isLoading = false
          }
        })
        document.documentElement.scrollTop = 0
      }
    },
    getProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          const tempProducts = new Set()
          while (tempProducts.size < 5) {
            this.random = this.getRandom(response.data.products.length)
            tempProducts.add(response.data.products[this.random])
          }
          this.products = Array.from(tempProducts)
          this.isLoading = false
        }
      })
    },
    addtoCart (id, qty) {
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
    },
    changePage () {
      if (this.product.category === '城市自行車') {
        this.$router.push('/products/city')
      } else if (this.product.category === '電動自行車') {
        this.$router.push('/products/electric')
      } else if (this.product.category === '登山車') {
        this.$router.push('/products/mountain')
      } else if (this.product.category === '公路車') {
        this.$router.push('/products/road')
      }
    },
    getRandom (x) {
      return Math.floor(Math.random() * x)
    },
    addFollow (id) {
      this.isLoading = true
      const followId = this.followData.indexOf(id)
      if (followId === -1) {
        this.followData.push(id)
        this.emitter.emit('message:push', { message: '已加入收藏', status: 'success' })
      } else {
        this.followData.splice(followId, 1)
        this.emitter.emit('message:push', { message: '已取消收藏', status: 'danger' })
      }
      setTimeout(() => {
        this.isLoading = false
      }, 500)
      localStorage.setItem('follow', JSON.stringify(this.followData))
    },
    goBack () {
      this.$router.back()
    }
  },
  created () {
    this.getProduct(this.$route.params.id)
    this.getProducts()
  }
}
</script>

<style scoped>
.productPage{
  margin-top: 100px;
}
</style>
