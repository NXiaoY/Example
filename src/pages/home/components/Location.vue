<template>
   <div>
        <div class="locationbox">
        <div class="location border-right">{{this.currentCity}}<span class="iconfont arrow-icon">&#xe604;</span></div>
        <div class="location">旅游必玩<span class="iconfont arrow-icon">&#xe605;</span></div>
    </div>
    <div class="h"></div>
   </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'HomeLocation',
  props: {
    city: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityclick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang='stylus' scoped>
.locationbox
  display -webkit-box
  display -moz-box
  display -ms-flexbox
  display box
  width 100%
  background-color #fff
  .arrow-icon
    color #999
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
    text-align center
    font-size 1.3rem
.h
  height .6rem
  background #eee
</style>
