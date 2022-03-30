<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/nav/NavBar.vue";
import { useAuth } from "@/stores/auth";
import { useMe } from "@/stores/me";

// import { ModalsContainer } from "vue-final-modal";
import { inject } from "vue";
const $vfm: any = inject("$vfm");

const show = ref(false);
const meStore = useMe();

// function showLogoutModal() {
//   $vfm.show({ component: "LogoutModal" });
// }

onBeforeMount(async () => {
  await meStore.getMe();
});
</script>
<template>
  <div>
    <div :class="$route.name === 'chat' ? '' : 'pb-20'">
      <NavBar v-if="$route.path !== '/chat'" />
      <RouterView class="router" :class="$route.name == 'chat' ? '' : 'px-4'" />
    </div>
    <modals-container></modals-container>
  </div>
</template>

<style>
body {
  /* @apply bg-gray-100; */
}

input {
  @apply bg-gray-200 focus:outline-none;
}
.cardify {
  @apply bg-white shadow-lg rounded-2xl p-4;
}

.router {
  --animate-duration: 0.1s;
}
</style>
