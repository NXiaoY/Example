<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" :ref="item"
          @click="handleLetterClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      // 标识位
      touchStatus: false,
      startY: 0,
      // 节流
      titmer: null
    }
  },
  updated () {
    // 页面完成渲染了以后执行
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 兄弟传值  传值数据到 City.vue ，然后 City 接收数据 再传值到 List.vue
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      // 手指触摸的时候
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 手指上下滑动的时候
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(()  => {
          const touchY = e.touches[0].clientY - 72
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        },16)
      }
    },
    handleTouchEnd () {
      // 手指停止滑动
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 6.3rem
  right 0
  bottom 0
  width 2rem
  .item
    line-height 1.8rem
    text-align center
</style>
