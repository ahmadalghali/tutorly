<script setup lang="ts">
const props = defineProps({
  type: { type: String },
  title: { type: String },
})
</script>

<template>
  <div>
    <label class="text-xl font-medium">{{ title }}</label>
    <br />
    <input :type="type" class="mt-2 p-3 w-full rounded-xl text-lg shadow-lg bg-white" />
  </div>
</template>



