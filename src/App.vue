<template>
  <div id="app">
    <!-- 标签 -->
    <TabBar />
    <router-view />
  </div>
</template>
<script>
import TabBar from "./components/TabBar";
export default {
  mounted() {
    // 更改标签
    document.title = "您好,欢迎访问火客云控";
  },
  components: { TabBar },
};
</script>
<style lang="scss">
@import "./index.css";
</style>
