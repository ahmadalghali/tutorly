<script setup lang="ts"></script>

<template>
  <div class="home">
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-10 items-center justify-center flex-col"
      >
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded"
          alt="hero"
          src="../assets/hero.jpg"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            Meeting all your tuition needs.
          </h1>
          <p class="mb-8 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            adipisci reiciendis ab quae ipsum labore voluptatem numquam
            inventore. Porro enim, nostrum totam distinctio iusto laborum
            exercitationem possimus nobis. Quidem, vero!
          </p>
          <div class="flex justify-center">
            <button
              class="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              @click="$router.push('/book')"
            >
              Get a quote
            </button>
            <button
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              @click="$router.push('/about')"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="grid justify-items-center mt-10 space-y-5">
      <button
        class="btn-primary bg-primary text-amber-900 h-12 w-full"
        @click="$router.push('/book')"
      >
        Book Now
      </button>
      <button
        class="btn-primary bg-primary text-amber-900 h-12 w-full"
        @click="$router.push('/chat')"
      >
        Start Chatting
      </button>
      <button
        class="btn-primary bg-primary text-amber-900 h-12 w-full"
        @click="$router.push('/profile')"
      >
        Profile
      </button>
    </div> -->
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
