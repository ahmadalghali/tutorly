import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  getters: {
    user: (state) => state.user,
  },
  actions: {
    async login() {},
    async register() {},
  },
});
