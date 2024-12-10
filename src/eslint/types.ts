import { type ESLintUtils } from "@typescript-eslint/utils";

import { type Location, type Node } from "../ast";

export type Context = Omit<RuleContext, "report"> & {
  report: (params: ReportParams) => void;
};
export type Rule = {
  create: (context: Context) => RuleListener;
  meta?: Partial<Meta>;
};
export type Rules = {
  [name: string]: Rule;
};
type Create = ESLintUtils.RuleModule<"">["create"];

type Meta = ESLintUtils.RuleModule<"">["meta"];

type ReportParams = {
  loc?: Location;
  message: string;
  node: Node;
};

type RuleContext = Parameters<Create>[0];

type RuleListener = ReturnType<Create>;
