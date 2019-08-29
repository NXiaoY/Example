<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.title
  line-height 2.5rem
  background #eee
  text-indent 1rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 37%
  .item-img
    width 100%
.item-info
  padding .1rem .6rem
.item-title
  line-height 2.6rem
  font-size 1.1rem
  ellipsis()
.item-desc
  line-height 1.6rem
  color #666
  ellipsis()
  width 80%
  padding-bottom .6rem
</style>
