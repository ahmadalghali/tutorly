/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  rules: {
    // "no-undef": false
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:vue/vue3-recommended",
    "prettier",
    "./.eslintrc-auto-import.json",
  ],
  env: {
    // "vue/setup-compiler-macros": true,
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  // globals: {
  //   $ref: "readonly",
  //   $computed: "readonly",
  //   $shallowRef: "readonly",
  //   $customRef: "readonly",
  //   $toRef: "readonly",
  // },
};
