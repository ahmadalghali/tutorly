/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
interface ImportMetaEnv {
  readonly VITE_LTA_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
