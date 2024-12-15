<template>
  <h2>products you use</h2>
  <label
    class="settingsContainer"
    v-for="product in _tempProducts"
    v-bind:key="product.productType"
  >
    <CheckboxListControl
      :usedProduct="product"
      @fireErrorMessage="$emit('fireErrorMessage')"
    />
  </label>
</template>

<script lang ="ts">
import { defineComponent } from "vue";
import type { Product } from "../assets/interfaces";
import { PropType } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["fireErrorMessage"]);

export default defineComponent({
  name: "ProductUsage",
  props: {
    modelValue: Object as PropType<Product>,
  },

  setup(props) {
    const _tempProducts = props.modelValue;

    return {
      _tempProducts,
    };
  },
});
</script>

<style scoped>
input[type="checkbox"].checkbox {
  cursor: pointer;
  margin-right: 10px;
  height: 25px;
  width: 25px;
  accent-color: var(--buttonColor);
}

input[type="number"].checkbox {
  margin-right: 10px;
  background-color: transparent;
  color: var(--color-text);
  border-bottom: 2px solid var(--buttonColor);
  width: fit-content;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  padding: 5px 0px;
  text-align: center;
}
</style>
