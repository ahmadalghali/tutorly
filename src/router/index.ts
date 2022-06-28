import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/auth/LoginView.vue";
import RegisterView from "../views/auth/RegisterView.vue";
import BookView from "../views/BookView.vue";
import ContactView from "../views/ContactView.vue";
import TermsAndConditionsView from "../views/TermsAndConditionsView.vue";
import ChatView from "../views/ChatView.vue";
import ProfileView from "../views/ProfileView/index.vue";
import ModalBookingContactData from "@/components/modals/ModalBookingContactData.vue";
import { useAuthStore } from "@/stores/auth";

import { useNavBarStore } from "@/stores/navbar";
import { useMeStore } from "@/stores/me";

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
      beforeEnter: () => !useAuthStore().isLoggedIn,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      beforeEnter: () => !useAuthStore().isLoggedIn,
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
      // component: () => import("@/views/ChatView.vue"),
      component: ChatView,
      props: (route) => ({ withUserId: parseInt("" + route.query.withUserId) }),
      meta: {
        requiresAuth: true,
        hideNavbar: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/book-contact-modal",
      name: "ModalBookingContactData",
      component: ModalBookingContactData,
    },
  ],
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const meStore = useMeStore();
  const navbarStore = useNavBarStore();
  navbarStore.close();
  // await meStore.getMe();

  // if (to.meta.requiresAuth) {
  //   if (!authStore.isLoggedIn) {
  //     return {
  //       path: "/login",
  //       // save the location we were at to come back later
  //       query: { redirect: to.fullPath },
  //     };
  //   }
  //   return true;
  // }
});

// declare module "vue-router" {
//   interface RouteMeta {
//     // is optional
//     isAdmin?: boolean;
//     // must be declared by every route
//     requiresAuth: boolean;
//   }
// }

export default router;
