<template>
  <div
    id="fillWrapper"
    class="counterControl"
    @click="updateAmoutInStock"
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
        <button class="generalButton dark" id="removeBackground">unlock</button>
      </div>
    </div>
  </div>
</template>

<script lang ="ts">
import { useStore } from "vuex";
import { defineComponent, computed, ref, onMounted, PropType } from "vue";
import type { Product } from "../assets/interfaces";
import axios from "axios";

export default defineComponent({
  name: "CounterControl",
  props: {
    maxAmountStock: Number,
    productType: String,
    id: String,
    usedProducts: Object as PropType<Product>,
  },

  setup(props) {
    let usedProduct: Product;
    for (let product in props.usedProducts) {
      if (props.usedProducts[product].productType === props.productType) {
        usedProduct = props.usedProducts[product];
      }
    }
    const store = useStore();
    const id = props.id;
    const name = props.productType;
    const fillPortion = computed(() => usedProduct.amountInStock);
    const maxAmountStock = store.getters.maxAmountStock;
    const heightInPixel = 266;
    const heightOfAnimationContainer = ref(266 + "px");
    const isAnimated = ref(false);

    const updateAmoutInStock = (): void => {
      if (fillPortion.value > 0) {
        store.dispatch("updateAmount", {
          amountInStock: usedProduct.amountInStock - 1,
          productType: usedProduct.productType,
        });

        saveSettings();
        isAnimated.value = true;
        removeAmount();
      } else {
        // TODO: trigger errormessage here!
        console.log("is empty");
      }
    };

    const saveSettings = async () => {
      const baseURL = "http://localhost:8080";
      const userId = localStorage.getItem("userid");
      const usedProducts = computed(() => store.getters.usedProducts);
      let _tempProducts = usedProducts.value;

      for (const product in _tempProducts) {
        if (_tempProducts[product].productType === usedProduct.productType) {
          _tempProducts[product].amountInStock = usedProduct.amountInStock;
        }
      }

      axios
        .patch(
          baseURL + "/products/" + userId,
          { usedProducts: _tempProducts },
          { withCredentials: true }
        )
        .then(function (response) {
          if (response.status === 200) {
            // do something here
            store.dispatch("updateUsedProducts", _tempProducts);
          }
        })
        .catch(function (error) {
          // Errormessage
          console.log(error);
        });
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
      fillPortion,
      updateAmoutInStock,
      heightOfAnimationContainer,
    };
  },
});
</script>

<style scoped>
.counterControl {
  border-radius: 100%;
  cursor: pointer;
  width: 30vh;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--buttonColor);
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
