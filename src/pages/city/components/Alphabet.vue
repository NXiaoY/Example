<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
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
    line-height 1.7rem
    text-align center
</style>
