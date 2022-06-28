<script setup lang="ts">
import Subject from "./Subject.vue";

import { useStudentStore } from "@/stores/student";
import { onBeforeMount, computed } from "vue";
onBeforeMount(async () => {
  await useStudentStore().getMyLessons();
});

const lessons = computed(() => {
  return useStudentStore().myLessons;
});
</script>
<template>
  <div class="cardify mt-10">
    <p class="text-2xl font-medium text-gray-700">My Subjects</p>
    <Subject v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
  </div>
</template>
<style scoped></style>
