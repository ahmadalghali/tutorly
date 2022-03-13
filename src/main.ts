import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import Toast, { type PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

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
app.use(router);

const options: PluginOptions = {
  // You can set your default options here
};

app.use(Toast, options);

app.mount("#app");
