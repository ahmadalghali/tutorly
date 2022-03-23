<script setup lang="ts">
const props = defineProps<{
  type: string;
  title: string;
  value: string;
}>();

const emit = defineEmits<{
  (e: "input", content: string): void;
}>();

const content = props.value;

function handleInput() {
  emit("input", content);
}
</script>

<template>
  <div>
    <label class="text-xl font-medium">{{ title }}</label>
    <br />
    <input
      @input="handleInput"
      :type="type"
      class="mt-2 px-4 py-3 w-full rounded-xl text-xl shadow-md bg-white"
    />
  </div>
</template>
