import axios from "axios";
import { defineStore } from "pinia";
import api from "@/services/api";
import type { RegisterDto } from "@/global/api-types";
// import { useApi } from "@/use/api";
import { useAxios } from "@vueuse/integrations/useAxios";
import { useApi } from "@/use/api";

export const useAuth = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  getters: {
    user: (state) => state.user,
  },
  actions: {
    async login(email: string, password: string) {
      // api
      //   .post("auth/login", { email: email, password: password })
      //   .then((res) => console.log("res >> ", res))
      //   .catch((err) => console.log("err.response:>> ", err.response));
      // const { data, isFinished } = useAxios('/auth/login', {

      // })
      // const { data,  error } = await useApi(
      //   api.auth.authControllerLogin({
      //     email: email,
      //     password: password,
      //   })
      // );

      // console.log("data.value.data :>> ", data);
      // console.log("error.value :>> ", error.value);

      // return { data, error };

      return api.auth
        .authControllerLogin({
          email: email,
          password: password,
        })
        .then((res) => console.log("res.data >> ", res.data))
        .catch((err) => console.log("err.response :>> ", err.response));

      // const res: boolean = api.auth.authControllerLogin({
      //   email: email,
      //   password: password,
      // })
      // const res = await .then(res => res.data)
      // .catch(err => )
    },
    async register(registerDto: RegisterDto) {
      const res = await api.auth.authControllerRegister(registerDto);
    },
  },
});
