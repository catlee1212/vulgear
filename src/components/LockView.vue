<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="lockView">
        <h2>
          welcome to vulgear__ <i> {{ username }}</i>
        </h2>
        <div class="counterControlWrapper">
          <CounterControl
            id="first"
            :usedProducts="this.$store.getters.usedProducts"
            type="Tampons"
          />
          <CounterControl
            id="second"
            :usedProducts="this.$store.getters.usedProducts"
            type="Pads"
          />
          <CounterControl
            id="third"
            :usedProducts="this.$store.getters.usedProducts"
            type="Cups"
          />
          <CounterControl
            id="fourth"
            :usedProducts="this.$store.getters.usedProducts"
            type="Whipes"
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
.lockView {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
