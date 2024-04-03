import { invalid, valid } from "../tester";
import rule from "./no-positional-boolean-parameters";

[
  "() => {}",
  "(options) => {}",
  "(param, options = {}) => {}",
  "({ disabled }) => {}",
  "(showFoo: {}) => {}",
].forEach((code, i) =>
  valid(`no positional booleans present in ${i}`, rule, code),
);

[
  "(showFoo) => {}",
  "(willFoo) => {}",
  "function foo(canFoo) {}",
  "(function foo(hasBar) {})",
  "(foo: boolean) => {}",
].forEach((code, i) =>
  invalid(`positional booleans present in ${i}`, rule, code),
);
