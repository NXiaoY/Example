<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button bc">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                      v-for="item of hot"
                      :key="item.id"
                      @click="handleCityclick(item.name)"
                    >
                      <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                      v-for="innerItem of item"
                      :key="innerItem.id"
                      @click="handleCityclick(innerItem.name)"
                    >{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
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
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
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
