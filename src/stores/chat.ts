import { defineStore } from "pinia";
import api from "@/services/api";
import type {
  CreateStudentDto,
  Lesson,
  Message,
  Student,
  CreateMessageDto,
} from "@/global/api-types";
import { useToast } from "vue-toastification";
import router from "@/router";
import { useMeStore } from "./me";
const toast = useToast();

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    messages: [] as Message[],
  }),
  getters: {},
  actions: {
    async getMessagesWithUser(userId: number) {
      await api
        .get(`/messages/user/${userId}`)
        .then((res) => {
          console.log("res :>> ", res);
          this.messages = res.data;
        })
        .catch((err) => {
          console.log("err :>> ", err);
          toast.error("Error fetching chat messages");
        });
    },
    async sendMessage(sendMessageDto: CreateMessageDto) {
      console.log("in chat.ts sendMessage");
      await api
        .post("/messages", sendMessageDto)
        .then(async (res) => {
          if (res.status === 201 || res.status === 200) {
            await this.getMessagesWithUser(sendMessageDto.receiverId);
          } else {
            toast.error("failed to send message");
          }
        })
        .catch((sendMessageErr) => {
          toast.error("failed to send message");
          console.log("sendMessageErr :>> ", sendMessageErr);
        });
    },
  },
});
