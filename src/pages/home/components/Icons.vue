<template>
    <div class="icons">
        <swiper :options="swiperOption">
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
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '茂名必游'
      }, {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
        desc: '海滨海岛'
      }, {
        id: '04',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '森林公园'
      }, {
        id: '05',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
        desc: '广州融创'
      }, {
        id: '06',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png',
        desc: '放鸡岛'
      }, {
        id: '07',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f7/1d29fae36b0f3602.png',
        desc: '浪漫海岸'
      }, {
        id: '08',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
        desc: '玻璃栈道'
      }, {
        id: '09',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '10',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: '玩转长隆'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
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
