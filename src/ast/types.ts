import { TSESTree } from "@typescript-eslint/typescript-estree";

export {
  AST_NODE_TYPES,
  AST_TOKEN_TYPES,
  TSESTree,
} from "@typescript-eslint/typescript-estree";

export type Location = TSESTree.SourceLocation | TSESTree.LineAndColumnData;

export type Node = TSESTree.Node | TSESTree.Comment | TSESTree.Token;
