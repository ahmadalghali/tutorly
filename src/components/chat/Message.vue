<script setup lang="ts">
const props = defineProps({
    fromMe: { type: Boolean, required: true },
    text: { type: String }
});
</script>
<template>
    <div
        class="pt-2 pb-2 px-4 rounded-2xl text-base break-words"
        :class="fromMe ? 'bg-amber-400 place-self-end ml-10 rounded-br-sm' : 'bg-gray-200 place-self-start mr-10 rounded-bl-sm'"
    >
        <div v-if="!fromMe" class="name text-left font-medium text">Abdulkareem Jameel</div>
        <div class="text pt-1">{{ text }}</div>
        <div class="timestamp text-xs text-gray-800 text-right font-light">01:03pm</div>
    </div>
</template>


<style scoped>
</style>