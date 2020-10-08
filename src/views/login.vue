<template>
  <div>
    <!-- 头部组件 -->
    <van-nav-bar
      title="密码登录"
      left-text="返回"
      @click-left="$router.go(-1)"
    />
    <!-- from 表单 -->
    <van-form>
      <!-- 用户名 -->
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[
          {
            pattern: /^((\+|00)86)?((134\d{4})|((13[0-3|5-9]|14[1|5-9]|15[0-9]|16[2|5|6|7]|17[0-8]|18[0-9]|19[0-2|5-9])\d{8}))$/,
            message: '请填写正确手机号',
          },
        ]"
      />
      <!-- 密码 -->
      <div id="password">
        <van-field
          v-model="password"
          :type="type"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ pattern: /^\d{6}$/, message: '请填写正确密码' }]"
        />
        <div class="switch" @click="swit">
          <app-switch :flag="flag"></app-switch>
        </div>
      </div>
      <!-- 验证码 -->
      <div class="codea">
        <van-field
          v-model="code"
          name="验证码"
          label="验证码"
          placeholder="验证码"
        />
        <div class="code">
          <img :src="src" alt="" />
          <span @click="getCode">看不清 换一张 </span>
        </div>
      </div>
      <!-- 提交按钮 -->
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          :disabled="username == '' || password == '' || code == ''"
          @click="sub"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
// switch 开关
import AppSwitch from "./switch";
import { code } from "../utils/api";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { AppSwitch },
  // 组件状态值
  data() {
    return {
      username: "13593594926", //用户名
      password: "123456", //密码
      code: "", //验证码
      src: "", //验证码src
      flag: false, //swicth开关
      type: "password", //密码类型
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 获取验证码图片
    async getCode() {
      let res = await code();
      this.src = res.data.code;
    },
    // 登录
    async sub() {
      // 写入cookie
      this.setCookie("cap", this.code, 2);
      this.setCookie("SID", 100, 2);
      let { data } = await axios.post("http://elm.cangdu.org/v2/login", {
        username: this.username,
        password: this.password,
        captcha_code: this.code,
      });
      if (data.id != "") {
        localStorage.setItem('user_id',data.id)
        this.$router.push("/");
      }
    },
    // 设置cookie
    setCookie(key, value, t) {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + t);
      document.cookie = key + "=" + value + "; maxAge=" + oDate.toDateString();
    },
    // switch 开关
    swit() {
      this.flag = !this.flag;
      this.flag ? (this.type = "text") : (this.type = "password");
    },
  },
  mounted() {
    this.getCode();
  },
};
</script> 
<style scoped lang='scss'>
.codea {
  position: relative;
  .code {
    position: absolute;
    top: 7px;
    right: 16px;
    z-index: 999;
  }
}
#password {
  position: relative;
  .switch {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 999;
  }
}
</style>
