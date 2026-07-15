import { configs } from "./configs";
export { filter, reword } from "./eslint";
import { plugin } from "./plugin-object";
import { rules } from "./rules";

// This mutation is needed so that the configs can reference the plugin
// before the plugin is fully defined. That’s the ESLint way, apparently.
// https://eslint.org/docs/v9.x/extend/plugins#configs-in-plugins
plugin.configs = configs;
plugin.rules = rules as any;

export default plugin;
