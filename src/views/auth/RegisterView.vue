<script setup lang="ts">
import Input from '@/components/form/Input.vue'
</script>

<template>
  <div class="grid justify-items-center">
    <Input class="input" :type="'text'" :title="'Firstname'" />
    <Input class="input" :type="'text'" :title="'Lastname'" />

    <Input class="input" :type="'email'" :title="'Email'" />
    <Input class="input" :type="'password'" :title="'Password'" />
    <Input class="input" :type="'password'" :title="'Confirm Password'" />
    <Input class="input" :type="'number'" :title="'Phone Number'" />

    <div class="mt-10 text-lg">
      <input id="terms" name="terms" type="checkbox" class="mr-4 w-5 h-5" />
      <label for="terms">
        I agree to the
        <router-link
          :to="{ name: 'terms-and-conditions' }"
          target="_blank"
          class="text-blue-600 underline"
        >Terms and Conditions</router-link>.
      </label>
    </div>

    <button class="btn w-full bg-primary h-12 mt-10 text-gray-800">Register</button>

    <p class="text-lg mt-10">
      Already have an account?
      <span
        class="font-semibold underline"
        @click="$router.push('login')"
      >Login</span>
    </p>
  </div>
</template>

<style scoped>
.input {
  @apply mt-8 w-full sm:w-80;
}
</style>
