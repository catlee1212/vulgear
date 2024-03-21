<template>
  <div class="outerWrapper header">
    <div class="innerWrapper">
      <div v-for="(items, idx) in menuItems" :key="idx">
        {{ items }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const isOpen = computed(() => store.getters.isOpen);
    const menuItems = store.state.menuItems;
    const toggleMenu = () => store.commit("TOGGLE_MENU", isOpen);

    return {
      isOpen: isOpen,
      menuItems: menuItems,
      toggleMenu: toggleMenu,
    };
  },
});
</script>

<style scoped>
.header {
  background-color: var(--mainColor);
}

.outerWrapper.header {
  position: fixed;
  bottom: 0;
}
</style>
