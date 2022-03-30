<script setup lang="ts">
import Subject from "./Subject.vue";

import { useStudent } from "@/stores/student";
import { onBeforeMount, computed } from "vue";
onBeforeMount(async () => {
  await useStudent().getMyLessons();
});

const lessons = computed(() => {
  return useStudent().myLessons;
});
</script>
<template>
  <div class="cardify mt-10">
    <p class="text-2xl font-medium text-gray-700">My Subjects</p>
    <Subject v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
  </div>
</template>
<style scoped></style>
