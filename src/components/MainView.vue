<template>
  <div class="wrapper">
    <!-- <h1>vulgear</h1> -->
    <MenuView />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      isLoggedin: false,
    };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  align-items: center;
}
</style>
