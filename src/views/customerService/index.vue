<template>
  <div>
    <div class="contnet">
      <!-- 面包屑 -->
      <div class="content_1" @click="toHome">
        当前位置：首页&nbsp;>&nbsp;联系客服
      </div>
      <!-- 客服二维码 -->
      <img src="../../assets/lianxikf.png" class="content_2" />
      <!-- 保存按钮 -->
      <div class="content_3" @click="saveImg">保存图片</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 图片路径
      saveImgpath: require("../../assets/boss.jpg"),
    };
  },
  methods: {
    // 保存图片到本地
    saveImg() {
      var blob = new Blob([""], { type: "application/octet-stream" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = this.saveImgpath;
      a.download = this.saveImgpath
        .replace(/(.*\/)*([^.]+.*)/gi, "$2")
        .split("?")[0];
      var e = document.createEvent("MouseEvents");
      e.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
      URL.revokeObjectURL(url);
    },
    // 返回首页
    toHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>