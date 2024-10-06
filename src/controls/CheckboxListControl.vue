<template>
  <input
    class="checkbox"
    @click="updateUsage"
    type="checkbox"
    :checked="isUsed"
  />
  <span class="checkmark">{{ name }}</span>
</template>

<script lang ="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import type { Product } from "../assets/interfaces";
import { PropType } from "vue";

export default defineComponent({
  name: "CheckboxListControl",
  props: {
    usedProduct: Object as PropType<Product>,
  },

  setup(props) {
    const store = useStore();
    let usedProduct = props.usedProduct;

    const isUsed = computed(() => usedProduct.isUsed);
    const name = usedProduct.productType;

    const updateUsage = () => {
      store.dispatch("updateUsage", {
        isUsed: usedProduct.isUsed,
        productType: usedProduct.productType,
      });
    };
    return {
      name,
      isUsed,
      updateUsage,
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
