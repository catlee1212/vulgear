<template>
  <div class="outerWrapper header">
    <div class="innerWrapper">
      <ul class="menu">
        <router-link
          v-for="(items, idx) in menuItems"
          :key="idx"
          :to="items.link"
          >{{ items.name }}</router-link
        >
        <router-link to="/login" @click="removeAuthToken">
          <button>Logout</button>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const isOpen = computed(() => store.getters.isOpen);
    const menuItems = store.state.menuItems;
    const toggleMenu = () => store.commit("TOGGLE_MENU", isOpen);

    const removeAuthToken = () => {
      localStorage.removeItem("authToken");
    };

    return {
      isOpen: isOpen,
      menuItems: menuItems,
      toggleMenu: toggleMenu,
      removeAuthToken,
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
