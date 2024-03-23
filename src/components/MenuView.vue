<template>
  <div class="outerWrapper header">
    <div class="innerWrapper">
      <ul class="menu">
        <RouterLink
          v-for="(items, idx) in menuItems"
          :key="idx"
          :to="items.link"
          >{{ items.name }}</RouterLink
        >
      </ul>
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

.menu {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 15px;
  justify-content: space-between;
  width: 100%;
}
</style>
