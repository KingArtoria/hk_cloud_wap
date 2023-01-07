<template>
  <div>
    <div class="tabBar">
      <!-- 输入框 -->
      <div class="tabBar_1">
        <!-- 输入框 -->
        <van-field placeholder="请输入关键词" :border="false" />
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
  .tabBar_1 {
  }
}
</style>