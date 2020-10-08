<template>
  <div>
    <!-- 头部组件 -->
    <van-sticky>
      <app-header v-show="top < 300">
        <div slot="left">elm.me</div>
        <div slot="right" v-show="id" @click="$router.push('/home/profile')"><van-icon name="manager-o" /></div>
        <div slot="right" v-show="!id" @click="$router.push('/login')">
          登录|注册
        </div>
      </app-header>
      <div @click="topto" v-show="top >= 300">双击回到顶部</div>
    </van-sticky>
    <h3>当前定位城市</h3>
    <!-- 进入详情 -->
    <p @click="$router.push('/detail?id=' + guess.id)">{{ guess.name }}</p>
    <!-- 热门城市 -->
    <h3>热门城市</h3>
    <van-grid :column-num="4">
      <!-- 进入详情 -->
      <van-grid-item
        v-for="(item, index) in hot"
        :key="index"
        :text="item.name"
        @click="$router.push('/detail?id=' + item.id)"
      />
    </van-grid>
    <!-- 全部城市 -->
    <hr />
    <van-index-bar :index-list="keys">
      <van-index-anchor
        :index="item"
        v-for="(item, index) in keys"
        :key="index"
      >
        <p style="paddingTop: 46px">{{ item }}</p>
        <van-grid :column-num="4">
          <!-- 进入详情 -->
          <van-grid-item
            v-for="(it, i) in group[item]"
            :key="i"
            :text="it.name"
            @click="$router.push('/detail?id=' + it.id)"
          />
        </van-grid>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity } from "../utils/api";
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
    return {
      guess: {}, //北京
      hot: [], //热门城市
      group: {}, //全部城市
      keys: [], // 字母集合
      top: 0, // 顶部高度
      id: localStorage.getItem('user_id')||0, //用户id
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async city() {
      // 北京
      let { data } = await getCity("guess");
      this.guess = data;
      // 全部城市
      let { data: res } = await getCity("group");
      this.keys = Object.keys(res).sort();
      // 排序一
      // this.keys.map((item) => {
      //   this.$set(this.group, item, res[item]);
      //   this.group[item] = res[item];
      // });
      // 排序二
      this.group = res;
      // 热门城市
      let { data: res1 } = await getCity("hot");
      this.hot = res1;
    },
    // 获取顶部高度
    sstop() {
      this.top = document.documentElement.scrollTop;
    },
    // 点击回到顶部
    topto() {
      //   console.log(1234);
      //   let time
      //    time = setInterval(()=>{
      //        document.documentElement.scrollTop=this.top-500
      //        if(this.top<=0){
      //            clearInterval(time)
      //        }
      //    },100)
      document.documentElement.scrollTop = 0;
    },
  },
  created() {},
  mounted() {
    this.city();
    // 绑定 srcoll事件
    window.addEventListener("scroll", this.sstop);
    // 获取用户id
  },
};
</script>
<style scoped lang='scss'>
.van-nav-bar {
  background-color: rgb(0, 183, 255);
  font-weight: bold;
  color: #fff;
}

.van-sticky > div {
  height: 46px;
  text-align: center;
  color: #fff;
  background-color: rgb(0, 183, 255);
  line-height: 46px;
  transition: all 0.5s;
}
.van-grid-item__text {
  overflow: hidden;
}
</style>
