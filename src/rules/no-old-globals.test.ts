import { invalid, valid } from "../tester";

import rule from "./no-old-globals";

["const name = 'john';", "console.log(error)"].forEach((code, i) =>
  valid(`no-non-null-assertion valid ${i}`, rule, code, {
    ruleOptions: ["name"],
  }),
);

["console.log(name)", "console.log(error)"].forEach((code, i) =>
  invalid(`no-non-null-assertion found in ${i}`, rule, code, {
    ruleOptions: ["name", "error"],
  }),
);
