<template>
	
    <div class="chat bg-white flex flex-col h-screen w-screen " @keyup.enter="sendMessage">
        <div class="flex  p-4">
            <font-awesome-icon icon="arrow-left" class="text-left text-gray-800 text-3xl" @click="$router.go(-1)"/>
            <div class="text-center text-2xl ml-5">John Doe</div>
        </div>
       <div class="flex flex-col px-4 h-4/6 overflow-scroll mb-auto overscroll-auto space-y-5 bg-green-200" ref="chatContainer">
            <Message  v-for="(message, index) in messages" :text="message.text"  :fromMe="message.userId == userId" :key="index" />
            <!-- :ref="index == messages.length - 1 ? 'mostRecentMessage' : null" -->
            <div ref="mostRecentMessage" class="mb-10">test</div>
       </div>
        <div class="flex items-center">
            <input type="text" v-model="message" placeholder="Send a message..." class="rounded-3xl h-12 p-4 m-4 focus:outline-none  bg-gray-200 w-5/6" >
            <div class="w-1/6">
                    <div class="flex flex-wrap justify-center content-center rounded-full bg-blue-500 h-12 w-12 pr-1">
                    <font-awesome-icon icon="paper-plane" class="text-2xl text-white"  @click="sendMessage"/>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import Message from '@/components/chat/Message.vue'
export default {
    components: {
        Message
    },
    data() {
        return {
            userId: 1,
            message: '',
            messages: [
                { text: 'Hello', userId: 1},
                { text: 'Hi', userId: 2},
                { text: 'Hi sir, I wanted to ask about the homework, what does it need?', userId: 2},
                { text: 'Hi sir, I wanted to ask about the homework, what does it need?', userId: 1},
                { text: 'Hello', userId: 1},
                { text: 'Hi', userId: 2},
                { text: 'Hi sir, I wanted to ask about the homework, what does it need?', userId: 2},
                { text: 'Hi sir, I wanted to ask about the homework, what does it need?', userId: 1},
                { text: 'Hello', userId: 1},
                { text: 'Hi', userId: 2},
                { text: 'Hi sir, I wanted to ask about the homework, what does it need?', userId: 2},
                { text: 'Hi sir, I wanted to ask about the homework, what does it need?', userId: 1},
            ]
            
        }
    },
    methods: {
        sendMessage(){
            const trimmedMessage = this.message.trim()
            if(trimmedMessage.length > 0){
                this.messages.push({ text: trimmedMessage, userId: 1})
                this.message = ''
                this.scrollToBottomChat()
            }

        },
        scrollToBottomChat() {

            // var chatContainer = this.$refs.chatContainer;
            // chatContainer.scrollTop = chatContainer.scrollHeight;
            const mostRecentMessage = this.$refs.mostRecentMessage;

            console.log('mostRecentMessage :>> ', mostRecentMessage);
            if (mostRecentMessage) {
                console.log('Scrolling...');
            mostRecentMessage.scrollIntoView({behavior: 'smooth', block: "nearest"});
            }
        }
    },
    beforeMount(){
        this.scrollToBottomChat()
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