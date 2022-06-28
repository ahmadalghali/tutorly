import { UserRole } from "./../global/types";
import { defineStore } from "pinia";
import api from "@/services/api";
import type {
  LoginResponseDto,
  User,
  Student,
  Tutor,
  Admin,
} from "@/global/api-types";
import { useToast } from "vue-toastification";
import router from "@/router";
const toast = useToast();
import { useAuthStore } from "./auth";
interface State {
  user: null | Student | Tutor;
}
export const useMeStore = defineStore({
  id: "me",
  state: (): State => ({
    user: null,
  }),
  getters: {},
  actions: {
    async getMe() {
      // api.me
      //   .meControllerGetMe({ withCredentials: true })
      await api
        .get("me")
        .then((res) => {
          this.user = res.data;
          // console.log("res :>> ", res);
        })
        .catch((err) => {
          console.log("err :>> ", err);
          useAuthStore().logout();
        });
    },
  },
});
