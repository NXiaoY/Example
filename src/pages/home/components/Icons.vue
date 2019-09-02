<template>
    <div class="icons">
        <swiper :options="swiperOption" class="border-bottom">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        //   传值  小圆点
        pagination: '.swiper-pagination',
        // 轮播图不自动滚动
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons >>> .swiper-pagination-bullets
  bottom 5px
.icons
  overflow hidden
  height 0
  padding-bottom 50%
  touch-action: none
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 21%
    .icon-img
      position absolute
      top -.9rem
      left 0
      right 0
      box-sizing border-box
      padding 1.8rem
      .icon-img-content
        display block
        margin 0 auto
        width 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom .1rem
      height 1.1rem
      line-height 1.1rem
      text-align center
      color $darkTextColor
      font-size 1.1rem
      ellipsis()
</style>
