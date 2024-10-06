<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="DashboardView">
        <h2>
          welcome to vulgear__ <i> {{ username }}</i>
        </h2>
        <div class="counterControlWrapper">
          <CounterControl
            id="first"
            :usedProducts="this.$store.getters.usedProducts"
            productType="Tampons"
          />
          <CounterControl
            id="second"
            :usedProducts="this.$store.getters.usedProducts"
            productType="Pads"
          />
          <CounterControl
            id="third"
            :usedProducts="this.$store.getters.usedProducts"
            productType="Cups"
          />
          <CounterControl
            id="fourth"
            :usedProducts="this.$store.getters.usedProducts"
            productType="Whipes"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
// TODO: if isused true then display
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
.DashboardView {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
