import type { ReportDescriptor } from "@typescript-eslint/experimental-utils/dist/ts-eslint/";
import type { Context, Rule } from "./types";

export function changeRule(base: Rule, f: Rule["create"]): Rule {
  return {
    ...base,
    create: function (context) {
      return f(context);
    },
  };
}

export function changeReport(
  base: Rule,
  f: (
    params: Parameters<Context["report"]>[0] & { report: Context["report"] }
  ) => void
): Rule {
  return changeRule(base, function (context) {
    const p: typeof context = Object.create(context, {
      report: { writable: true },
    });
    p.report = function (params) {
      return f({ ...params, report: context.report });
    };
    return base.create(p);
  });
}

export function reword(
  base: Rule,
  messageOrFunction: string | ((params: ReportDescriptor<"">) => string)
) {
  const f =
    typeof messageOrFunction === "string"
      ? () => messageOrFunction
      : messageOrFunction;
  return changeReport(base, function (params) {
    params.report({
      ...params,
      messageId: undefined,
      message: f(params as any),
    } as any);
  });
}
