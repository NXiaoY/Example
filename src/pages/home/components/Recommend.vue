<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/90/90b849894982d934.water.jpg_200x200_6c7dbab0.jpg',
        title: '茂名潜梦岛海洋王国（原放鸡岛）',
        desc: '金秋出现每天好几次每天抢购'
      }, {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/3ab9e822a4bcdd13d145312a8b268317.jpg_200x200_198ed553.jpg',
        title: '浪漫海岸度假区',
        desc: '金秋出现每天好几次每天抢购'
      }, {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/24/348debe79e28502493835fbb.png_200x200_015180ac.png',
        title: '御水古温泉',
        desc: '金秋出现每天好几次每天抢购'
      }]
    }
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
.item
  overflow hidden
  display flex
  .item-img
    width 8.2rem
    height 8.2rem
    padding .6rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height 3.7rem
      font-size 1.32rem
      ellipsis()
    .item-desc
      line-height 1.6rem
      color #999
      font-size 1.1rem
      ellipsis()
    .item-button
      margin-top 1rem
      background #ff9300
      padding .2rem .8rem
      border-radius .1rem
      color #fff
      border none
      text-align center
      line-height 1.8rem
</style>
