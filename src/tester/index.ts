import test from "ava";
import { Rule } from "../eslint";
import { TSESLint } from "@typescript-eslint/experimental-utils";

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

export function invalid(
  name: string,
  rule: Rule,
  code: string,
  options: { count?: number } = {}
) {
  test(name, (t) => {
    const blankError = {};
    const errors = Array.from(new Array(options.count || 1)).map(
      () => blankError
    );
    ruleTester.run("dummy-name", rule as any, {
      valid: [],
      invalid: [{ code, errors: errors as any }],
    });
    t.pass();
  });
}

export function valid(name: string, rule: Rule, code: string) {
  test(name, (t) => {
    ruleTester.run("dummy-name", rule as any, {
      valid: [code],
      invalid: [],
    });
    t.pass();
  });
}
