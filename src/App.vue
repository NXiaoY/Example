<template>
  <div id="app">
    <!-- keep-alive 路由内容加载过一次后就路由中内容放到内存中，下一次进入这个路由的时候不用再一次渲染这个组件，重新执行钩子函数  -->
    <!-- exclude="组键名" 取消缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
