<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <h1>configure your app</h1>

      <div class="settingsWrapper">
        <div class="innerSettings">
          <h2>products you use</h2>
          <label
            class="settingsContainer"
            v-for="product in products"
            v-bind:key="product.productType"
          >
            <CheckboxListControl
              :usedProduct="product"
              v-model="amount.value"
            />
          </label>
        </div>

        <div class="innerSettings">
          <h2>amount in stock</h2>
          <p>update here if you stock up</p>

          <label
            class="settingsContainer"
            v-for="product in products"
            v-bind:key="product.productType"
          >
            <InputListControl
              :usedProduct="product"
              @fireErrorMessage="handleFireErrorMessage"
            />
          </label>
        </div>
      </div>
      <button
        @click="saveSettings"
        :disabled="hasErrorMessage"
        class="generalButton"
      >
        save
      </button>
      <!-- <button @click="getUser">get user</button> -->
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
import axios from "axios";
import { computed, defineComponent, PropType, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

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

    const saveSettings = async () => {
      const baseURL = "http://localhost:8080";
      const productsObj = products.value;
      const userId = localStorage.getItem("userid");

      axios
        .patch(
          baseURL + "/products/" + userId,
          { usedProducts: productsObj },
          { withCredentials: true }
        )
        .then(function (response) {
          if (response.status === 200) {
            // do something here
          }
        })
        .catch(function (error) {
          // Errormessage
          console.log(error);
        });
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
      saveSettings,
    };
  },
});
</script>

<style scoped>
.settingsWrapper h2 {
  margin-top: 0;
}
</style>
