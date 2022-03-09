<script setup lang="ts">
import Input from "@/components/form/Input.vue";
import { ref } from "vue";
const emailError = ref(null)
const passWordError = ref(null)

function displayForgotPasswordModal () {
  // this.$modal.show()
  // this.$modal.show('forgot-password-modal')
}
</script>

<template>
  <div class>
    <div class="grid justify-items-center">
      <Input class="input" :type="'email'" :title="'Email'" :error="emailError" />

      <Input class="input" :type="'password'" :title="'Password'" :error="passwordError" />
      <button class="btn w-full bg-primary h-12 mt-14 text-gray-800">Login</button>

      <p
        class="text-lg mt-8 font-medium underline"
        @click="displayForgotPasswordModal"
      >Forgot password</p>
      <p class="text-lg mt-10">
        Don't have an account?
        <span
          class="font-semibold underline"
          @click="$router.push('/register')"
        >Register</span>
      </p>
    </div>
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
