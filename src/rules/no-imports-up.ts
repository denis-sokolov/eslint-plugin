import type { Rule } from "../eslint";
import { parseImportValue } from "./parseImportValue";

const valuesToDetect: Array<ReturnType<typeof parseImportValue>> = [
  "relative-up-and-done",
];

const rule: Rule = {
  create: function (context) {
    return {
      ImportDeclaration(node) {
        if (!valuesToDetect.includes(parseImportValue(node))) return;
        context.report({
          message: [
            "Avoid such imports.",
            "The convention is dependency tree is represented by directory hierarchy, so importing a (grand-)parent directory means creating an import cycle.",
            "Consider instead carefully identifying what you need to reuse and put it into a separate module, then import it with ../reusableThing.",
          ].join(" "),
          node,
        });
      },
    };
  },
};

export default rule;
