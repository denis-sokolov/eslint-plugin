import { type TSESTree } from "../ast";

export type ImportPathDeclaration =
  | TSESTree.ImportDeclaration
  | TSESTree.ExportAllDeclaration
  | TSESTree.ExportNamedDeclaration;

export function importPath(node: ImportPathDeclaration) {
  const { value } = node.source || {};
  if (typeof value !== "string") return "";
  return value;
}

export function parseImportValue(node: ImportPathDeclaration) {
  const { value } = node.source || {};

  if (typeof value !== "string") return "unknown";

  if (value.match(/^@.+\/.+\/.+\/.+/)) return "organization-module-deep";
  if (value.match(/^@.+\/.+\/.+/)) return "organization-module-top";
  if (value.match(/^@.+\/.+\//)) return "organization-module";
  if (value.startsWith("@")) return "unknown";

  if (value.match(/^(\.\.\/)+.+[^.]\//)) return "relative-up-and-deep";
  if (value.match(/^(\.\.\/)*\.\.\/?$/)) return "relative-up-and-done";
  if (value.match(/^(\.\.\/)+/)) return "relative-up-and-sideways";

  if (value.match(/^\.\/.+\/.+\/.+/)) return "relative-deep";
  if (value.match(/^\.\/.+\/.+/)) return "relative-top";
  if (value.match(/^\.+\/.+/)) return "relative";

  if (value.match(/^.+\/.+\/.+/)) return "module-deep";
  if (value.match(/^.+\/.+/)) return "module-top";
  if (value.match(/^.+\//)) return "module";

  return "unknown";
}
