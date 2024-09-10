import { invalid, valid } from "../tester";

import noImportsDown from "./no-imports-down";

valid(
  "no-imports-down can import at current level",
  noImportsDown,
  "import {} from './getFoo'",
);

invalid(
  "no-imports-down can not import at lower level",
  noImportsDown,
  "import {} from './getFoo/bar'",
);

invalid(
  "no-imports-down errors only on the path",
  noImportsDown,
  "import {} from <err>'./getFoo/bar'</err>",
);

valid(
  "no-imports-down can import from packages at one level",
  noImportsDown,
  "import {} from 'foo/bar'",
);

invalid(
  "no-imports-down can not import from packages at deeper levels",
  noImportsDown,
  "import {} from 'foo/bar/quux'",
);

valid(
  "no-imports-down can import from organization packages at one level",
  noImportsDown,
  "import {} from '@org/foo/bar'",
);

invalid(
  "no-imports-down can not import from organization packages at deeper levels",
  noImportsDown,
  "import {} from '@org/foo/bar/quux'",
);

invalid(
  "no-imports-up can not import up and then down",
  noImportsDown,
  "import {} from '../getFoo/bar'",
);

valid(
  "no-imports-down respects ignoreRegexes",
  noImportsDown,
  "import {} from './foo/bar'",
  { ruleOptions: [{ ignoreRegexes: ["^"] }] },
);

invalid(
  "no-imports-down does not apply ignoreRegexes too broadly",
  noImportsDown,
  "import {} from './foo/bar'",
  { ruleOptions: [{ ignoreRegexes: ["^xxx"] }] },
);

invalid(
  "no-imports-down applies to named export from",
  noImportsDown,
  "export {} from './foo/bar'",
);

invalid(
  "no-imports-down applies to star export from",
  noImportsDown,
  "export * from './foo/bar'",
);

valid(
  "no-imports-down does not apply to exports without a path",
  noImportsDown,
  "export {}",
);
