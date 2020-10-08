<template>
  <div>
    <!-- 头部组件 -->
    <van-sticky>
      <app-header>
        <div slot="left">elm.me</div>
        <div slot="title" @click="$router.push('/')">{{ data.address }}</div>
        <div slot="right" v-show="id" @click="$router.push('/home/profile')">
          <van-icon name="manager-o" />
        </div>
        <div slot="right" v-show="!id" @click="$router.push('/login')">
          登录|注册
        </div>
      </app-header>
    </van-sticky>

    <van-swipe class="my-swipe" indicator-color="blue">
      <van-swipe-item>
        <van-grid :column-num="4">
          <van-grid-item
            v-for="(item, index) in res"
            :key="index"
            :text="item.title"
            v-if="index < 8"
          >
            <template #icon>
              <van-image
                width="50"
                height="50"
                :src="'https://fuss10.elemecdn.com/' + item.image_url"
              /> </template
          ></van-grid-item>
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :column-num="4">
          <van-grid-item
            v-for="(item, index) in res"
            :key="index"
            :text="item.title"
            v-if="index > 7"
          >
            <template #icon>
              <van-image
                width="50"
                height="50"
                :src="'https://fuss10.elemecdn.com/' + item.image_url"
              /> </template
          ></van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>

    <van-card
      :thumb="'//elm.cangdu.org/img/' + item.image_path"
      v-for="(item, index) in list"
      :key="index"
    >
      <template #title>
        <div class="header">
          <h4><span>品牌</span>{{ item.name }}</h4>
          <ul>
            <li v-for="(it, i) in item.supports" :key="i">
              {{ it.icon_name }}
            </li>
          </ul>
        </div>
        <div class="conter">
          <div>
            <van-rate
              v-model="item.rating"
              allow-half
              void-icon="star"
              color="#ff9a0d"
              size="10px"
              void-color="#eee"
            />
            <span style="color: #ff9a0d"> {{ item.rating }}</span>
            <span> 月销售{{ item.recent_order_num }}单</span>
          </div>
          <div>
            <span class="sp sp_left">{{ item.delivery_mode.text }}</span>
            <span class="sp sp_right">准时达</span>
          </div>
        </div>
        <div class="footer">
          <div>
            <p style="color: #666">
              ￥{{ item.float_minimum_order_amount }}起送/{{
                item.piecewise_agent_fee.tips
              }}
            </p>
          </div>
          <div>
            <span style="color: #999">{{ item.distance }}/</span>
            <span style="color: #3190e8">{{ item.order_lead_time }}</span>
          </div>
        </div>
      </template>
    </van-card>
  </div>
</template>
<script>
import appHeader from "@/components/header";
import { msite, date, lists } from "../utils/api";
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
      geohash:'',
      data: {},
      res: [],
      list: [],
      id: localStorage.getItem('user_id')||0, //用户id

    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async getMsite() {
      this.geohash=JSON.parse(localStorage.getItem('placeHistory'))[0].geohash
      let { data } = await msite(this.geohash);
      //   console.log(data);
      this.data = data;
      let { data: res } = await date(this.geohash);
      //   console.log(res);
      this.res = res;
      let { data: list } = await lists(data.latitude, data.longitude);
      console.log(list);
      this.list = list;
    },
  },
  mounted() {
    this.getMsite();
  },
};
</script> 
<style scoped lang="scss">
.van-card__content {
  > div {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    h4 {
      span {
        display: inline-block;
        font-size: 15px;
        color: #333;
        background-color: #ffd930;
        padding: 0 1px;
        border-radius: 2px;
        margin-right: 3px;
      }
    }
    ul {
      display: flex;
      li {
        padding: 2px;
        border: 1px solid #f1f1f1;
        margin-left: 3px;
      }
    }
  }
  .conter {
    .sp {
      padding: 2px;
      border-radius: 3px;
      margin-left: 3px;
      font-size: 10px;
    }
    .sp_left {
      color: #fff;
      background-color: #3190e8;
      border: 1px solid #3190e8;
    }
    .sp_right {
      color: #3190e8;
      border: 1px solid #3190e8;
    }
  }
}
</style>
