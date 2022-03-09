<script setup lang="ts"></script>

<template>
  <div class="home">
    <p class="mt-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit
      consequuntur doloremque nesciunt sit libero eaque fuga nam magnam
      doloribus fugiat, suscipit totam sapiente praesentium reprehenderit a,
      cumque voluptatum reiciendis.
    </p>

    <div class="grid justify-items-center mt-10 space-y-5">
      <button
        class="btn-primary bg-primary text-amber-900 h-12 w-full"
        @click="$router.push('/book')"
      >Book Now</button>
      <button
        class="btn-primary bg-primary text-amber-900 h-12 w-full"
        @click="$router.push('/chat')"
      >Start Chatting</button>
      <button
        class="btn-primary bg-primary text-amber-900 h-12 w-full"
        @click="$router.push('/profile')"
      >Profile</button>
    </div>
  </div>
</template>

<style>
.btn {
  @apply text-lg rounded-lg font-semibold uppercase shadow-lg;
}
.btn-primary {
  @apply btn py-2 px-6;
}
</style>
