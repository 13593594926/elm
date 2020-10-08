<template>
  <div>
    <!-- 头部组件 -->
    <van-sticky>
      <app-header>
        <div slot="left" @click="$router.go(-1)">elm.me</div>
        <div slot="title">搜索</div>
        <div slot="right"></div>

      </app-header>
    </van-sticky>
  </div>
</template>

<script>
import appHeader from "@/components/header";

export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appHeader },
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  mounted() {},
};
</script> 
<style scoped>
</style>
