module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    // 0 - off, 1 - warn, 2 - error
    "arrow-body-style": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true, ignoreAttribute: ["as"] }],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    indent: [2, 2],
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "react/button-has-type": "error",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/function-component-definition": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    quotes: [2, "double"],
  },
  globals: {
    __IS_DEV__: true,
    React: true,
  },
};
