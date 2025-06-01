import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist", "vite.config.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.app.json",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "react-*",
              group: "external",
              position: "before",
            },
            {
              pattern: "~/components/**",
              group: "internal",
            },
            {
              pattern: "~/hooks/**",
              group: "internal",
            },
            {
              pattern: "~/services/**",
              group: "internal",
            },
            {
              pattern: "~/api/**",
              group: "internal",
            },
            {
              pattern: "~/utils/**",
              group: "internal",
            },
            {
              pattern: "~/types/**",
              group: "internal",
            },
            {
              pattern: "~/constants/**",
              group: "internal",
            },
            {
              pattern: "~/atoms/**",
              group: "internal",
            },
            {
              pattern: "~/providers/**",
              group: "internal",
            },
            {
              pattern: "~/routes/**",
              group: "internal",
            },
            {
              pattern: "~/pages/**",
              group: "internal",
            },
            {
              pattern: "~/layout/**",
              group: "internal",
            },
            {
              pattern: "~/styles/**",
              group: "internal",
            },
            {
              pattern: "~/assets/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.app.json",
        },
      },
    },
  }
);
