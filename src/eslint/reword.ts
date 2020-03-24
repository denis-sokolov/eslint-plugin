import type { ReportDescriptor } from "@typescript-eslint/experimental-utils/dist/ts-eslint/";
import type { Rule } from "./types";

export function reword(
  base: Rule,
  messageOrFunction: string | ((params: ReportDescriptor<"">) => string)
) {
  const f =
    typeof messageOrFunction === "string"
      ? () => messageOrFunction
      : messageOrFunction;
  const rule: Rule = {
    ...base,
    create: function (context) {
      const p: typeof context = Object.create(context, {
        report: { writable: true },
      });
      p.report = function (params) {
        context.report({
          ...params,
          messageId: undefined,
          message: f(params as any),
        } as any);
      };
      return base.create(p);
    },
  };
  return rule;
}
