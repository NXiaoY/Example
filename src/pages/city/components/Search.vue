<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.search
  overflow hidden
  background $bgColor
  padding 0 .5rem
  height 2.5rem
  .search-input
    box-sizing border-box
    width 100%
    padding 0 .5rem
    line-height 2rem
    height 2rem
    text-align center
    border-radius .3rem
    border none
</style>
