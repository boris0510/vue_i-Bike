<template>
  <div class="banner">
    <swiper
      :spaceBetween="0"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="false"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="img-bg" style="background-image: url('https://upload.cc/i1/2021/06/23/pUrVjt.jpg');">
          <div class="content">
            <p class="fs-1">挑戰自己創造極限</p>
            <p class="fs-3">2021 新品上市</p>
            <a href="#/products/all" class="btn btn-dark btn-hover rounded-0">了解更多</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-bg" style="background-image: url('https://upload.cc/i1/2021/06/23/8fXSZ7.jpg');">
          <div class="content">
            <p class="fs-1">嚴格品質檢驗關卡</p>
            <p class="fs-3">把關產品組裝品質</p>
            <a href="#/about" class="btn btn-dark btn-hover rounded-0">了解更多</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-bg" style="background-image: url('https://upload.cc/i1/2021/05/12/Kumk6L.jpg');">
          <div class="content">
            <p class="fs-1">創造健康的新生活</p>
            <p class="fs-3">讓運動成為好夥伴</p>
            <a href="#/products/all" class="btn btn-dark btn-hover rounded-0">了解更多</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script scoped>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'

import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.banner{
  margin-top: 60px;
}

.swiper-slide {
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.img-bg{
  background-size: cover;
  background-position: center center;
  min-height: 500px;
}

@media (max-width: 768px) {
  .img-bg{
    min-height: 300px;
  }
}

.content{
  color: #FFF;
  position: relative;
  top: 150px;
  left: 230px;
}
.content p{
  letter-spacing: 3px;
}
@media (max-width: 768px) {
  .content{
    top: 90px;
    left: 40px;
  }
}

</style>
