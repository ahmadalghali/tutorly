<script setup lang="ts">
import Input from "@/components/form/Input.vue";
</script>

<template>
  <div class="grid justify-items-center">
    <Input class="input" :type="'email'" :title="'Email'" />

    <Input class="input" :type="'password'" :title="'Password'" />
    <button class="btn w-full bg-amber-300 h-12 mt-10 text-gray-800">
      Login
    </button>

    <p class="text-lg mt-10">
      Don't have an account?
      <span class="font-semibold underline" @click="$router.push('/register')"
        >Register</span
      >
    </p>
  </div>
</template>

<style scoped>
.input {
  @apply mt-8 w-full;
}
</style>
