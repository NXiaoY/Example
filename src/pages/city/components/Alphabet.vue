<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
