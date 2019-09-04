<template>
  <div class="header">
      <router-link tag="div" to="/my" class="header-left">
        <div class="iconfont back-icon">&#xe743;</div>
      </router-link>
      <div class="header-input"><span class="iconfont input-icon">&#xe600;</span>内容</div>
      <router-link to="/city">
        <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe602;</span></div>
      </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/gradual.styl'
  .header
    display flex
    line-height $harderHeight
    color #fff
    overflow hidden
    gradual()
    .header-left
      float left
      width 3.8rem
      .back-icon
        text-align center
        font-size 2rem
    .header-input
      flex 1
      background #fff
      border-radius 5rem
      margin-top .5rem
      padding-left 1rem
      height 2.8rem
      color #999
      line-height 2.8rem
      .input-icon
        padding 0 .6rem 0 0
    .header-right
      float right
      text-align center
      font-size 1.3rem
      padding 0 .6rem
      color #fff
      min-width 0
      .arrow-icon
        font-size 1.5rem
</style>
