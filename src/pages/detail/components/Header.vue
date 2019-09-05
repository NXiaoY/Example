<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-back">&#xe601;</div>
        </router-link>
        <fade-animation>
          <router-link tag="div" to="/" class="header-fixed" v-show="!showAbs" :style="opacityStyle">
              <div class="iconfont header-fixed-back">&#xe601;</div>
              景点详情
          </router-link>
        </fade-animation>
    </div>
</template>

<script>
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  components: {
    FadeAnimation
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被隐藏或者将被替换的时候执行
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header-abs
  position absolute
  left 1rem
  top .6rem
  width 2.8rem
  height 2.8rem
  line-height 2.8rem
  border-radius 5rem
  text-align center
  background rgba(0,0,0,.8)
  .header-back
    color #fff
    font-size 1.5rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $harderHeight
  line-height $harderHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size 1.3rem
  .header-fixed-back
    position absolute
    left 1rem
    top .6rem
    width 2.8rem
    height 2.8rem
    line-height 2.8rem
    border-radius 5rem
    text-align center
    font-size 1.5rem
</style>
