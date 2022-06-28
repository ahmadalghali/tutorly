<script setup lang="ts">
import type { Student } from "@/global/api-types";
import { computed, type PropType } from "vue";
const props = defineProps({
  student: { type: Object as PropType<Student>, required: true },
});

const fullName = computed(() => {
  return props.student.firstname + " " + props.student.lastname;
});
</script>
<template>
  <div class="flex mt-10 px-2 items-center justify-between">
    <span class="subject text-xl font-light">Maths</span>
    <span class="tutor">
      <div class="flex items-center">
        <img
          src="@/assets/sample-profile-image.jpeg"
          class="object-cover items-center rounded-full h-10 w-10"
        />
        <p class="name ml-2 text-base text-gray-700 font-medium">
          {{ fullName }}
        </p>
      </div>
    </span>
    <router-link
      :to="{ name: 'chat', query: { withUserId: student.id } }"
      class="rounded-md text-blue-500 text-3xl"
    >
      <font-awesome-icon icon="message" />
    </router-link>
  </div>
</template>
<style scoped></style>
