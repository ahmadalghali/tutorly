<script setup lang="ts">
import type { Message } from "@/global/api-types";
import moment from "moment";
const props = defineProps<{
  fromMe: boolean;
  text: string;
  message: Message;
}>();
</script>
<template>
  <div
    class="py-2 px-4 rounded-2xl text-base break-words"
    :class="
      fromMe
        ? 'bg-amber-400 place-self-end ml-10 rounded-br-sm'
        : 'bg-gray-200 place-self-start mr-10 rounded-bl-sm'
    "
  >
    <div class="text pt-1">{{ text }}</div>
    <div class="timestamp text-xs text-gray-800 text-right font-light">
      {{ moment(message.createdAt).format("LT") }}
    </div>
  </div>
</template>

<style scoped></style>
