import { createRouter, createWebHistory } from "vue-router";
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

// import { EventBus } from '@/event-bus.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/book",
      name: "book",
      component: BookView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/terms-and-conditions",
      name: "terms-and-conditions",
      component: TermsAndConditionsView,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/book-contact-modal",
      name: "ModalBookingContactData",
      component: ModalBookingContactData,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   EventBus.$emit('closeNav')
//   next()
// })

export default router;
