<template>
  <div class="outerWrapper header">
    <div class="innerWrapper">
      <div class="lockView">
        <h2>
          welcome to vulgear__ <i> {{ username }}</i>
        </h2>
        <div class="counterControlWrapper">
          <CounterControl
            id="first"
            :amountStock="this.$store.getters.amountTampons"
            type="tampons"
          />
          <CounterControl
            id="second"
            :amountStock="this.$store.getters.amountPads"
            type="pads"
          />
        </div>
      </div>
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
.lockView {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.counterControlWrapper {
  display: flex;
  gap: 20px;
}
</style>
