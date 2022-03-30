import { defineStore } from "pinia";
import api from "@/services/api";
import type {
  LoginResponseDto,
  User,
  Student,
  Tutor,
  Admin,
  Admin as AdminType,
} from "@/global/api-types";
import { useToast } from "vue-toastification";
import router from "@/router";
const toast = useToast();
import { useAuth } from "./auth";

export const useMe = defineStore({
  id: "me",
  state: () => ({
    user: null as unknown as null | User | Student | Tutor,
  }),
  getters: {},
  actions: {
    async getMe() {
      // api.me
      //   .meControllerGetMe({ withCredentials: true })
      await api
        .get("me")
        .then((res) => {
          this.user = res.data as Student;
          console.log("res :>> ", res);
        })
        .catch((err) => {
          console.log("err :>> ", err);
          useAuth().logout();
        });
    },
  },
});
