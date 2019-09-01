<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button bc">茂名</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">上海</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">三亚</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">香港</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">杭州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">广州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">成都</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">苏州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">桂林</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">西安</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">厦门</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">B</div>
                <div class="item-list">
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">C</div>
                <div class="item-list">
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                    <div class="item border-bottom">ABC</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.border-bottom
  &:before
    border-color #ccc
  &:before
    border-color #ccc
.list
  position absolute
  overflow hidden
  top 6.3rem
  left 0
  right 0
  bottom 0
  .title
    line-height 2.5rem
    background #f5f5f5
    padding-left .8rem
    color #666
    font-size 1.2rem
  .button-list
    padding .1rem 2rem .1rem .2rem
    overflow hidden
  .button-wrapper
    width 33.33%
    float left
    .button
      margin .5rem
      text-align center
      border: .02rem solid #ccc
      padding .3rem 0
    .bc
      border-color $bgColor
      color $bgColor
.item-list
  .item
    line-height 2rem
    padding-left .8rem
</style>
