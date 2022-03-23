/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { IonicVue } from "@ionic/vue";
import router from "./router";
import "./index.css";
import Toast, { type PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import vfmPlugin from "vue-final-modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faBars,
  faTimes,
  faSearch,
  faPaperPlane,
  faArrowLeft,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faBars,
  faTimes,
  faSearch,
  faPaperPlane,
  faArrowLeft,
  faLightbulb
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(vfmPlugin);
app.use(IonicVue);
app.use(router);

const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: 3000,
  // You can set your default options here
};

app.config.globalProperties.$test = "haha it works";

app.use(Toast, options);

router.isReady().then(() => {
  app.mount("#app");
});

// app.mount("#app");
