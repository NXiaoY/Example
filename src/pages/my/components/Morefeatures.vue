<template>
    <div>
        <div class="photo-icon">
            <span class="iconfont arrow-icon">&#xe609;</span>
            更多功能
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
  name: 'MyMorefeatures',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.photo-icon
  font-size 1.3rem
  padding 5% 0 2% 5%
  .arrow-icon
    color #00cc99
    font-size 2rem
.icons
  overflow hidden
  height 0
  padding-bottom 60%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 17%
    .icon-img
      position absolute
      top -1.4rem
      left 0
      right 0
      box-sizing border-box
      padding 3rem
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
