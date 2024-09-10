import { invalid, valid } from "../tester";

import noDoubleNegativeVariables from "./no-double-negative-variables";

valid(
  "various similar spellings",
  noDoubleNegativeVariables,
  `
  let myFoo = false,
  a,
  foo,
  howFoo,
  sowQ,
  ideX;
  `,
);

invalid(
  "simple double negative",
  noDoubleNegativeVariables,
  "const noSuddenStuff = false;",
);

invalid(
  "some vars are double negatives",
  noDoubleNegativeVariables,
  `
  let hideFoo = false,
  a,
  foo,
  noShowFoo,
  showQ,
  hideX;
  `,
  { count: 3 },
);

invalid(
  "array destructuring double negatives",
  noDoubleNegativeVariables,
  `let [<err>hideBor</err>, <err>noBaz</err>, quux] = 0 as any`,
  {
    count: 2,
  },
);

invalid(
  "deep destructuring double negative",
  noDoubleNegativeVariables,
  `let { foo: [{ bar: <err>hideQQQ</err> }] } = 0 as any;`,
);

invalid(
  "function declaration param double negative",
  noDoubleNegativeVariables,
  `function foo1(noBar: boolean, hideQuux: boolean) {
    console.log(noBar, hideQuux);
  }`,
  { count: 2 },
);
invalid(
  "function expression param double negative",
  noDoubleNegativeVariables,
  `const foo2 = function foo2(noBar: boolean, hideQuux: boolean) {
    console.log(noBar, hideQuux);
  };`,
  { count: 2 },
);

invalid(
  "arrow function param double negative",
  noDoubleNegativeVariables,
  `const foo3 = (noBar: boolean, noQuux: boolean) => {
  console.log(noBar, noQuux);
  };`,
  { count: 2 },
);
