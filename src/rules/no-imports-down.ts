import type { Rule } from "../eslint";
import { parseImportValue } from "./parseImportValue";

function getMessage(type: ReturnType<typeof parseImportValue>) {
  const convention =
    "The convention is every directory represents a module, and everything that is not exposed at the top-level is an internal implementation detail.";

  if (type === "relative-deep" || type === "relative-top")
    return [
      "Avoid importing from deeper than the current level.",
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
    return {
      ImportDeclaration(node) {
        const importType = parseImportValue(node);
        const message = getMessage(importType);
        if (message)
          context.report({
            message: message.join(" "),
            node,
          });
      },
    };
  },
};

export default rule;
