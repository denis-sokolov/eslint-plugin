module.exports = {
  env: {
    node: true,
  },
  extends: ["plugin:@theorem/opinionated"],
  plugins: ["@theorem"],
  rules: {
    // Importing a lot of implementation details from eslint package
    "@theorem/no-imports-down": "off",

    // Our tests include string samples of code
    "no-template-curly-in-string": "off",
  },
};
