<template>
  <div class="outerWrapper header">
    <div class="innerWrapper">
      <h2>
        welcome to vulgear__ <i> {{ username }}</i>
      </h2>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const username = store.getters.username;

    return {
      username,
    };
  },
});
</script>

<style scoped>
</style>
