import { type Context, type Rule } from "./types";

type Params = Parameters<Context["report"]>[0] & { data?: unknown };

export function changeReport<Base extends Rule>(
  base: Base,
  f: (params: Params & { report: Context["report"] }) => void,
): Base {
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

export function changeRule<Base extends Rule>(
  base: Base,
  f: Rule["create"],
): Base {
  return {
    ...base,
    create: function (context) {
      return f(context);
    },
  };
}

export function filter<Base extends Rule>(
  base: Base,
  f: (params: Params) => boolean,
): Base {
  return changeReport(base, function (params) {
    if (f({ ...params })) params.report(params);
  });
}

export function reword<Base extends Rule>(
  base: Base,
  messageOrFunction: string | ((params: Params) => string),
): Base {
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
