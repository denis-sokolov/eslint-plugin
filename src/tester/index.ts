import { TSESLint } from "@typescript-eslint/utils";
import test from "ava";

import { type Rule } from "../eslint";

class RuleTester extends TSESLint.RuleTester {
  constructor() {
    super({
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    });
  }
}

const ruleTester = new RuleTester();

// invalid and valid are more like a DSL than functions
/* eslint-disable max-params */

export function invalid(
  name: string,
  rule: Rule,
  /**
   * Can contain <err>...</err> tags to indicate where the error should be
   */
  code: string,
  options: { count?: number; ruleOptions?: unknown[] } = {},
) {
  test(name, (t) => {
    const errors: Omit<TSESLint.TestCaseError<string>, "messageId">[] =
      Array.from(new Array(options.count || 1)).map(() => ({}));
    function countPos(s: string) {
      const lines = s.split("\n");
      const last = lines[lines.length - 1];
      return { col: last.length + 1, line: lines.length };
    }
    let errNum = 0;
    while (code.includes("<err>")) {
      const [before, ..._b] = code.split("<err>");
      const b = _b.join("<err>");
      if (!b.includes("</err>")) throw new Error("No closing </err> tag");
      const [inside, ..._after] = b.split("</err>");
      const after = _after.join("</err>");
      const start = countPos(before);
      const end = countPos(before + inside);
      errors[errNum] = {
        ...(errors[errNum] ?? {}),
        column: start.col,
        endColumn: end.col,
        endLine: end.line,
        line: start.line,
      };
      code = before + inside + after;
      errNum += 1;
    }

    ruleTester.run("dummy rule name for test " + name, rule as any, {
      invalid: [
        { code, errors: errors as any, options: options.ruleOptions || [] },
      ],
      valid: [],
    });
    t.pass();
  });
}

export function valid(
  name: string,
  rule: Rule,
  code: string,
  options: { ruleOptions?: unknown[] } = {},
) {
  test(name, (t) => {
    ruleTester.run("dummy rule name for test " + name, rule as any, {
      invalid: [],
      valid: [
        {
          code,
          options: options.ruleOptions || [],
        },
      ],
    });
    t.pass();
  });
}
