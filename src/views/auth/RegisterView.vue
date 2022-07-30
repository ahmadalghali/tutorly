<script setup lang="ts">
import Input from "@/components/form/Input.vue";
import type { CreateStudentDto } from "@/global/api-types";
import { useAuthStore } from "@/stores/auth";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const formData = reactive({
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@gmail.com",
  password: "password",
  confirmPassword: "password",
  phoneNumber: "07123456789",
  termsAgreed: false,
});

const authStore = useAuthStore();
const toast = useToast();
const router = useRouter();

async function register() {
  if (
    formData.firstname.trim() === "" ||
    formData.lastname.trim() === "" ||
    formData.email.trim() === "" ||
    formData.password.trim() === "" ||
    formData.confirmPassword.trim() === ""
  ) {
    toast.warning("All fields are required");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.warning("Passwords do not match");
    return;
  }

  if (!formData.termsAgreed) {
    toast.warning("You must agree to the terms and conditions");
    return;
  }
  const createStudentDto: CreateStudentDto = {
    firstname: formData.firstname,
    lastname: formData.lastname,
    email: formData.email,
    password: formData.password,
    phoneNumber: formData.phoneNumber,
  };

  const res = await authStore.register(createStudentDto);

  if (res.status === 200 || res.status === 201) {
    toast.success("Registration successful");
    router.push("/login");
  } else {
    toast.error("Registration failed");
    console.log("res", res);
  }
  router.push("/login");
}
</script>

<template>
  <div class="grid justify-items-center">
    <div class="input">
      <label class="text-xl font-medium">Firstname</label>
      <br />
      <input v-model="formData.firstname" type="text" class="g-input-text" />
    </div>

    <div class="input">
      <label class="text-xl font-medium">Lastname</label>
      <br />
      <input v-model="formData.lastname" type="text" class="g-input-text" />
    </div>
    <div class="input">
      <label class="text-xl font-medium">Email</label>
      <br />
      <input v-model="formData.email" type="email" class="g-input-text" />
    </div>
    <div class="input">
      <label class="text-xl font-medium">Password</label>
      <br />
      <input v-model="formData.password" type="password" class="g-input-text" />
    </div>

    <div class="input">
      <label class="text-xl font-medium">Confirm Password</label>
      <br />
      <input
        v-model="formData.confirmPassword"
        type="password"
        class="g-input-text"
      />
    </div>

    <div class="input">
      <label class="text-xl font-medium">Phone Number</label>
      <br />
      <input v-model="formData.phoneNumber" type="phone" class="g-input-text" />
    </div>

    <!-- <Input class="input" :type="'text'" :title="'Firstname'" />
    <Input class="input" :type="'text'" :title="'Lastname'" />

    <Input class="input" :type="'email'" :title="'Email'" />
    <Input class="input" :type="'password'" :title="'Password'" />
    <Input class="input" :type="'password'" :title="'Confirm Password'" />
    <Input class="input" :type="'number'" :title="'Phone Number'" /> -->

    <div class="mt-10 text-lg">
      <input
        id="terms"
        name="terms"
        type="checkbox"
        v-model="formData.termsAgreed"
        class="mr-4 w-5 h-5"
      />
      <label for="terms">
        I agree to the
        <router-link
          :to="{ name: 'terms-and-conditions' }"
          target="_blank"
          class="text-blue-600 underline"
          >Terms and Conditions</router-link
        >.
      </label>
    </div>

    <button
      class="btn w-full bg-primary h-12 mt-10 text-gray-800"
      @click="register"
    >
      Register
    </button>

    <p class="text-lg mt-10">
      Already have an account?
      <span class="font-semibold underline" @click="$router.push('login')"
        >Login</span
      >
    </p>
  </div>
</template>

<style scoped>
.input {
  @apply mt-8 w-full sm:w-80;
}
/* .input {
  @apply mt-8 w-full;
} */
</style>
