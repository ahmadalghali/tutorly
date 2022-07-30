import axios from "axios";
import { defineStore } from "pinia";
import api from "@/services/api";
import type {
  CreateStudentDto,
  LoginResponseDto,
  User,
} from "@/global/api-types";
// import { useApi } from "@/use/api";
import { useAxios } from "@vueuse/integrations/useAxios";
import { useApi } from "@/use/api";
import { useToast } from "vue-toastification";
import router from "@/router";
import { useMeStore } from "./me";
import { useNavBarStore } from "./navbar";
const toast = useToast();

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // user: null as Partial<User> | null,
  }),
  getters: {
    isLoggedIn: (): boolean => !!useMeStore().user,
  },
  actions: {
    async login(email: string, password: string) {
      // console.log("Logging in...");

      try {
        const res = await api.post("auth/login", { email, password });
        return res;
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong, please try again later");
      }

      // res.catch((err) => {
      //   console.log("err :>> ", err);
      //   console.log("err.response :>> ", err.response);
      // });

      // const res = await axios.post("http://localhost:3001/auth/login", {
      //   email,
      //   password,
      // });
      // .then((res) => {
      //   console.log("res :>> ", res);
      //   this.user = res.data;
      //   toast.success(`Hello ${this.user.email}`);
      //   router.push("/");
      // })
      // .catch((err) => {
      //   console.log("err :>> ", err);
      //   console.log("err.response :>> ", err.response);
      // });
    },
    logout() {
      // api.auth
      //   .authControllerLogout()
      api
        .post("auth/logout")
        .then((res) => {
          // console.log("res :>> ", res);
        })
        .catch((err) => {
          console.log("there was an error err :>> ", err);
        })
        .finally(() => {
          useMeStore().user = null;
          router.replace("/");
          useNavBarStore().close();
          // toast.info(`Logged out`);
        });
    },
    async register(createStudentDto: CreateStudentDto) {
      // const res = await api.auth.authControllerRegister(createStudentDto);
      const res = await api.post("/auth/register", createStudentDto);
      return res;
    },
  },
});
