<template>
    <div>
      <my-header></my-header>
      <my-order :list="OrderList"></my-order>
      <my-signln></my-signln>
      <my-morefeatures :list="MorefeaturesList"></my-morefeatures>
    </div>
</template>

<script>
import MyHeader from './components/Header'
import MyOrder from './components/Order'
import MySignln from './components/SignIn'
import MyMorefeatures from './components/Morefeatures'
import axios from 'axios'
export default {
  name: 'My',
  components: {
    MyHeader,
    MyOrder,
    MySignln,
    MyMorefeatures
  },
  data () {
    return {
      OrderList: [],
      MorefeaturesList: []
    }
  },
  methods: {
    getMyInfo () {
      axios.get('/api/my.json').then(this.getMyInfoSucc)
    },
    getMyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.OrderList = data.OrderList
        this.MorefeaturesList = data.MorefeaturesList
      }
    }
  },
  mounted () {
    this.getMyInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
