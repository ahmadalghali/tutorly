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
let listOfUniqueMessageDates = $ref<string[]>([]);

onBeforeMount(() => {
  watch(
    () => route.params,
    () => initChat(),
    { immediate: true }
  );
});

async function initChat() {
  withUser = await (await api.get("/users/" + props.withUserId)).data;
  getChatMessages();
}

async function getChatMessages() {
  await chatStore.getMessagesWithUser(props.withUserId);
}

onUpdated(() => {
  // chatContainer = document.getElementById("chatContainer");
  scrollToBottomChat();
});

// setInterval(() => {
//   getChatMessages();
// }, 5000);

const fullName = computed(
  () => `${withUser?.firstname} ${withUser?.lastname}` || ""
);

function sendMessage() {
  scrollToBottomChat();
  return;
  const trimmedMessage = message.trim();
  if (trimmedMessage.length > 0) {
    message = "";

    chatStore.sendMessage({
      receiverId: +props.withUserId,
      text: trimmedMessage,
    });
  }
}
function scrollToBottomChat() {
  console.log("chatContainer :>> ", chatContainer);
  // setTimeout(() => {
  chatContainer.scroll({
    behavior: "smooth",
    top: chatContainer.scrollHeight,
  });
  // }, 200);
}

// const getFormattedDateOfMessage = (message: MessageType) => {
//   let dateStamp = moment(message.createdAt).format("ll");
//   // isNewDate = (lastDateStamp && lastDateStamp != dateStamp) || false;
//   if (!listOfUniqueMessageDates.includes(dateStamp)) {
//     listOfUniqueMessageDates.push(dateStamp);
//   }
//   // lastDateStamp = dateStamp;
//   return dateStamp;
// };
// function displayFormattedDateOfMessage(message: MessageType) {
//   const formattedDate = getFormattedDateOfMessage(message);
//   listOfUniqueMessageDates.push(formattedDate);
//   console.log("displayFormattedDateOfMessage formattedDate:>> ", formattedDate);
//   return formattedDate;
// }

function isNewDay(messageCreatedAt: string): boolean {
  let date = moment(messageCreatedAt).format("ll");
  if (lastDateStamp !== date) {
    lastDateStamp = moment(messageCreatedAt).format("ll");
    return true;
  }
  return false;
  // const date = moment(messageCreatedAt).format("ll");
  // if (!listOfUniqueMessageDates.includes(date)) {
  //   listOfUniqueMessageDates.push(date);
  //   return true;
  // }
  // return false;
}
</script>
<template>
  <div
    v-if="withUser"
    class="chat bg-white flex flex-col h-screen w-screen relative"
    @keyup.enter="sendMessage"
  >
    <div class="flex p-4 bg-teal-500 text-white fixed top-0 left-0 right-0">
      <font-awesome-icon
        icon="arrow-left"
        class="text-left text-3xl"
        @click="$router.back()"
      />
      <div class="text-center text-2xl ml-5">{{ fullName }}</div>
    </div>
    <div ref="chatContainer" class="pb-24 pt-20">
      <div
        v-for="message in chatStore.messages"
        :key="message.id"
        class="flex flex-col px-4 py-1 overflow-scroll mb-auto overscroll-auto space-y-5"
      >
        <div
          v-if="isNewDay(message.createdAt!)"
          class="px-3 py-1 w-1/3 rounded-lg bg-blue-100 text-center text-gray-600 place-self-center"
        >
          <p>
            {{ moment(message.createdAt).format("ll") }}
          </p>
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

<style scoped>
.chat {
  --animate-duration: 0.4s;
}
/* .chat-container {
        height: 36rem;
    } */
</style>
