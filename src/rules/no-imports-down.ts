import { type Rule } from "../eslint";

import {
  importPath,
  type ImportPathDeclaration,
  parseImportValue,
} from "./imports";

function getMessage(type: ReturnType<typeof parseImportValue>) {
  const convention =
    "The convention is every directory represents a module, and everything that is not exposed at the top-level is an internal implementation detail.";

  if (
    type === "relative-deep" ||
    type === "relative-top" ||
    type === "relative-up-and-deep"
  )
    return [
      "Avoid importing from deeper than one level.",
      convention,
      'Consider instead an index file that explicitly exports what should be accessible outside the module (export { Foo } from "./subfolder")',
    ];

  if (type === "organization-module-deep" || type === "module-deep")
    return [
      "Avoid importing from too deep.",
      convention,
      `If you control the code to be imported, consider instead an index file that explicitly exports what should be accessible outside the module (export { Foo } from "./subfolder")'`,
      `If the code is 3rd-party, consider that they may change this at any moment, since they do not expect you would rely on it.`,
    ];

  return undefined;
}

const rule: Rule = {
  create: function (context) {
    const options: { ignoreRegexes?: string[] } =
      (context.options as any)[0] || {};
    const ignoreRegexes = (options.ignoreRegexes || []).map(
      (source) => new RegExp(source),
    );

    function process(node: ImportPathDeclaration) {
      if (ignoreRegexes.some((regex) => regex.test(importPath(node)))) return;

      const importType = parseImportValue(node);
      const message = getMessage(importType);
      if (message)
        context.report({
          loc: node.source?.loc,
          message: message.join(" "),
          node,
        });
    }

    return {
      ExportAllDeclaration: process,
      ExportNamedDeclaration: process,
      ImportDeclaration: process,
    };
  },
  meta: {
    schema: [
      {
        additionalProperties: false,
        properties: {
          ignoreRegexes: {
            items: { type: "string" },
            type: "array",
          },
        },
        type: "object",
      },
    ],
  },
};

export default rule;
