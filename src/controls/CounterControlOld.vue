<template>
  <div
    class="counterControl"
    @click="updateAmoutTampons"
    :class="{ animation: isAnimated }"
  >
    <div>
      still in stock:
      <h1>{{ amountStockDiplay }} {{ name }}</h1>
    </div>
    <div>
      <button id="removeBackground" @click="waterAnimation">unlock</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    amountStock: Number,
    type: String,
  },

  setup(props) {
    const store = useStore();
    const amountStockDiplay = computed(() => props.amountStock);
    const name = props.type;
    const background = computed(() => "");
    let isAnimated = ref(false);

    const updateAmoutTampons = () => {
      store.dispatch("updateAmount", {
        amountStock: props.amountStock,
        type: props.type,
      });
      isAnimated.value = !isAnimated.value;
    };

    return {
      background,
      name,
      amountStockDiplay,
      updateAmoutTampons,
      isAnimated,
      waterAnimation,
    };
  },
});
</script>

<style scoped>
.counterControl {
  background: linear-gradient(to top, #4b014b 100%, rgb(255, 255, 255) 0%);
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  width: 30vh;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.animation {
  background: linear-gradient(to top, #4b014b 50%, rgb(255, 255, 255) 0%);
  animation-name: emptyContainer;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}

@keyframes emptyContainer {
  from {
    background: linear-gradient(to top, #4b014b 100%, rgb(255, 255, 255) 0%);
  }
  70% {
    background: linear-gradient(to top, #4b014b 80%, rgb(255, 255, 255) 0%);
  }
  to {
    background: linear-gradient(to top, #4b014b 50%, rgb(255, 255, 255) 0%);
  }
}
</style>
