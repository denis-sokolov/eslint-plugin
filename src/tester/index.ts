import test from "ava";
import type { Rule } from "../eslint";
import { TSESLint } from "@typescript-eslint/utils";

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
  code: string,
  options: { count?: number; ruleOptions?: unknown[] } = {}
) {
  test(name, (t) => {
    const blankError = {};
    const errors = Array.from(new Array(options.count || 1)).map(
      () => blankError
    );
    ruleTester.run("dummy-name", rule as any, {
      valid: [],
      invalid: [
        { code, errors: errors as any, options: options.ruleOptions || [] },
      ],
    });
    t.pass();
  });
}

export function valid(
  name: string,
  rule: Rule,
  code: string,
  options: { ruleOptions?: unknown[] } = {}
) {
  test(name, (t) => {
    ruleTester.run("dummy-name", rule as any, {
      valid: [
        {
          code,
          options: options.ruleOptions || [],
        },
      ],
      invalid: [],
    });
    t.pass();
  });
}
