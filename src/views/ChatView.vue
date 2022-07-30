<script setup lang="ts">
import Message from "@/components/chat/Message.vue";
import type { Message as MessageType, User } from "@/global/api-types";
import { computed, onBeforeMount, onUpdated, onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useChatStore } from "@/stores/chat";
import api from "@/services/api";
import { useMeStore } from "@/stores/me";
import moment from "moment";
const props = defineProps<{
  withUserId: number;
}>();

const route = useRoute();
let chatContainer = $ref<HTMLElement>();
// let chatContainer: HTMLElement | null;
let withUser: User | null = $ref(null);
const chatStore = useChatStore();
const meStore = useMeStore();
let message = $ref("");
let lastDateStamp = "";
// let listOfUniqueMessageDates = $ref<string[]>([]);

onBeforeMount(() => {
  watch(
    () => route.params,
    () => initChat(),
    { immediate: true }
  );
});

async function initChat() {
  withUser = await (await api.get("/users/" + props.withUserId)).data;
  await chatStore.getMessagesWithUser(props.withUserId);
  scrollToBottomChat();
}

async function getChatMessages() {
  await chatStore.getMessagesWithUser(props.withUserId);
  scrollToBottomChat({ smooth: true });
}

// onUpdated(() => {
//   // chatContainer = document.getElementById("chatContainer");
// });

// setInterval(() => {
//   getChatMessages();
// }, 1000);

const fullName = computed(
  () => `${withUser?.firstname} ${withUser?.lastname}` || ""
);

async function sendMessage() {
  const trimmedMessage = message.trim();
  if (trimmedMessage.length > 0) {
    message = "";

    await chatStore.sendMessage({
      receiverId: +props.withUserId,
      text: trimmedMessage,
    });
    scrollToBottomChat({ smooth: true });
  }
}

function scrollToBottomChat(options?: { smooth?: boolean }) {
  if (options?.smooth) {
    window.scroll({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
  } else {
    window.scroll({
      top: document.body.scrollHeight,
    });
  }
}

function isNewDay(messageCreatedAt: string): boolean {
  let date = moment(messageCreatedAt).format("ll");
  if (lastDateStamp !== date) {
    lastDateStamp = moment(messageCreatedAt).format("ll");
    return true;
  }
  return false;
}
</script>
<template>
  <div v-if="withUser" class="bg-white" @keyup.enter="sendMessage">
    <div class="flex p-4 bg-teal-500 text-white fixed top-0 left-0 right-0">
      <font-awesome-icon
        icon="arrow-left"
        class="text-left text-3xl"
        @click="$router.back()"
      />
      <div class="text-center text-2xl ml-5">{{ fullName }}</div>
    </div>
    <div ref="chatContainer" class="pb-24 pt-20 overflow-scroll">
      <div
        v-for="message in chatStore.messages"
        :key="message.id"
        class="flex flex-col px-4 py-1 space-y-5"
      >
        <div
          v-if="isNewDay(message.createdAt!)"
          class="px-3 py-1 w-1/3 rounded-lg bg-blue-100 text-center text-gray-600 place-self-center"
        >
          {{ moment(message.createdAt).format("ll") }}
        </div>
        <Message
          :message="message"
          :text="message.text"
          :from-me="message.sender.id === meStore.user?.id"
        />
      </div>
    </div>
    <div class="flex items-center bg-gray-100 fixed bottom-0 left-0 right-0">
      <input
        v-model="message"
        type="text"
        placeholder="Send a message..."
        class="rounded-3xl h-12 p-4 m-4 focus:outline-none bg-gray-200 w-5/6"
      />
      <div class="w-1/6">
        <div
          class="flex flex-wrap justify-center content-center rounded-full bg-teal-500 h-12 w-12 pr-1"
        >
          <font-awesome-icon
            icon="paper-plane"
            class="text-2xl text-white"
            @click="sendMessage"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center justify-center text-2xl h-screen">
    <p>Loading chat ...</p>
  </div>
</template>

<style></style>
