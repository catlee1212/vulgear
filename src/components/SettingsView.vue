<template>
  <div class="changesModal" v-if="modalIsOpen">
    <h1>Leave without saving?</h1>
    <div class="buttonWrapper">
      <button class="generalButton sub" @click="handleConfirmation(fale)">
        Cancel</button
      ><button class="generalButton" @click="handleConfirmation(true)">
        Leave
      </button>
    </div>
  </div>

  <div class="outerWrapper">
    <div class="innerWrapper">
      <h1>configure your app</h1>
      <div class="settingsWrapper">
        <div class="innerSettings">
          <ProductUsage
            v-model="_tempProducts"
            @fireErrorMessage="handleFireErrorMessage"
          />
        </div>

        <div class="innerSettings">
          <ProductAmount
            v-model="_tempProducts"
            @fireErrorMessage="handleFireErrorMessage"
          />

          <!-- <h2>amount in stock</h2>
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
          </label> -->
        </div>
      </div>
      <button
        @click="saveSettings"
        :disabled="hasAmountErrorMessage"
        class="generalButton"
      >
        save
      </button>
    </div>

    <div v-if="hasAmountErrorMessage" class="errorElement">
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
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import type { Product } from "../assets/interfaces";

export default defineComponent({
  name: "SettingsView",
  props: {
    usedProducts: Object as PropType<Product>,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    let modalIsOpen = ref(false);
    let confirmedToLeave = ref(false);
    let pathToNextRoute = ref("");

    onMounted(() => {
      store.dispatch("hasChanges", false);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onBeforeRouteLeave((to, from, next) => {
      // save clicked path to variable
      pathToNextRoute.value = to.fullPath;

      // if there are changes made the modal opens
      if (hasUnsavedChanges.value) {
        modalIsOpen.value = true;
      } else {
        modalIsOpen.value = false;
      }

      if (modalIsOpen.value) {
        if (confirmedToLeave.value) {
          next();
        } else {
          next(false);
        }
      } else {
        next();
      }
    });

    const amount = ref(0);

    const _tempProducts = JSON.parse(
      JSON.stringify(store.getters.usedProducts)
    );

    const hasUnsavedChanges = computed(() => store.getters.hasChanges);
    const maxAmount = store.getters.maxAmountStock;
    let hasAmountErrorMessage = ref(false);

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
      const userId = localStorage.getItem("userid");
      axios
        .patch(
          import.meta.env.VITE_API_URL + "/products/" + userId,
          { usedProducts: _tempProducts },
          { withCredentials: true }
        )
        .then(function (response) {
          if (response.status === 200) {
            // do something here
            store.dispatch("hasChanges", false);
            store.dispatch("updateUsedProducts", _tempProducts);
          }
        })
        .catch(function (error) {
          // Errormessage
          console.log(error);
        });
    };

    const handleFireErrorMessage = (value: boolean) => {
      console.log("handleFireErrorMessage in parent", value);
      hasAmountErrorMessage.value = value;
    };

    const handleConfirmation = (isConfirmed: boolean) => {
      confirmedToLeave.value = isConfirmed;
      if (isConfirmed) {
        router.push(pathToNextRoute.value);
      } else {
        modalIsOpen.value = false;
      }
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
      maxAmount,
      hasUnsavedChanges,
      modalIsOpen,
      confirmedToLeave,
      hasAmountErrorMessage,
      _tempProducts,
      handleFireErrorMessage,
      saveSettings,
      handleConfirmation,
    };
  },
});
</script>

<style scoped>
.settingsWrapper h2 {
  margin-top: 0;
}
</style>
