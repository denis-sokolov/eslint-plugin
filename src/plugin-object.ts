import { type ESLint } from "eslint";

import { type configs } from "./configs";
import { type rules } from "./rules";

export const plugin = {
  configs: {} as typeof configs,
  rules: {} as typeof rules as any as ESLint.Plugin["rules"],
} satisfies ESLint.Plugin;
