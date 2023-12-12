import type { Location, Node } from "../ast";
import type { ESLintUtils } from "@typescript-eslint/utils";

type Create = ESLintUtils.RuleModule<"">["create"];
type RuleContext = Parameters<Create>[0];
type RuleListener = ReturnType<Create>;

type ReportParams = {
  loc?: Location;
  message: string;
  node: Node;
};

export type Context = Omit<RuleContext, "report"> & {
  report: (params: ReportParams) => void;
};

export type Rule = { create: (context: Context) => RuleListener };

export type Rules = {
  [name: string]: Rule;
};
