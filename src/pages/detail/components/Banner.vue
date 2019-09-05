<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
          <div class="banner-tittle">{{this.sightName}}</div>
          <div class="banner-number"><span class="iconfont banner-icon">&#xe71b;</span>
            {{this.bannerImgs.length}}
          </div>
        </div>
      </div>
      <fade-animation>
        <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner
  overflow hidden
  height 0
  padding-bottom 55%
  position relative
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 3rem
    color #fff
    background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-tittle
      flex 1
      font-size 1.5rem
      padding 0 .6rem
    .banner-number
      padding .2rem .5rem
      line-height 1.2rem
      height 1.2rem
      border-radius .5rem
      background rgba(0,0,0,.7)
      font-size .7rem
      margin-top 1rem
      margin-right 1rem
      .banner-icon
        font-size .7rem
</style>
