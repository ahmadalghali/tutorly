<script setup lang="ts">
import Input from "@/components/form/Input.vue";
import { useAuth } from "@/stores/auth";

import { reactive, ref } from "vue";

const email = ref("a");
const password = ref("a");

const data = ref(null);
const error = ref(null);

const authStore = useAuth();

function login() {
  if (email.value.trim() === "" || password.value.trim() === "")
    return console.log("Email or password cannot be empty");
  authStore.login(email.value, password.value);

  // data.value = data.value
  // error.value = error.value
}

function displayForgotPasswordModal() {
  // this.$modal.show()
  // this.$modal.show('forgot-password-modal')
}
</script>

<template>
  <div class>
    <div class="grid justify-items-center">
      <div class="input">
        <label class="text-xl font-medium">Email</label>
        <br />
        <input v-model="email" type="email" class="g-input-text" />
      </div>

      <div class="input">
        <label class="text-xl font-medium">Password</label>
        <br />
        <input v-model="password" type="password" class="g-input-text" />
      </div>

      <button
        class="btn w-full bg-primary h-12 mt-14 text-gray-800"
        @click="login"
      >
        Login
      </button>

      <p
        class="text-lg mt-8 font-medium underline"
        @click="displayForgotPasswordModal"
      >
        Forgot password
      </p>
      <p class="text-lg mt-10">
        Don't have an account?
        <span class="font-semibold underline" @click="$router.push('/register')"
          >Register</span
        >
      </p>
    </div>
    {{ "data: " + data }}
    {{ "error: " + error }}
    <!-- <modal name="forgot-password-modal" class="w-1/2">
      <div class="w-1/4 bg-blue-500">
        <div class="text-2xl text-center">Forgot password</div>
      </div>
    </modal>-->
  </div>
</template>

<style scoped>
.input {
  @apply mt-8 w-full;
}
</style>
