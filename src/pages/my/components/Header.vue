<template>
    <div class="header">
        <div class="header-icon">
            <img class="header-img" src="https://thirdqq.qlogo.cn/qqapp/100402580/CC0027C947151A98AEDFDFBF557812EF/100" alt="">
        </div>
        <div class="item-info">
            <p class="item-title">摸了喵要洗手</p>
            <button class="item-button">登录/注册</button>
        </div>
        <router-link tag="div" to="/">
          <div class="header-right"><span class="iconfont arrow-icon">&#xe60a;</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header
  overflow hidden
  display flex
  .header-icon
    padding 2.5rem 2rem 1.6rem 2rem
    .header-img
      width 5rem
      height 5rem
      border-radius 5rem
  .item-info
    flex 1
    padding .5rem .1rem
    min-width 0
    .item-title
      margin-top .8rem
      line-height 3.7rem
      font-size 1.6rem
      ellipsis()
    .item-button
      border none
      background #262626
      color #ffffff
      padding .4rem 1.6rem
      border-radius 5rem
      font-size 1.2rem
  .header-right
    padding 1.2rem 1.2rem 0 0;
    .arrow-icon
      font-size 5rem
      color #666
</style>
