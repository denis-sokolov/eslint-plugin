import type { TSESTree } from "../ast";

export function parseImportValue(node: TSESTree.ImportDeclaration) {
  const { value } = node.source;

  if (typeof value !== "string") return "unknown";

  if (value.match(/^@.+\/.+\/.+\/.+/)) return "organization-module-deep";
  if (value.match(/^@.+\/.+\/.+/)) return "organization-module-top";
  if (value.match(/^@.+\/.+\//)) return "organization-module";
  if (value.startsWith("@")) return "unknown";

  if (value.startsWith("../")) return "relative-up";

  if (value.match(/^\.\/.+\/.+\/.+/)) return "relative-deep";
  if (value.match(/^\.\/.+\/.+/)) return "relative-top";
  if (value.match(/^\.+\/.+/)) return "relative";

  if (value.match(/^.+\/.+\/.+/)) return "module-deep";
  if (value.match(/^.+\/.+/)) return "module-top";
  if (value.match(/^.+\//)) return "module";

  return "unknown";
}
