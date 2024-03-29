module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript",
    "plugin:storybook/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "plugin-grabelnikov",
    "unused-imports"
  ],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "max-len": [
      "warn",
      {
        code: 90,
        tabWidth: 2,
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/comma-dangle": "off",
    "react/display-name": "off",
    "linebreak-style": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "plugin-grabelnikov/path-check-in-fsd": ["error", { alias: "@" }],
    "plugin-grabelnikov/public-api-import": ["error", { alias: "@" }],
    "plugin-grabelnikov/layer-imports": [
      "error", 
      { alias: "@", excludePatterns: ["**/styleDecorator", "**/storeProvider"] }
    ],
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/prefer-export-type": "off"
  },
};
