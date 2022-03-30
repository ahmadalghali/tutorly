<script setup lang="ts">
import { useMe } from "@/stores/me";
import { storeToRefs } from "pinia";
import { computed, reactive } from "vue";
import MySubjects from "./MySubjects/index.vue";
import MyStudents from "./MyStudents/index.vue";
import { UserRole } from "@/global/types";
const meStore = useMe();

const { user } = storeToRefs(meStore);

console.log("user.value :>> ", user.value);
console.log("user.value.role :>> ", user.value.role);

const fullname = computed(() => {
  return `${user.value.firstname} ${user.value.lastname}`;
});
</script>

<template>
  <Transition leave-active-class="animated slideOutLeft" appear>
    <div class="profile">
      <div class="bio cardify">
        <div class="flex">
          <img
            v-if="user?.profileImageUrl"
            :src="user?.profileImageUrl"
            class="object-cover items-center rounded-full h-20 w-20"
          />
          <img
            src="@/assets/sample-profile-image.jpeg"
            class="object-cover items-center rounded-full h-20 w-20"
          />
          <p class="name ml-4 text-2xl text-gray-700 font-medium">
            {{ fullname }}
          </p>
        </div>
        <div class="details mt-5 ml-4">
          <p>Email: {{ user.email }}</p>
          <p>Phone: {{ user.phoneNumber }}</p>
        </div>
      </div>

      <MySubjects v-if="user.role === UserRole.STUDENT" />
      <MyStudents v-else-if="user.role === UserRole.TUTOR" />
    </div>
  </Transition>
</template>

<style></style>
