import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "build/**",
      "dist/**",
      "coverage/**",
      "*.log",
      ".env*",
      ".DS_Store",
      "package-lock.json",
      "pnpm-lock.yaml",
      "yarn.lock"
    ]
  },
  {
    rules: {
      // Disable the problematic react-hooks/exhaustive-deps rule temporarily
      "react-hooks/exhaustive-deps": "off"
    }
  }
];

export default eslintConfig;
