<template>
  <div
    class="chat bg-white flex flex-col h-screen w-screen"
    @keyup.enter="sendMessage"
  >
    <div class="flex p-4 bg-teal-500 text-white">
      <font-awesome-icon
        icon="arrow-left"
        class="text-left text-3xl"
        @click="$router.go(-1)"
      />
      <div class="text-center text-2xl ml-5">John Doe</div>
    </div>
    <div
      ref="chatContainer"
      class="flex flex-col p-4 overflow-scroll mb-auto overscroll-auto space-y-5"
    >
      <Message
        v-for="(message, index) in messages"
        :key="index"
        :text="message.text"
        :from-me="message.userId == userId"
      />
      <!-- :ref="index == messages.length - 1 ? 'mostRecentMessage' : null" -->
      <!-- <div ref="mostRecentMessage" class="mb-10">test</div> -->
    </div>
    <div class="flex items-center bg-gray-100">
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
</template>

<script setup lang="ts">
import Message from "@/components/chat/Message.vue";
import { onBeforeMount, reactive, ref } from "vue";
const userId = 1;
const message = ref("");

const mostRecentMessage = ref(null);
const messages = reactive([
  { text: "Hello", userId: 1 },
  { text: "Hi", userId: 2 },
  {
    text: "Hi sir, I wanted to ask about the homework, what does it need?",
    userId: 2,
  },
  {
    text: "Hi sir, I wanted to ask about the homework, what does it need?",
    userId: 1,
  },
  { text: "Hello", userId: 1 },
  { text: "Hi", userId: 2 },
  {
    text: "Hi sir, I wanted to ask about the homework, what does it need?",
    userId: 2,
  },
  {
    text: "Hi sir, I wanted to ask about the homework, what does it need?",
    userId: 1,
  },
  { text: "Hello", userId: 1 },
  { text: "Hi", userId: 2 },
  {
    text: "Hi sir, I wanted to ask about the homework, what does it need?",
    userId: 2,
  },
  {
    text: "Hi sir, I wanted to ask about the homework, what does it need?",
    userId: 1,
  },
]);

onBeforeMount(() => {
  scrollToBottomChat();
});

function sendMessage() {
  const trimmedMessage = message.value.trim();
  if (trimmedMessage.length > 0) {
    messages.push({ text: trimmedMessage, userId: 1 });
    message.value = "";
    scrollToBottomChat();
  }
}
function scrollToBottomChat() {
  // var chatContainer = $refs.chatContainer;
  // chatContainer.scrollTop = chatContainer.scrollHeight;

  console.log("mostRecentMessage :>> ", mostRecentMessage);
  if (mostRecentMessage.value) {
    console.log("Scrolling...");
    mostRecentMessage.value.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
}
</script>
<style scoped>
.chat {
  --animate-duration: 0.4s;
}
/* .chat-container {
        height: 36rem;
    } */
</style>
