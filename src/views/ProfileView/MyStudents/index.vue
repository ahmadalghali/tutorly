<script setup lang="ts">
import Student from "./Student.vue";
import { useTutor } from "@/stores/tutor";
import { onBeforeMount, computed } from "vue";
onBeforeMount(async () => {
  await useTutor().getMyStudents();
});

const students = computed(() => {
  return useTutor().myStudents;
});
</script>
<template>
  <div class="cardify mt-10">
    <p class="text-2xl font-medium text-gray-700">My Students</p>
    <Student v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>
<style scoped></style>
