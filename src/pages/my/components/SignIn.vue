<template>
  <div class="wraaper">
      <div class="locationbox">
        <div class="location">
            <span class="iconfont arrow-icon">&#xe607;</span>
            {{date | formatDateTime}}今日已签
        </div>
        <div class="location tr">
            我的签到记录
            <span class="iconfont ">&#xe60a;</span>
        </div>
      </div>
      <div class="myphoto">
          <div class="photo-icon">
            <span class="iconfont arrow-icon">&#xe62f;</span>
            我的旅行
          </div>
          <p class="photo-desc">随时随地分享我的旅游游记</p>
          <button class="photo-button">开启分享我的旅行</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MySignln',
  data () {
    return {
      date: new Date()
    }
  },
  filters: {
    formatDateTime (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      return y + '-' + MM + '-' + d + ' '
    }
  },
  mounted () {
    var that = this
    this.timer = setInterval(() => {
    // 修改数据date
      that.date = new Date()
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
    // 在Vue实例销毁前，清除我们的定时器
      clearInterval(this.timer)
    }
  },
  created () {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.wraaper
  height 0
  padding-bottom 59.5%
  background #eeeeee
  overflow hidden
  .locationbox
    display -webkit-box
    display box
    width 100%
    background-color #fff
    margin .8rem 0
    .arrow-icon
      color #00cc99
      padding 0 .2rem
      font-size 1.5rem
    .location
      overflow hidden
      -webkit-box-flex 1
      box-flex 1
      width 0
      height 5rem
      line-height 5rem
      color #212121
      font-size 1.1rem
      margin-left 2rem
      color #666
    .tr
      text-align right
      margin-right 2rem
      font-size 1.3rem
      color #000
  .myphoto
    overflow hidden
    background #fff
    padding 5%
    font-size 1.3rem
    .arrow-icon
      color #00cc99
      font-size 2rem
    .photo-desc
      color #666
      font-size 1.1rem
    .photo-button
      border 0
      background #00cc99
      border-radius 2rem
      color #ffffff
      padding .7rem 3.8rem
      font-size 1.2rem
      margin 2rem 0 0 23%
</style>
