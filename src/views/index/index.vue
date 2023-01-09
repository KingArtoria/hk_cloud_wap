<template>
  <div>
    <div class="content">
      <!-- 标签 -->
      <div class="content_1">
        <!-- 单个标签 -->
        <div class="content_1_1" v-for="(item, index) in tagList" :key="index">
          {{ item }}
        </div>
      </div>
      <!-- 游戏列表 -->
      <div class="content_2">
        
      </div>
    </div>
  </div>
</template>

<script>
import { getGameList } from "@/utils/api";
export default {
  data() {
    return {
      // 标签列表
      tagList: [],
    };
  },
  methods: {
    // 获取游戏列表
    getGameList() {
      // 获取游戏列表API
      getGameList().then((res) => {
        // 游戏标签赋值
        this.tagList = res.data.tags;
        console.log(res);
      });
    },
  },
  mounted() {
    // 获取游戏列表
    this.getGameList();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>