// import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/auth/LoginView.vue";
import RegisterView from "../views/auth/RegisterView.vue";
import BookView from "../views/BookView.vue";
import ContactView from "../views/ContactView.vue";
import TermsAndConditionsView from "../views/TermsAndConditionsView.vue";
import ChatView from "../views/ChatView.vue";
import ProfileView from "../views/ProfileView.vue";
import ModalBookingContactData from "@/components/modals/ModalBookingContactData.vue";

import { useNavBar } from "@/stores/navbar";

import { createRouter, createWebHistory } from "@ionic/vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: AboutView,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/book",
      component: BookView,
    },
    {
      path: "/contact",
      component: ContactView,
    },
    {
      path: "/terms-and-conditions",
      component: TermsAndConditionsView,
    },
    {
      path: "/chat",
      component: ChatView,
    },
    {
      path: "/profile",
      component: ProfileView,
    },
    {
      path: "/book-contact-modal",
      component: ModalBookingContactData,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const navbarStore = useNavBar();
  navbarStore.close();
  next();
});

export default router;
