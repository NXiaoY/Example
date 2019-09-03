<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      dafault () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        //   传值  小圆点
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background rgba(0,0,0,.8)
  .wrapper
    width 100%
    height 0
    padding-bottom 66%
    background #fff
    .swiper-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -5rem
</style>
