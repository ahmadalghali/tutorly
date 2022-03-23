<script setup lang="ts"></script>

<template>
  <Transition leave-active-class="animated slideOutLeft" appear>
    <div class="profile">
      <div class="bio cardify">
        <div class="flex">
          <img
            src="@/assets/sample-profile-image.jpeg"
            class="object-cover items-center rounded-full h-20 w-20"
          />
          <p class="name ml-4 text-2xl text-gray-700 font-medium">John Doe</p>
        </div>
        <div class="details mt-5 ml-4">
          <p>Email: john.doe@gmail.com</p>
          <p>Phone: 075285930259</p>
        </div>
      </div>

      <div class="my-tutor cardify mt-10">
        <p class="text-2xl font-medium text-gray-700">My Subjects</p>
        <div class="flex mt-10 items-center justify-between">
          <span class="subject text-xl font-light">Maths</span>
          <span class="tutor">
            <div class="flex items-center">
              <img
                src="@/assets/sample-profile-image.jpeg"
                class="object-cover items-center rounded-full h-10 w-10"
              />
              <p class="name ml-2 text-base text-gray-700 font-medium">
                Alex Smith
              </p>
            </div>
          </span>
          <router-link
            :to="{ name: 'chat' }"
            class="bg-blue-500 rounded-md text-white py-2 px-4"
            >Chat</router-link
          >
        </div>
      </div>
    </div>
  </Transition>
</template>

<style></style>
