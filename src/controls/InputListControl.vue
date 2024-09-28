<template>
  <input
    class="input"
    type="number"
    :value="usedProduct.amountInStock"
    @change="updateAmoutInStock"
    @blur="test"
  />
  <span class="checkmark">{{ usedProduct.type }}</span>
</template>

<script lang ="ts">
import { useStore } from "vuex";
import { defineComponent, ref, watch } from "vue";
import type { Product } from "../assets/interfaces";
import { PropType } from "vue";

export default defineComponent({
  name: "InputListControl",
  emits: ["update:modelValue", "fireErrorMessage"],
  props: {
    usedProduct: Object as PropType<Product>,
  },

  setup(props, { emit }) {
    const store = useStore();
    const usedProduct = props.usedProduct;
    const maxAmountStock = store.getters.maxAmountStock;

    const updateAmoutInStock = (event: Event): void => {
      let updatedAmount = parseInt((event.target as HTMLInputElement).value);

      if (updatedAmount < maxAmountStock) {
        store.dispatch("updateAmount", {
          amountInStock: updatedAmount,
          type: usedProduct.type,
        });
        emit("fireErrorMessage", false);
      } else {
        emit("fireErrorMessage", true);
      }
    };

    return {
      updateAmoutInStock,
    };
  },
});
</script>

<style scoped>
input[type="checkbox"].input {
  cursor: pointer;
  margin-right: 10px;
  height: 25px;
  width: 25px;
  accent-color: #850e1e;
}

input[type="number"].input {
  margin-right: 10px;
  background-color: transparent;
  color: var(--color-text);
  border-bottom: 2px solid #850e1e;
  width: fit-content;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  padding: 5px 0px;
  text-align: center;
}
</style>
