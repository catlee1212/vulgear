<template>
  <div class="wrapper">
    <!-- <h1>vulgear</h1> -->
    <router-view></router-view>
    <MenuView />
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
</style>
