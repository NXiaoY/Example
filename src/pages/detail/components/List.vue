<template>
  <div class="centen">
    <div class="item" v-for="(item,index) of list" :key="index">
        <div class="item-title border-bottom">
            <span class="item-title-icon"></span>
            {{item.title}}
        </div>
        <!-- 递归 -->
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .item-title
    line-height 2.8rem
    font-size 1.3rem
    padding 0 .4rem
    .item-title-icon
      position relative
      left .2rem
      top .06rem
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.1rem no-repeat
      margin-right: .2rem;
      background-size 1.08rem
  .item-children
    padding 0 1.1rem
</style>
