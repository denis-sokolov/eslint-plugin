declare module "eslint/use-at-your-own-risk" {
  const Rule: any;
  type BuiltinRules = {
    get: (name: string) => Rule;
  };
  export const builtinRules: BuiltinRules;
}

declare module "eslint-plugin-react-hooks" {
  const rules: Record<string, any>;
  export { rules };
}

declare module "@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules" {
  const rules: Record<string, any>;
  export default rules;
}
