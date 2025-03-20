import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    plugins: {
      react,
      prettier: prettier(), // Aqui é a diferença!
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
];
