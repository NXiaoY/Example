<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
      },
      swiperList: [{
        id: '01',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
      }, {
        id: '02',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/507e5e117c000e575f3987fcde8b6aba.jpg_750x200_fb0a1e1a.jpg'
      }, {
        id: '03',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/fffc0c06ddfe6fa9bad3cd813b591873.jpg_750x200_528c2db7.jpg'
      }]
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
