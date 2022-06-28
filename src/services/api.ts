import { useAuthStore } from "@/stores/auth";

import { Api } from "@/global/api-types";
import axios from "axios";

function handleResponseStatus(status: number) {
  switch (status) {
    case 200:
      break;
    case 400:
      break;
    case 500:
      break;
    case 401:
      break;
    case 403:
      break;
  }
}

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
// });

// axiosInstance.interceptors.response.use((response) => {
//   return response;
// }, (error) => {
//   // Do something with response error
//   if (error.response.status === 401) {
//       console.log('unauthorized, logging out ...');
//       auth.logout();
//       router.replace('/auth/login');
//   }
//   return Promise.reject(error.response);
// });

// export default axiosInstance;

const BASE_URL = import.meta.env.VITE_LTA_API_URL;
// const authStore = useAuthStore();
// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true
// })

const {
  // instance: axiosInstance,
  request,
  setSecurityData,
  ...apiRoutes
} = new Api();

// axiosInstance. AXIOS CONFIG HERE

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data)
);

export default axiosInstance;
// export default apiRoutes;
