import { defineStore } from "pinia";
import api from "@/services/api";
import type { CreateStudentDto, Lesson, Student } from "@/global/api-types";
import { useToast } from "vue-toastification";
import router from "@/router";
import { useMeStore } from "./me";
const toast = useToast();

export const useStudentStore = defineStore({
  id: "student",
  state: () => ({
    myLessons: [] as Lesson[],
    // user: null as Partial<User> | null,
  }),
  getters: {},
  actions: {
    async getMyLessons() {
      api
        .get("lessons")
        .then((res) => {
          // console.log("res :>> ", res);
          this.myLessons = res.data;
        })
        .catch((err) => {
          console.log("err :>> ", err);
          toast.error("Error fetching lessons");
        });
    },
  },
});
