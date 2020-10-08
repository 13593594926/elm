<template>
  <div class="profile">
    <!-- 头部组件 -->
    <van-sticky>
      <app-header>
        <div slot="left" @click="$router.go(-1)">
          <van-icon name="arrow-left" />
        </div>
        <div slot="title">我的</div>
        <div slot="right"></div>
      </app-header>
    </van-sticky>

    <van-card>
      <template #thumb>
        <van-image round :src="'//elm.cangdu.org/img/' + data.avatar" />
      </template>
      <template #desc>
        <div>
          <h3>{{ data.username }}</h3>
          <p><van-icon name="phone" />暂无绑定手机号</p>
        </div>
        <div><van-icon name="arrow" /></div>
      </template>
    </van-card>

    <van-grid :column-num="3">
      <van-grid-item text="我的余额">
        <template #icon>
          <span
            ><b style="color: #f90">{{ data.balance }}</b
            >元</span
          >
        </template>
      </van-grid-item>
      <van-grid-item text="我的优惠">
        <template #icon>
          <span
            ><b style="color: #ff5f3e">{{ data.gift_amount }}</b
            >个</span
          >
        </template>
      </van-grid-item>
      <van-grid-item text="我的积分">
        <template #icon>
          <span
            ><b style="color: #6ac20b">{{ data.point }}</b
            >分</span
          >
        </template>
      </van-grid-item>
    </van-grid>

    <div class="list" style="marginTop:10px">
      <van-notice-bar
        background="#fff"
        color="#000"
        left-icon="friends"
        text="我的订单"
      />
      <van-notice-bar
        background="#fff"
        color="#000"
        left-icon="shopping-cart"
        text="积分商城"
      />
      <van-notice-bar
        background="#fff"
        color="#000"
        left-icon="balance-list"
        text="饿了么会员卡"
      />
      <van-notice-bar
        style="margin-top: 0.1rem"
        background="#fff"
        color="#000"
        left-icon="phone-circle"
        text="服务中心"
      />
      <van-notice-bar
        background="#fff"
        color="#000"
        left-icon="down"
        text="下载饿了么"
      />
    </div>
  </div>
</template>

<script>
import appHeader from "@/components/header";
import { user } from "../utils/api";
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
      id: localStorage.getItem("user_id") || 0,
      data: {},
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async get() {
      let { data } = await user(this.id);
      this.data = data;
      console.log(this.data);
    },
  },
  mounted() {
    this.get();
  },
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang='scss'>
html,body{
    height: 100%;
}
.profile{
    background-color: #f5f5f5;
}
.van-card {
  background-color: #00b7ff;
  margin-top: 0;
  .van-card__content > div {
    color: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    align-items: center;
  }
}
.van-grid {
  b {
    font-size: 20px;
  }
  .van-grid-item__content {
    .van-grid-item__text {
      color: #ccc;
    }
  }
}
.list {
  margin-top: 0.2rem;
}

</style>
