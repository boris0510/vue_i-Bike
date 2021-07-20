<template>
  <Navber/>
  <GoTop/>
  <Banner/>
  <div class="home mt-5">
    <loading v-model:active="isLoading"/>
    <div class="container">
      <section>
        <div class="d-flex justify-content-center">
          <h1 class="h3 fw-bold">i-Bike，速度的先鋒者</h1>
        </div>
        <div class="card-group mt-5">
          <div class="card border-0">
            <div class="px-5">
              <img src="https://images.unsplash.com/photo-1593091816440-27564545a7aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="碳纖維車身">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">世界極輕碳纖維車身</h3>
              <p class="card-text">採用世界頂級碳纖維材料打造全車車身，使車身堅固並降低重量，讓駕馭者不會造成負擔。</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="px-5">
              <img src="https://images.unsplash.com/photo-1572634236483-199f41b2e9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="低風阻係數輪胎">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">低風阻耐磨輪胎</h3>
              <p class="card-text">採用極細輪胎降低風阻且增加抓地力，讓駕馭者在道路上能有極高的信心。</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="px-5">
              <img src="https://images.unsplash.com/photo-1607109120350-b0adef8aa4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="完善的後勤團隊">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">完善後勤團隊</h3>
              <p class="card-text"><span class="fw-bold">i-Bike</span> 提供完善的後勤維修團，解決顧客任何疑難雜症，不用擔心後續維修保養問題。</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-2 animated">
          <button type="button" class="btn btn-dark btn-lg btn-hover rounded-0 border-0"><a href="#/about" class="text-light">了解更多 i-Bike</a></button>
        </div>
      </section>
      <section class="mt-5">
        <div class="row">
          <div class="col-6 col-md-6 d-flex justify-content-end animated">
            <div class="card mb-3 border-0" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center">
                  <img src="https://images.unsplash.com/photo-1579017919837-61418cbef18e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=779&q=80" width="180" alt="優惠碼">
                </div>
                <div class="col-md-8 d-flex align-items-center">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">領取優惠碼</h5>
                    <p class="card-text">12/31前結帳時輸入，優惠碼 <span class="text-org">ilovebike</span> 可享 8 折優惠，時間有限要買要快!</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/products/all" class="btn btn-dark btn-hover rounded-0 border-0">查看更多</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 d-flex justify-content-start animated">
            <div class="card mb-3 border-0" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-8 d-flex align-items-center">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">新品上市</h5>
                    <p class="card-text">快來看看本週新品，絕對讓您愛不釋手，讓您享受騎乘樂趣!</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/products/all" class="btn btn-dark btn-hover rounded-0 border-0">查看更多</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center">
                  <img src="https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" width="180" alt="商品">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col animated">
            <div class="card border-0">
              <img src="https://images.unsplash.com/photo-1501147830916-ce44a6359892?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="城市自行車">
              <div class="card-body">
                <h3 class="card-title fw-bold">城市自行車</h3>
                <p class="card-text">一般購物、通勤或上學。在日常生活中，是一款實用性非常高的單車。價格便宜，款式時尚，適應不同需求。</p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/city" class="btn btn-dark btn-hover rounded-0 border-0">選購去!</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col animated">
            <div class="card border-0">
              <img src="https://images.unsplash.com/photo-1605021285418-1446140cbcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="電動自行車">
              <div class="card-body">
                <h3 class="card-title fw-bold">電動自行車</h3>
                <p class="card-text">用電力作為前進動力，讓駕馭者騎乘載小孩或騎單車爬坡時，借用電力使您在行駛中更加輕鬆。萬一電池沒電時，也能和一般的單車一樣踩踏前行</p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/electric" class="btn btn-dark btn-hover rounded-0 border-0">選購去!</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col animated">
            <div class="card border-0">
              <img src="https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="登山車">
              <div class="card-body">
                <h3 class="card-title fw-bold">登山車</h3>
                <p class="card-text">能順暢的行駛在山岳地帶或崎嶇路面。輪胎寬厚，所以造成的路面阻力也大，在平整的路面上速度不是很快，但是不必受道路的崎嶇不平限制。</p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/mountain" class="btn btn-dark btn-hover rounded-0 border-0">選購去!</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col animated">
            <div class="card border-0">
              <img src="https://images.unsplash.com/photo-1591293956413-15cf7866c014?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1060&q=80" class="card-img-top" alt="公路車">
              <div class="card-body">
                <h3 class="card-title fw-bold">公路車</h3>
                <p class="card-text">極細的輪胎和彎曲的彎把。追求高速騎行性能，與風融為一體的快速騎行感覺，是公路單車騎乘時最大魅力。</p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/road" class="btn btn-dark btn-hover rounded-0 border-0">選購去!</a>
                </div>
              </div>
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
import GoTop from '@/components/GoTop.vue'
import $ from 'jquery'

export default {
  name: 'Home',
  components: {
    Navber,
    Banner,
    Footer,
    GoTop
  },
  data () {
    return {
      isLoading: false
    }
  }
}
$(document).ready(function () {
  // 類似監聽 scroll 滾動位置
  $(window).scroll(function () {
    // 讀取 scroll 滾動位置
    const scrollPos = $(window).scrollTop()
    // 讀取 window 高度
    const windowHeight = $(window).height()
    // css 動畫
    $('.animated').each(function () {
      const thisPos = $(this).offset().top
      if ((windowHeight + scrollPos) >= (thisPos + 300)) {
        $(this).addClass('fadeIn')
      }
    })
  })
})
</script>

<style scoped>
/* animated */
.animated{
  opacity: 0;
  transition: all 3s;
  transform: translateX(-300px);
}
.fadeIn{
  opacity: 1;
  transform: translateY(0px);
}
</style>
