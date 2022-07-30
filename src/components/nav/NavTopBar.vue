<script setup lang="ts">
import { useNavBarStore } from "@/stores/navbar";

const navbarStore = useNavBarStore();
// const props = defineProps({
//     sideBarOpen: { type: Boolean, required: true },
// });
</script>

<template>
  <div class="navbar px-10 py-4 flex items-center justify-between">
    <div class="flex items-center brand" @click="$router.push('/')">
      <!-- <i class="logo text-4xl fas fa-graduation-cap  mr-2"></i> -->
      <!-- <img src="@/assets/logo2.png" class="h-16" /> -->
      <h1 class="text-4xl font-extrabold text-teal-500">Tutorly</h1>
      <!-- <p class="font-semibold text-2xl">LTA</p> -->
    </div>
    <div class="mb-10 mr-5">
      <TransitionGroup
        enter-active-class="animate__animated animate__rotateIn"
        leave-active-class="animate__animated animate__rotateOut"
      >
        <font-awesome-icon
          v-if="!navbarStore.isOpen"
          key="bars"
          icon="bars"
          class="menu-btn absolute"
          @click="navbarStore.open()"
        />
        <font-awesome-icon
          v-else
          key="close"
          icon="times"
          class="menu-btn absolute"
          @click="navbarStore.close()"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.menu-btn {
  --animate-duration: 0.5s;
  @apply text-3xl  text-right focus:outline-none focus:text-white;
}
</style>
