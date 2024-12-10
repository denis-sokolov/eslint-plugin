import { type Context, type Rule } from "./types";

type Params = Parameters<Context["report"]>[0] & { data?: unknown };

export function changeReport(
  base: Rule,
  f: (params: Params & { report: Context["report"] }) => void,
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

export function changeRule(base: Rule, f: Rule["create"]): Rule {
  return {
    ...base,
    create: function (context) {
      return f(context);
    },
  };
}

export function filter(base: Rule, f: (params: Params) => boolean) {
  return changeReport(base, function (params) {
    if (f({ ...params })) params.report(params);
  });
}

export function reword(
  base: Rule,
  messageOrFunction: string | ((params: Params) => string),
) {
  const f =
    typeof messageOrFunction === "string"
      ? () => messageOrFunction
      : messageOrFunction;
  return changeReport(base, function (params) {
    params.report({
      ...params,
      message: f(params as any),
      messageId: undefined,
    } as any);
  });
}
