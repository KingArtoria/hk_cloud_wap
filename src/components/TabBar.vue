<template>
  <div>
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
      <div class="tabBar_2">
        <!-- icon -->
        <img src="../assets/cd.png" class="tabBar_2_1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>