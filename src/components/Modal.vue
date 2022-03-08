<template>
  <Transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear>
    <div class="z-40 w-full h-full bg-opacity-50">
      <div class="modal">
        <div class="header">
          <div v-if="title" class="title">{{ title }}</div>
          <i class="fas fa-times float-right text-gray-600 text-xl"></i>
        </div>

        <div class="body"></div>
        <div v-if="actions" class="actions">
          <button class="btn" v-for="(action, index) in actions" :key="index">{{ action }}</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    actions: Array,
  },
};
</script>

<style scoped></style>
