<template>
  <div>
    <!-- tabBar -->
    <div class="tabBar">
      <!-- 输入框 -->
      <div class="tabBar_1">
        <!-- 输入框 -->
        <van-field
          placeholder="请输入关键词"
          :border="false"
          style="height: 2.24rem"
          center
        />
        <!-- 按钮 -->
        <div class="tabBar_1_1">搜索</div>
      </div>
      <!-- 菜单 -->
      <div class="tabBar_2" @click="show = true">
        <!-- icon -->
        <img src="../assets/cd.png" class="tabBar_2_1" />
      </div>
    </div>
    <!-- 点击后的遮罩tabBar -->
    <van-overlay :show="show">
      <!-- tabBar -->
      <div class="tabBar">
        <!-- 输入框 -->
        <div class="tabBar_1">
          <!-- 输入框 -->
          <van-field
            placeholder="请输入关键词"
            :border="false"
            style="height: 2.24rem"
            center
          />
          <!-- 按钮 -->
          <div class="tabBar_1_1">搜索</div>
        </div>
        <!-- 菜单 -->
        <div class="tabBar_2" @click="show = false">
          <!-- icon -->
          <img src="../assets/ch.png" class="tabBar_2_1" />
        </div>
      </div>
      <!-- 信息盒子 -->
      <div class="box" style="padding-top: 3.424rem">
        <!-- 用户信息 -->
        <div class="box_1">
          <!-- 头像 -->
          <img :src="userInfo.head" class="box_1_1" />
          <!-- 信息 -->
          <div class="box_1_2">
            <!-- 头部信息 -->
            <div class="box_1_2_1">
              <!-- 名字 -->
              <div class="box_1_2_1_1">{{ userInfo.real_name }}</div>
              <!-- ID -->
              <div class="box_1_2_1_2">ID：{{ userInfo.id }}</div>
            </div>
            <!-- 注册的手机号 -->
            <div class="box_1_2_2">注册手机号：{{ userInfo.phone }}</div>
          </div>
        </div>
        <!-- 选项盒子 -->
        <div class="box_2">新人教程</div>
        <!-- 选项盒子 -->
        <div class="box_2">0.3元小游戏</div>
        <!-- 手风琴 -->
        <van-collapse v-model="activeNames" :border="false">
          <van-collapse-item title="学习资料" name="1">
            <div class="box_3_1">简单卡包</div>
            <div class="box_3_1">养机卡包①</div>
            <div class="box_3_1">养机卡包②</div>
            <div class="box_3_1">养机卡包③</div>
          </van-collapse-item>
        </van-collapse>
        <!-- 选项盒子 -->
        <div class="box_2" @click="toCustomer">联系客服</div>
        <!-- 退出登录 -->
        <div class="box_3" @click="logout">退出登录</div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      // tabBar遮罩
      show: false,
      activeNames: ["1"],
    };
  },
  methods: {
    // 退出登录
    logout() {
      // 关闭遮罩
      this.show = false;
      // 删除token
      localStorage.removeItem("hcw_token");
      // 删除用户信息
      localStorage.removeItem("hcw_user");
      // 清空用户信息
      this.user = {
        head: "",
        real_name: "暂未登录",
        id: "暂未登录",
        phone: "暂未登录",
      };
      // 触发全局退出登录事件
      this.$bus.$emit("overlay");
    },
    // 前往客服
    toCustomer() {
      // 关闭遮罩
      this.show = false;
      // 跳转客服
      this.$router.push("/customerService");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.tabBar {
  width: 24rem;
  height: 3.424rem;
  background: #313131;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .tabBar_1 {
    width: 19.648rem;
    height: 2.24rem;
    background: #ffffff;
    border-radius: 0.256rem;
    margin-right: 0.768rem;
    padding-left: 0.8rem;
    display: flex;
    align-items: center;
    .tabBar_1_1 {
      width: 3.008rem;
      height: 2.24rem;
      background: #f3793d;
      border-radius: 0px 0.256rem 0.256rem 0px;
      font-size: 0.832rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 2.24rem;
      text-align: center;
    }
  }
  .tabBar_2 {
    width: 2.24rem;
    height: 2.24rem;
    background: #494949;
    border-radius: 0.256rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .tabBar_2_1 {
      width: 80%;
      height: 80%;
    }
  }
}
.box {
  width: 24rem;
  background: #ffffff;
  box-shadow: 0px 0.352rem 1.568rem 0px rgba(0, 0, 0, 0.22);
  .box_1 {
    height: 5.216rem;
    display: flex;
    align-items: center;
    padding-left: 0.768rem;
    border-bottom: 0.032rem solid #dedede;
    .box_1_1 {
      width: 2.88rem;
      height: 2.88rem;
      border-radius: 50%;
      margin-right: 0.992rem;
    }
    .box_1_2 {
      height: 2.88rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .box_1_2_1 {
        display: flex;
        align-content: flex-end;
        .box_1_2_1_1 {
          font-size: 0.96rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1;
          margin-right: 1.76rem;
        }
        .box_1_2_1_2 {
          font-size: 0.768rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #919191;
          line-height: 1;
        }
      }
      .box_1_2_2 {
        font-size: 0.768rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #1a1a1a;
        line-height: 1;
      }
    }
  }
  .box_2 {
    height: 3.072rem;
    padding-left: 0.768rem;
    border-bottom: 0.032rem solid #f4f4f4;
    line-height: 3.072rem;
    font-size: 0.96rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #1a1a1a;
  }
  .box_3 {
    height: 3.36rem;
    text-align: center;
    line-height: 3.36rem;
    font-size: 0.96rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ff1818;
  }
}
</style>