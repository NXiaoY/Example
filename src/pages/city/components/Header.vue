<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe601;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/gradual.styl'
.header
  overflow hidden
  position relative
  height $harderHeight
  line-height $harderHeight
  text-align center
  color #ffffff
  font-size 1.3rem
  gradual()
  .header-back
    position absolute
    width 3.8rem
    text-align center
    font-size 2rem
    top 0
    left 0
    color #fff
</style>
