import { invalid, valid } from "../tester";
import rule from "./no-positional-boolean-parameters";

[
  "() => {}",
  "(options) => {}",
  "(param, options = {}) => {}",
  "({ disabled }) => {}",
].forEach((code, i) =>
  valid(`no positional booleans present in ${i}`, rule, code)
);

[
  "(showFoo) => {}",
  "(willFoo) => {}",
  "function foo(canFoo) {}",
  "(function foo(hasBar) {})",
].forEach((code, i) =>
  invalid(`positional booleans present in ${i}`, rule, code)
);
