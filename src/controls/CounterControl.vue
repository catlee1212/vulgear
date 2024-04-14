<template>
  <div
    id="fillWrapper"
    class="counterControl"
    @click="updateAmoutTampons"
    :class="id"
    ref="some"
  >
    <div class="fill"></div>
    <div class="fillContent">
      <div>
        still in stock:
        <h1>{{ amountStockDiplay }} {{ name }}</h1>
      </div>

      <div>
        <button id="removeBackground" @click="waterAnimation">unlock</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    amountStock: Number,
    type: String,
    id: String,
  },

  setup(props) {
    const store = useStore();
    const amountStockDiplay = computed(() => props.amountStock);
    const name = props.type;
    const background = computed(() => "");
    const fillPortion = computed(() => props.amountStock);
    let isAnimated = ref(false);
    const id = props.id;

    const updateAmoutTampons = () => {
      store.dispatch("updateAmount", {
        amountStock: props.amountStock,
        type: props.type,
      });
    };

    onMounted(() => {
      let height = 266;

      let amoutToRemove = height - (height / 100) * fillPortion.value;
      document.querySelector("." + id + " .fill").style.transform =
        "translate(0, " + amoutToRemove + "px)";
    });

    const waterAnimation = () => {
      let height = 266;
      let amoutToRemove = height - (height / 100) * fillPortion.value;
      if (fillPortion.value < 101) {
        document.querySelector("." + id + " .fill").style.transform =
          "translate(0, " + amoutToRemove + "px)";
      } else {
        console.log("is empty");
      }
    };

    return {
      name,
      isAnimated,
      background,
      amountStockDiplay,
      waterAnimation,
      updateAmoutTampons,
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
  /* position: relative; */
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

#fillWrapper .fill {
  /* transform: translate(0, 0px); */
  transition: all cubic-bezier(0.2, 0.6, 0.8, 0.4) 4s;
}

#fillWrapper #waveShape {
  animation-name: waveAction;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 0.5s;
  width: 300px;
  height: 150px;
  fill: #04acff;
}

@keyframes fillAction {
  0% {
    transform: translate(0, 150px);
  }
  100% {
    transform: translate(0, -5px);
  }
}

@keyframes waveAction {
  0% {
    transform: translate(-150px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
