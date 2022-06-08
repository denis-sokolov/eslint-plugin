module.exports = {
  env: {
    node: true,
  },
  extends: ["plugin:@denis-sokolov/opinionated"],
  plugins: ["@denis-sokolov"],
  rules: {
    // Importing a lot of implementation details from eslint package
    "@denis-sokolov/no-imports-down": "off",

    // Our tests include string samples of code
    "no-template-curly-in-string": "off",
  },
};
