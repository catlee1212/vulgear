<template>
  <h2>amount in stock</h2>
  <p>update here if you stock up</p>
  <label
    class="settingsContainer"
    v-for="product in _tempProducts"
    v-bind:key="product.productType"
  >
    <InputListControl
      :usedProduct="product"
      @fireErrorMessage="$emit('fireErrorMessage')"
    />
  </label>
</template>

<script lang ="ts">
import { defineComponent } from "vue";
import type { Product } from "../assets/interfaces";
import { PropType } from "vue";
//HANDLE FIRE ERROR MESSAGE
//emit('update:modelValue', $event.target.value)
import { defineEmits } from "vue";

// TODO: handle fire error message and change has changes to false if settings are saved

const emit = defineEmits(["fireErrorMessage"]);

export default defineComponent({
  name: "ProductAmount",
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
