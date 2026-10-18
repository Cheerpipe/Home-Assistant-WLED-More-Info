import js from "@eslint/js";
import lit from "eslint-plugin-lit";
import wc from "eslint-plugin-wc";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["custom_components/*/frontend/", "node_modules/", ".venv/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  wc.configs["flat/recommended"],
  lit.configs["flat/recommended"],
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "wc/guard-super-call": "off",
    },
  },
);
