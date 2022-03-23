<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/nav/NavBar.vue";
import { ModalsContainer } from "vue-final-modal";
import { inject } from "vue";
const $vfm: any = inject("$vfm");

const show = ref(false);

function showLogoutModal() {
  $vfm.show({ component: "LogoutModal" });
}

// import {} from '@/stores/auth'
// created () {

// }
</script>
<template>
  <div>
    <div :class="$route.name == 'chat' ? '' : 'pb-20'">
      <NavBar v-show="$route.name !== 'chat'" />
      <button @click="showLogoutModal">open logout modal</button>
      <RouterView class="router" :class="$route.name == 'chat' ? '' : 'px-4'" />
    </div>
    <modals-container></modals-container>
  </div>
</template>

<style>
body {
  @apply bg-gray-100;
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
