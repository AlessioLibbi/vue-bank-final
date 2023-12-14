<script>
export default {
    props:['ownerName']
};
</script>

<template>
  <div class="header-container">
    <div class="header-content">
      <h5>LOGO</h5>
      <h5 class="nome">{{ownerName}}</h5>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header-container {
  width: 1920px;
  height: 118px;
  flex-shrink: 0;
  background: #5a6e75;

  color: white;
  .img {
    background: #5a6e75;
  }
  .header-content {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 118px;
    .nome {
      padding-right: 80px;
    }
  }
}
</style>
