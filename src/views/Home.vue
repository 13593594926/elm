<template>
<div>
  <router-view></router-view>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" @click="$router.push('/home/msite')">外卖</van-tabbar-item>
  <van-tabbar-item icon="search" @click="$router.push('/home/search')">搜索</van-tabbar-item>
  <van-tabbar-item icon="comment-o" @click="$router.push('/home/order')">订单</van-tabbar-item>
  <van-tabbar-item icon="friends-o" @click="$router.push('/home/profile')">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>

export default {
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
   return {
     active:0
   }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  
  mounted () {
  },
}
</script> 
<style scoped>

</style>
