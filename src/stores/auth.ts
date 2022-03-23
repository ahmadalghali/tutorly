import axios from "axios";
import { defineStore } from "pinia";
import api from "@/services/api";
import type {
  LoginResponseDto,
  RegisterUserDto,
  User,
} from "@/global/api-types";
// import { useApi } from "@/use/api";
import { useAxios } from "@vueuse/integrations/useAxios";
import { useApi } from "@/use/api";
import { useToast } from "vue-toastification";
import router from "@/router";
const toast = useToast();

export const useAuth = defineStore({
  id: "auth",
  state: () => ({
    user: null as Partial<User> | null,
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.user,
  },
  actions: {
    async login(email: string, password: string) {
      console.log("Logging in...");
      api.auth
        .authControllerLogin({ email, password })
        .then((res) => {
          console.log("res :>> ", res);
          this.user = res.data;
          toast.success(`Hello ${this.user.email}`);
          router.push("/");
        })
        .catch((err) => {
          console.log("err :>> ", err);
          console.log("err.response :>> ", err.response);
        });
    },
    async register(registerDto: RegisterUserDto) {
      const res = await api.auth.authControllerRegister(registerDto);
    },
  },
});
