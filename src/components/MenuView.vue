<template>
  <div class="menuBottom">
    <div class="innerWrapper">
      <ul class="menu">
        <img :src="vulgear2" class="logoVulgear" />

        <router-link
          v-for="(items, idx) in menuItems"
          :key="idx"
          :to="items.link"
          >{{ items.name }}</router-link
        >
        <router-link to="/login" @click="removeAuthToken" class="logout">
          <button class="logoutButton">Logout</button>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import vulgear2 from "../assets/vulgear.jpg";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const isOpen = computed(() => store.getters.isOpen);
    const menuItems = store.state.menuItems;
    const toggleMenu = () => store.commit("TOGGLE_MENU", isOpen);

    const removeAuthToken = () => {
      var now = new Date();
      let tempCookie = document.cookie;
      document.cookie =
        "VULGEAR-AUTH=" + tempCookie + ";expires=" + now.toUTCString() + ";";
    };

    return {
      isOpen: isOpen,
      menuItems: menuItems,
      toggleMenu: toggleMenu,
      removeAuthToken,
      vulgear2,
    };
  },
});
</script>

<style scoped>
</style>
