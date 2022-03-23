<script setup lang="ts">
import { useAuth } from "@/stores/auth";
import { reactive, ref } from "vue";

const authStore = useAuth();

function displayLogoutModal() {}
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__slideInRight enter-duration"
    leave-active-class="animate__animated animate__slideOutRight leave-duration"
    appear
  >
    <div class="sidebar">
      <div class="flex flex-col">
        <router-link to="/" class="sidebar-item">Home</router-link>
        <router-link :to="{ name: 'book' }" class="sidebar-item"
          >Book</router-link
        >
        <router-link :to="{ name: 'about' }" class="sidebar-item"
          >About</router-link
        >
        <router-link :to="{ name: 'contact' }" class="sidebar-item"
          >Contact</router-link
        >
      </div>

      <div class="divide-y divide-amber-900 px-6 mb-10">
        <div class></div>
        <div class></div>
      </div>
      <div v-if="authStore.isLoggedIn" class="flex flex-col">
        <router-link :to="{ name: 'profile' }" class="sidebar-item"
          >My Profile</router-link
        >
        <p class="sidebar-item" @click="displayLogoutModal">Logout</p>
      </div>
      <div v-else>
        <router-link :to="{ name: 'login' }" class="sidebar-item"
          >Login</router-link
        >
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.sidebar {
  @apply h-screen bg-amber-400 w-3/4 float-right rounded-tl-xl flex flex-col text-left pt-10 border-l-2 border-t-2 border-amber-600;
}

.enter-duration {
  --animate-duration: 0.5s;
}
.leave-duration {
  --animate-duration: 0.3s;
}
.sidebar-item {
  @apply text-2xl mb-10 focus:outline-none pl-10 active:bg-amber-300 text-amber-900 font-medium active:bg-transparent;
}
</style>
