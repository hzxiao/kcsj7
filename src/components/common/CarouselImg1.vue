<style lang="scss" scoped>
.CarouselImg1 {
  width: 100%; height:100%;
  
  .Image { width: 100%; height:200px;}
}
</style>

<template>
  <div class="CarouselImg1">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in items">
          <img class="Image" v-bind:src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'CarouselImg1',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      items: [
        'http://www.bslxx.com/uploads/allimg/171227/1945325Z8-0-lp.jpg',
        'http://www.bslxx.com/uploads/allimg/171230/20400VY4-0-lp.png',
        'http://www.bslxx.com/uploads/allimg/171229/1350454Q1-0-lp.png'
      ]
    }
  }
}
</script>