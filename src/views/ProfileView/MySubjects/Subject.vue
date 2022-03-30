<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  lesson: Object,
});

const tutorFullName = computed(() => {
  return `${props.lesson.tutor.firstname} ${props.lesson.tutor.lastname}`;
});
// subject: Subject;
//   level: SubjectLevel;
//   tutor: Tutor;
//   students: Student[];
//   id: number;
</script>
<template>
  <div class="flex mt-10 items-center justify-between">
    <span class="subject text-xl font-light">{{ lesson.subject.name }}</span>
    <span class="tutor">
      <div class="flex items-center">
        <img
          src="@/assets/sample-profile-image.jpeg"
          class="object-cover items-center rounded-full h-10 w-10"
        />
        <p class="name ml-2 text-base text-gray-700 font-medium">
          {{ tutorFullName }}
        </p>
      </div>
    </span>
    <router-link
      :to="{ name: 'chat', props: { withUser: lesson.tutor } }"
      class="rounded-md text-blue-500 text-3xl"
    >
      <font-awesome-icon icon="message" />
    </router-link>
  </div>
</template>
<style scoped></style>
