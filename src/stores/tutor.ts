import { defineStore } from "pinia";
import api from "@/services/api";
import type { CreateStudentDto, Student } from "@/global/api-types";
import { useToast } from "vue-toastification";
import router from "@/router";
import { useMeStore } from "./me";
const toast = useToast();

export const useTutorStore = defineStore({
  id: "tutor",
  state: () => ({
    myStudents: [] as Student[],
    // user: null as Partial<User> | null,
  }),
  getters: {},
  actions: {
    async getMyStudents() {
      api
        .get("tutors/my-students")
        .then((res) => {
          // console.log("res :>> ", res);
          this.myStudents = res.data;
        })
        .catch((err) => {
          console.log("err :>> ", err);
          toast.error("Error fetching students");
        });
    },
  },
});
