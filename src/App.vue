<template>
  <div id="app">
    <!-- 标签 -->
    <TabBar :userInfo="user" />
    <!-- 页面 -->
    <router-view style="padding-top: 3.424rem" />
    <!-- 登录遮罩层 -->
    <van-overlay :show="overlay">
      <!-- 登录框 -->
      <div class="overlay">
        <!-- 标题 -->
        <div class="overlay_1">火客云控后台登录</div>
        <!-- 分隔符 -->
        <div class="overlay_2" />
        <!-- 手机号输入框 -->
        <div class="overlay_3">
          <van-field
            type="tel"
            placeholder="请输入手机号码"
            style="height: 2.88rem; background: transparent"
            center
            v-model="loginParams.phone"
          />
        </div>
        <!-- 验证码输入框 -->
        <div class="overlay_4">
          <van-field
            type="digit"
            placeholder="请输入验证码"
            style="height: 2.88rem; background: transparent; width: 11.456rem"
            center
            v-model="loginParams.code"
          />
          <div class="overlay_4_1" @click="getVerifyCode">
            {{ verifyCodeText }}
          </div>
        </div>
        <!-- 登录按钮 -->
        <div class="overlay_5" @click="login">登录</div>
        <!-- tips -->
        <div class="overlay_6">未注册用户自动注册火客账户</div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import Vue from "vue";
import TabBar from "./components/TabBar";
import { errorTip, initAvatar, isNotEmpty } from "./utils";
import { getVerifyCode, login } from "./utils/api";
export default {
  data() {
    return {
      // 登录遮罩
      overlay: false,
      // 登录参数
      loginParams: {},
      // 验证码文案
      verifyCodeText: "获取验证码",
      // 用户信息
      user: {
        head: "",
        real_name: "暂未登录",
        id: "暂未登录",
        phone: "暂未登录",
      },
    };
  },
  methods: {
    // 登录
    login() {
      // 登录API
      login(this.loginParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return errorTip(res.msg);
        // 保存token
        localStorage.setItem("hcw_token", res.data.app_token);
        // 初始化用户信息
        res.data.userinfo.head = initAvatar(res.data.userinfo.head);
        // 保存当前值用户信息
        this.user = res.data.userinfo;
        // 保存用户信息
        localStorage.setItem("hcw_user", JSON.stringify(res.data.userinfo));
        // 声明全局用户信息
        Vue.prototype._user = JSON.parse(localStorage.getItem("hcw_user"));
        // 关闭遮罩
        this.overlay = false;
      });
    },
    // 获取验证码
    getVerifyCode() {
      // 验证码校验
      if (this.verifyCodeText != "获取验证码") return;
      // 参数
      let params = { phone: this.loginParams.phone };
      // 获取验证码API
      getVerifyCode(params).then((res) => {
        // 抛出异常
        if (res.code != 1) return errorTip(res.msg);
        // 更改文案
        this.verifyCodeText = "60s后重新获取";
        // 倒计时
        let time = 60;
        let timer = setInterval(() => {
          // 倒计时
          time--;
          // 更改文案
          this.verifyCodeText = `${time}s后重新获取`;
          // 倒计时结束
          if (time == 0) {
            // 清除定时器
            clearInterval(timer);
            // 更改文案
            this.verifyCodeText = "获取验证码";
          }
        }, 1000);
      });
    },
  },
  mounted() {
    // 更改标签
    document.title = "您好,欢迎访问火客云控";
    // 声明全局token
    Vue.prototype._token = localStorage.getItem("hcw_token");
    // 声明全局用户信息
    Vue.prototype._user = JSON.parse(localStorage.getItem("hcw_user"));
    // 初始化用户信息
    this.user = this._user;
    // 是否有token
    if (!isNotEmpty(this._token)) this.overlay = true;
    // 绑定自定义事件
    this.$bus.$on("overlay", () => {
      this.overlay = true;
    });
  },
  beforeCreate() {
    //安装全局事件总线
    Vue.prototype.$bus = this;
  },
  components: { TabBar },
};
</script>
<style lang="scss">
@import "./index.css";
@import "./index.scss";
.overlay {
  width: 19.84rem;
  height: 21.984rem;
  background: #ffffff;
  box-shadow: 0px 0px 2.24rem 0px rgba(232, 241, 251, 0.67);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  .overlay_1 {
    font-size: 1.216rem;
    font-family: PingFang SC;
    font-weight: 800;
    color: #282828;
    line-height: 1;
    text-align: center;
    padding-top: 2.08rem;
    margin-bottom: 0.672rem;
  }
  .overlay_2 {
    margin: 0 auto;
    width: 1.408rem;
    height: 0.16rem;
    background: #313131;
    margin-bottom: 1.952rem;
  }
  .overlay_3 {
    width: 17.28rem;
    height: 2.88rem;
    background: #f3f4f9;
    margin: 0 auto;
    margin-bottom: 0.8rem;
  }
  .overlay_4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17.28rem;
    height: 2.88rem;
    background: #f3f4f9;
    margin: 0 auto;
    margin-bottom: 3.264rem;
    .overlay_4_1 {
      width: 5.792rem;
      height: 2.88rem;
      background: #f3793d;
      text-align: center;
      line-height: 2.88rem;
      font-size: 0.768rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .overlay_5 {
    width: 17.28rem;
    height: 2.88rem;
    background: #313131;
    margin: 0 auto;
    margin-bottom: 1.024rem;
    font-size: 0.896rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 2.88rem;
    text-align: center;
  }
  .overlay_6 {
    font-size: 0.768rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #9a9ca9;
    line-height: 1;
    text-align: center;
  }
}
</style>
