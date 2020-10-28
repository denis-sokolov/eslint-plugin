import type { Rule } from "../eslint";
import { parseImportValue } from "./parseImportValue";

const valuesToDetect: Array<ReturnType<typeof parseImportValue>> = [
  "relative-up",
];

const rule: Rule = {
  create: function (context) {
    return {
      ImportDeclaration(node) {
        if (!valuesToDetect.includes(parseImportValue(node))) return;
        context.report({
          message: [
            "Avoid importing up from the current level.",
            "The convention is dependency tree is represented by directory hierarchy, so importing up means creating an import cycle.",
            "Consider instead passing data that you want to import as an explicit parameter into the current module.",
            'If the module you are importing does not depend on the current module, consider instead to expose it using a path alias to make it look like a module, e.g. `import {} from "src/buttons";`',
          ].join(" "),
          node,
        });
      },
    };
  },
};

export default rule;
