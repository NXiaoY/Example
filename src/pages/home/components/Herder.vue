<template>
  <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe601;</div>
      </div>
      <div class="header-input"><span class="iconfont input-icon">&#xe600;</span>内容</div>
      <div class="header-right">城市<span class="iconfont arrow-icon">&#xe602;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    display flex
    line-height 3.8rem
    background $bgColor
    color #fff
    overflow hidden
    .header-left
      float left
      width 3.8rem
      .back-icon
        text-align center
        font-size 2rem
    .header-input
      flex 1
      background #fff
      border-radius .3rem
      margin-top .4rem
      padding-left 1rem
      height 3rem
      color #999
      line-height 3rem
      .input-icon
        padding 0 .6rem 0 0
    .header-right
      float right
      text-align center
      font-size 1.3rem
      padding 0 .6rem
      .arrow-icon
        font-size 1.5rem
</style>
