import { defineStore } from "pinia";

export const useNavBar = defineStore({
  id: "navbar",
  state: () => ({
    isOpen: false,
  }),
  getters: {},
  actions: {
    close(): void {
      this.isOpen = false;
    },
    open(): void {
      this.isOpen = true;
    },
  },
});
