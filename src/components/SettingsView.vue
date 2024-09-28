<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <h1>configure your app</h1>

      <div class="settingsWrapper">
        <div class="innerSettings">
          <h2>Products you use</h2>
          <label
            class="settingsContainer"
            v-for="product in products"
            v-bind:key="product.type"
          >
            <CheckboxListControl
              :usedProduct="product"
              v-model="amount.value"
            />
          </label>
        </div>

        <div class="innerSettings">
          <h2>Amount in stock</h2>
          <p>Update here if you stock up</p>

          <label
            class="settingsContainer"
            v-for="product in products"
            v-bind:key="product.type"
          >
            <InputListControl
              :usedProduct="product"
              @fireErrorMessage="handleFireErrorMessage"
            />
          </label>
        </div>
      </div>
      <button @click="saveSettings" :disabled="hasErrorMessage">
        save settings
      </button>
    </div>

    <div v-if="hasErrorMessage" class="errorElement">
      <div class="innerErrorElement">
        <span
          >Sorry, the max amount that fit's in your box is exceeded. Please use
          a number below {{ maxAmount + 1 }} or buy a bigger box.
        </span>
      </div>
    </div>
  </div>
</template>

<script lang ="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { useStore } from "vuex";
import type { Product } from "../assets/interfaces";

export default defineComponent({
  name: "SettingsView",
  props: {
    usedProducts: Object as PropType<Product>,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.usedProducts);
    const amount = ref(0);
    const maxAmount = store.getters.maxAmountStock;
    let hasErrorMessage = ref(false);

    const amountTampons = computed(
      () => store.getters.usedProducts[0].amountInStock
    );
    const amountPads = computed(
      () => store.getters.usedProducts[1].amountInStock
    );
    const amountCups = computed(
      () => store.getters.usedProducts[2].amountInStock
    );
    const amountWhipes = computed(
      () => store.getters.usedProducts[3].amountInStock
    );

    const tamponsAreUsed = computed(() => store.getters.usedProducts[0].isUsed);
    const padsAreUsed = computed(() => store.getters.usedProducts[1].isUsed);
    const cupsAreUsed = computed(() => store.getters.usedProducts[2].isUsed);
    const whipesAreUsed = computed(() => store.getters.usedProducts[3].isUsed);

    const saveSettings = () => {
      // save to db here
    };

    const handleFireErrorMessage = (value: boolean) => {
      hasErrorMessage.value = value;
    };

    return {
      amount,
      amountTampons,
      amountPads,
      amountCups,
      amountWhipes,
      tamponsAreUsed,
      padsAreUsed,
      cupsAreUsed,
      whipesAreUsed,
      products,
      maxAmount,
      hasErrorMessage,
      handleFireErrorMessage,
    };
  },
});
</script>

<style scoped>
</style>
