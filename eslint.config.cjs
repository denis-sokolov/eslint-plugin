const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([{}, globalIgnores(["dist/"])]);
