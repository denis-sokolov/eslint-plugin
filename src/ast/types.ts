import type { TSESTree } from "@typescript-eslint/utils";

export {
  AST_NODE_TYPES,
  AST_TOKEN_TYPES,
  TSESTree,
} from "@typescript-eslint/utils";

export type Location = TSESTree.SourceLocation;

export type Node = TSESTree.Node | TSESTree.Comment | TSESTree.Token;
