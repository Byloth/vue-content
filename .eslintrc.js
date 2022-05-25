module.exports = {
  root: true,
  extends: ["@byloth/eslint-config-typescript"],
  ignorePatterns: [
    "src/components/**/*",
    "src/markdown-parser/**/*",
    "src/transformers/**/*",
    "src/types/index.ts"
  ]
};