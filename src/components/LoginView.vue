<template>
  <div class="wrapper">
    <div class="loginImage"><img :src="vulgearImage" /></div>
    <div class="loginView">
      <h2>email</h2>
      <input v-model="email" placeholder="email" />

      <h2>password</h2>
      <input type="password" v-model="password" placeholder="password" />
      <button @click="login" class="generalButton">login</button>
    </div>
  </div>
</template>

<script lang ="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import vulgearImage from "../assets/vulgear.jpg";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const email = ref("");
    const password = ref("");
    const login = () => {
      axios
        .post(import.meta.env.VITE_API_URL + "/auth/login", {
          email: email.value,
          password: password.value,
        })
        .then(function (response) {
          if (response.status === 200) {
            let authToken = response.data.authentication;
            setAuthToken(authToken);
            router.push("/");
            store.dispatch("saveUsername", response.data.username);
            store.dispatch("updateUsedProducts", response.data.usedProducts);
            localStorage.setItem("userid", response.data.id);
          }
        })
        .catch(function (error) {
          // errormessage
          console.log(error);
        });
    };

    const setAuthToken = (authToken) => {
      let vulgearAuthCookie = "VULGEAR-AUTH=" + authToken;
      document.cookie = vulgearAuthCookie;
    };

    return {
      setAuthToken,
      login,
      email,
      password,
      vulgearImage,
    };
  },
});
</script>

<style scoped>
.loginView {
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 50vw;
  flex-direction: column;
}

.loginImage {
  display: flex;
  justify-content: center;
  margin-top: 10%;
}

.loginImage img {
  width: 30%;
  border-radius: 100%;
  overflow: hidden;
}
</style>
