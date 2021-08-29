import { readdirSync } from "fs";
import { join } from "path";
import type { Rule } from "../eslint";

type CustomRule = { groupId: number; name: string; path: string };
type Group = {
  dirname: string;
  id: number;
  rules: CustomRule[];
};

const groupName = (group: Group) => `custom-${group.id}`;
const ruleName = ({ groupId, name }: CustomRule) => `custom-${name}-${groupId}`;

const groups: Group[] = [];

function loadCode(path: string) {
  let code;
  try {
    code = require(path);
  } catch (err) {
    console.error(
      `Could not load a custom rule. It needs to use pure Node.js JavaScript syntax, no traspilation.\n`
    );
    throw err;
  }
  if (typeof code !== "object" || !code.create) {
    throw new Error(
      `File ${path} does not seem to be a valid eslint rule. Make sure it contains a module.exports = { create: context => {} }`
    );
  }
  return code;
}

export function custom(dirname: string) {
  const existing = groups.find((g) => g.dirname === dirname);
  if (existing) return `plugin:@denis-sokolov/${groupName(existing)}`;

  const groupId = groups.length;

  const jsNames = readdirSync(dirname).filter((name) => name.endsWith(".js"));
  const rules = jsNames.map((jsName) => {
    return {
      groupId,
      name: jsName.replace(/\.js$/, ""),
      path: join(dirname, jsName),
    };
  });
  const group = {
    dirname,
    id: groupId,
    rules: rules,
  };
  groups.push(group);

  return `plugin:@denis-sokolov/${groupName(group)}`;
}

export function customConfigs() {
  const configs: {
    [group: string]: { rules: { [name: string]: "error" } };
  } = {};
  groups.forEach((group) => {
    const rules: { [name: string]: "error" } = {};
    group.rules.forEach((rule) => {
      rules[`@denis-sokolov/${ruleName(rule)}`] = "error";
    });
    configs[groupName(group)] = { rules };
  });
  return configs;
}

export function customRules() {
  const rules: { [name: string]: Rule } = {};
  groups.forEach((group) =>
    group.rules.forEach((rule) => {
      const ruleCode = loadCode(rule.path);
      rules[ruleName(rule)] = ruleCode;
    })
  );
  return rules;
}
