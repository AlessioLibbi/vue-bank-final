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
.my-input {
  &.q-field {
    max-width: 10rem;
    min-height: unset;
    height: 32px;
    .q-field__inner {
      min-height: unset;
      height: 32px;
      .q-field__control {
        background: #fff;
        min-height: unset;
        height: 32px;
        &:before,
        .q-field__native,
        .q-field__control-container {
          min-height: unset;
          height: 32px;
          text-align: right;
        }
      }
    }
  }
}
 
.my-input-small {
  &.q-field {
    max-width: 7rem;
    min-height: unset;
    height: 20px;
    .q-field__inner {
      min-height: unset;
      height: 20px;
      .q-field__control {
        background: #fff;
        min-height: unset;
        height: 20px;
        &:before,
        .q-field__native,
        .q-field__control-container {
          min-height: unset;
          height: 20px;
          text-align: right;
        }
      }
    }
  }
}
 
.my-input-medium {
  &.q-field {
    max-width: 6.5rem;
    min-height: unset;
    height: 32px;
    .q-field__inner {
      min-height: unset;
      height: 32px;
      .q-field__control {
        background: #fff;
        min-height: unset;
        height: 32px;
        &:before,
        .q-field__native,
        .q-field__control-container {
          min-height: unset;
          height: 32px;
          text-align: right;
        }
      }
    }
  }
}
.my-toggle {
  margin: auto;
  display: flex;
  max-width: 832px;
  padding: 2.5rem 0rem;
  .toggle {
    padding-right: 4rem;
  }
 
.q-toggle__inner--truthy .q-toggle__thumb:after {
  background-color: white
}
body.desktop .q-toggle:not(.disabled):hover .q-toggle__thumb:before {
  transform: scale3d(0, 0, 0);
}
 
.q-toggle[aria-checked=false] .q-toggle__track {
  opacity: 1;
  color: #96c2d1;
}
}
</style>
