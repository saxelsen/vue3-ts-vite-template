module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-airbnb-with-typescript",
    "prettier",
    "plugin:prettier-vue/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2022,
    requireConfigFile: false,
    extraFileExtensions: [".vue"],
    sourceType: "module",
  },
};
