import type {
  RuleContext,
  RuleListener,
  RuleMetaData,
} from "@typescript-eslint/utils/dist/ts-eslint";
import type { Location, Node } from "../ast";

type MessageIds = "";

type ReportParams = {
  loc?: Location;
  message: string;
  node: Node;
};

export type Context = Omit<RuleContext<MessageIds, void[]>, "report"> & {
  report: (params: ReportParams) => void;
};

export type Rule = {
  create: (context: Context) => RuleListener;
  meta?: Partial<RuleMetaData<string>>;
};

export type Rules = {
  [name: string]: Rule;
};
