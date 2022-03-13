import type { AxiosResponse } from "axios";
import { ref, type Ref } from "vue";

export async function useApi(apiCall: Promise<AxiosResponse<object, any>>) {
  const data = ref<null | Object>(null);
  const error = ref(null);

  return await apiCall
    // .then((res) => console.log("res :>> ", res))
    // .catch((err) => console.log("err.response :>> ", err.response));
    .then((res) => (data.value = res))
    .catch((err) => (error.value = err.response));

  return { data, error };
}
