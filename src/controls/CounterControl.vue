<template>
  <div
    id="fillWrapper"
    class="counterControl"
    @click="updateAmoutTampons"
    :class="id"
    ref="some"
  >
    <div id="waveShape" class="fill" :class="{ isAnimated: isAnimated }"></div>
    <div class="fillContent">
      <div>
        still in stock:
        <h1>{{ fillPortion }} {{ name }}</h1>
      </div>
      <div>
        <button id="removeBackground">unlock</button>
      </div>
    </div>
  </div>
</template>

<script lang ="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    maxAmountStock: Number,
    amountStock: Number,
    type: String,
    id: String,
    tempHeight: Number,
  },

  setup(props) {
    const store = useStore();
    const id = props.id;
    const name = props.type;
    const background = computed(() => "");
    const fillPortion = computed(() => props.amountStock);
    const maxAmountStock = store.getters.maxAmountStock;
    const heightInPixel = 266;
    const heightOfAnimationContainer = ref(266 + "px");
    const isAnimated = ref(false);

    const updateAmoutTampons = () => {
      if (fillPortion.value > 0) {
        store.dispatch("updateAmount", {
          amountStock: props.amountStock,
          type: props.type,
        });

        isAnimated.value = true;
        removeAmount();
      } else {
        // trigger errormessage here!
        console.log("is empty");
      }
    };

    const removeAmount = (): void => {
      let pixelByOneAmount = heightInPixel / maxAmountStock;
      let pixelByAmount = fillPortion.value * pixelByOneAmount;
      let amoutToRemove = heightInPixel - pixelByAmount;
      heightOfAnimationContainer.value = pixelByAmount + "px";

      document.querySelector<HTMLElement>("." + id + " .fill").style.transform =
        "translate(0, " + amoutToRemove + "px)";

      setTimeout(() => {
        isAnimated.value = false;
      }, 3000);
    };

    onMounted(() => {
      removeAmount();
    });

    return {
      name,
      isAnimated,
      background,
      fillPortion,
      removeAmount,
      updateAmoutTampons,
      heightOfAnimationContainer,
    };
  },
});
</script>

<style scoped>
.counterControl {
  border-radius: 5px;
  cursor: pointer;
  width: 30vh;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid #850e1e;
  position: relative;
}

/* Water animation  */
#fillWrapper {
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}

.fill {
  background-image: url("../assets/blood.svg");
  height: 100%;
  z-index: 1;
  position: relative;
  width: 100%;
  background-repeat: repeat-x;
}

.fillContent {
  z-index: 1;
  position: absolute;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#fillWrapper #waveShape {
  width: 500px;
  bottom: 0;
  position: absolute;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 2s;
}

.isAnimated {
  height: v-bind(heightOfAnimationContainer);
  animation-name: waveAction;
}

@keyframes waveAction {
  0% {
    transform: translateX(-150px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
