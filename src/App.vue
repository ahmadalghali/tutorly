<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/nav/NavBar.vue";
import { useAuthStore } from "@/stores/auth";
import { useMeStore } from "@/stores/me";

// import { ModalsContainer } from "vue-final-modal";
import { inject } from "vue";
import { useChatStore } from "./stores/chat";
const $vfm: any = inject("$vfm");

const show = $ref(false);
const meStore = useMeStore();

// function showLogoutModal() {
//   $vfm.show({ component: "LogoutModal" });
// }

// setInterval(() => {
//   // useChatStore().getMessagesWithUser()
// })

onBeforeMount(async () => {
  await meStore.getMe();
});
</script>
<template>
  <div>
    <div :class="$route.name === 'chat' ? '' : 'pb-20'">
      <NavBar v-if="!$route.meta.hideNavbar" />
      <RouterView
        class="router mt-5"
        :class="$route.name == 'chat' ? '' : 'px-4'"
      />
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
