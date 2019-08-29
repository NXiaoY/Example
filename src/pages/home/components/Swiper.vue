<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        //   传值  小圆点
        pagination: '.swiper-pagination',
        // loop 支持轮播循环
        loop: true
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    // 从第一张图开始
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.wrapper >>> .swiper-pagination-bullet-active
  background #FFF
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 26%
  background #eee
  touch-action: none
  .swiper-img
    width 100%
</style>
