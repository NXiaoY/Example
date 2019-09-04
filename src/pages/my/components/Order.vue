<template>
    <div>
        <div class="locationbox">
            <div class="location">
              <span class="iconfont arrow-icon">&#xe608;</span>
              我的订单
            </div>
            <div class="location tr">
              查看全部订单
              <span class="iconfont">&#xe60a;</span>
            </div>
        </div>
        <div class="icons">
            <div class="wrapper">
                <div class="icon" v-for="item of list" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyOrder',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.locationbox
  display -webkit-box
  display box
  width 100%
  background-color #fff
  .arrow-icon
    color #00cc99
    padding 0 .2rem
  .location
    overflow hidden
    -webkit-box-flex 1
    -moz-box-flex 1
    -ms-flexbox-flex 1
    box-flex 1
    width 0
    height 4rem
    line-height 4rem
    color #212121
    font-size 1.3rem
    margin-left 2rem
  .tr
    text-align right
    margin-right 2rem
.icons
  overflow hidden
  height 0
  padding-bottom 28%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 21%
    .icon-img
      position absolute
      top -.4rem
      left 0
      right 0
      box-sizing border-box
      padding 2.1rem
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
