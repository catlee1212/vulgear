<template>
  <div class="wrapper">
    <div class="loginView">
      <h2>email</h2>
      <input v-model="email" placeholder="email" />

      <h2>password</h2>
      <input v-model="password" placeholder="password" />
      <button @click="login">login</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const email = ref("");
    const password = ref("");

    const login = () => {
      axios
        .post("http://localhost:8080/auth/login", {
          email: email.value,
          password: password.value,
        })
        .then(function (response) {
          if (response.status === 200) {
            let authToken = response.data.authentication.sessionToken;
            setAuthToken(authToken);
            router.push("/");
            store.dispatch("saveUsername", response.data.username);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const setAuthToken = (authToken) => {
      // maybe change to cookie
      localStorage.setItem("authToken", authToken);
    };

    return {
      setAuthToken,
      login,
      email,
      password,
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
  height: 100vh;
  flex-direction: column;
  gap: 20px;
}
</style>
