import { invalid, valid } from "../tester";
import rule from "./no-non-null-assertion";

["a.foo", "a(foo)?.bar"].forEach((code, i) =>
  valid(`no-non-null-assertion valid ${i}`, rule, code)
);

["a!.foo", "a(foo)!"].forEach((code, i) =>
  invalid(`no-non-null-assertion found in ${i}`, rule, code)
);
