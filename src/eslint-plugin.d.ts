declare module "eslint/lib/rules/max-lines" {
  const Rule: any;
  export default Rule;
}

declare module "eslint-plugin-react-hooks" {
  const rules: Record<string, any>;
  export { rules };
}

declare module "@typescript-eslint/eslint-plugin/dist/rules/no-non-null-assertion" {
  const Rule: any;
  export default Rule;
}

declare module "@typescript-eslint/eslint-plugin/utils/dist/ts-eslint/" {
  const RuleTester: any;
  export { RuleTester };
}
