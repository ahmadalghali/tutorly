<script setup lang="ts">
// import { EventBus } from "@/event-bus";
import NavSideBar from "@/components/nav/NavSideBar.vue";
import NavTopBar from "@/components/nav/NavTopBar.vue";
// import { ref, onBeforeMount } from "vue";
import { useNavBar } from "@/stores/navbar";
import { onBeforeMount } from "vue";

const navbarStore = useNavBar();
</script>

<template>
  <div class="sticky">
    <NavTopBar />
  </div>
  <NavSideBar v-show="navbarStore.isOpen" class="absolute right-0 z-50" />
</template>

<style scoped>
/* .slide-enter-active, .slide-leave-active {
    Transition: opacity .5s;
    }
    .slide-enter, .slide-leave-to{
    opacity: 0;
    } */
</style>
