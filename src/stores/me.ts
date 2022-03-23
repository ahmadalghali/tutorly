import { defineStore } from "pinia";
import api from "@/services/api";
import type { LoginResponseDto, User } from "@/global/api-types";
import { useToast } from "vue-toastification";
import router from "@/router";
const toast = useToast();

export const useAuth = defineStore({
  id: "me",
  state: () => ({
    user: null as Partial<User> | null,
  }),
  getters: {},
  actions: {
    getMe() {},
  },
});
