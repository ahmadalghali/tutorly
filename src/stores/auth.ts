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
import { useMe } from "./me";
import { useNavBar } from "./navbar";
const toast = useToast();

export const useAuth = defineStore({
  id: "auth",
  state: () => ({
    // user: null as Partial<User> | null,
  }),
  getters: {
    isLoggedIn: (): boolean => !!useMe().user,
  },
  actions: {
    async login(email: string, password: string) {
      // console.log("Logging in...");

      try {
        // const res = await api.auth.authControllerLogin({ email, password });
        const res = await api.post("auth/login", { email, password });
        useMe().user = res.data;
        toast.success(`Hello ${useMe().user?.email}`);
        router.push("/");
      } catch (err) {
        console.log("err :>> ", err);
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
          console.log("res :>> ", res);
        })
        .catch((err) => {
          console.log("there was an error err :>> ", err);
        })
        .finally(() => {
          useMe().user = null;
          router.replace("/");
          useNavBar().close();
          // toast.info(`Logged out`);
        });
    },
    async register(createStudentDto: CreateStudentDto) {
      // const res = await api.auth.authControllerRegister(createStudentDto);
      const res = await api.post("register", createStudentDto);
    },
  },
});
