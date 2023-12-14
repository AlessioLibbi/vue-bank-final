<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  props: ["ownerName"],
  components: {
    TheHeader,
  },
};
</script>

<template>
  <div>
    <TheHeader :title="this.ownerName" />
    <div class="pages">
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.pages {
  width: 80%;
  margin: 0 auto;
  .content-container {
    width: 80%;
    margin: 0 auto;
  }
}
.line {
  min-width: 100%;
  background: #e8e8e8;
  height: 3px;
}
</style>
