import withNuxt from "./.nuxt/eslint.config.mjs"
import eslintConfigPrettier from "eslint-config-prettier"

export default withNuxt(
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-console": "off",
    },
    parser: "@typescript-eslint/parser",
    extends: "plugin:drizzle/recommended",
    plugins: ["drizzle"],
  },
  {
    ignores: ["**/components/ui", "**/lib"],
  },
  eslintConfigPrettier,
)
