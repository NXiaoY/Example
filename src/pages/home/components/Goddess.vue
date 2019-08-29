<template>
   <div>
        <div class="goddess">
            <div class="goddess-icon" v-for="item of goddessList" :key="item.id">
                <div class="goddess-info">
                    <p class="goddess-title">{{item.title}}</p>
                    <p class="goddess-desc">{{item.desc}}</p>
                </div>
                <img class="goddess-img" :src="item.imgUrl" alt="">
            </div>
        </div>
   </div>
</template>

<script>
import img from '@/assets/nav-012.png'
import img2 from '@/assets/nav-013.png'
import img3 from '@/assets/nav-014.png'
import img4 from '@/assets/nav-015.png'
export default {
  name: 'HomeGoddess',
  data () {
    return {
      goddessList: [{
        id: '01',
        imgUrl: img,
        title: '女神带你度周末',
        desc: '女神带你周末旅游'
      }, {
        id: '02',
        imgUrl: img2,
        title: '0元抽奖',
        desc: '女神带你周末旅游'
      }, {
        id: '03',
        imgUrl: img3,
        title: '身边旅游',
        desc: '女神带你周末旅游'
      }, {
        id: '04',
        imgUrl: img4,
        title: '千元出国',
        desc: '女神带你周末旅游'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.goddess
  overflow hidden
  height 0
  padding-bottom 40%
  .goddess-icon
    overflow hidden
    float left
    width 50%
    height 0
    padding-bottom 20%
    display flex
    .goddess-img
      width 4.5rem
      height 4.5rem
      padding .8rem
    .goddess-info
      flex 1
      padding .1rem
      min-width 0
      padding 1.4rem 1.1rem
      .goddess-title
        color #333
        font-size 1.3rem
        ellipsis()
      .goddess-desc
        color #999
        ellipsis()
</style>
