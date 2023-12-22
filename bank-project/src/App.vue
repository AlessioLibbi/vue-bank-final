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
    <div class="background">
      <div class="pages">
        <div class="content-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 2px;
  box-sizing: border-box;
  
}
body {
  background-color: #f4F4F4 ;
}
.background {
  background: #f4F4F4;
  width: 100%;
  height: 100%;
  .pages {
  width: 80%;
  margin: 0 auto;
  margin-top: 90px;
  background: #ffffff;
  .content-container {
    width: 80%;
    margin: 0 auto;
  }
}
}

.line {
  min-width: 100%;
  background: #e8e8e8;
  height: 3px;
}
</style>
