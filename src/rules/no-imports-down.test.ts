import { invalid, valid } from "../tester";
import noImportsDown from "./no-imports-down";

valid(
  "no-imports-down can import at current level",
  noImportsDown,
  "import {} from './getFoo'"
);

invalid(
  "no-imports-down can not import at lower level",
  noImportsDown,
  "import {} from './getFoo/bar'"
);

valid(
  "no-imports-down can import from packages at one level",
  noImportsDown,
  "import {} from 'foo/bar'"
);

invalid(
  "no-imports-down can not import from packages at deeper levels",
  noImportsDown,
  "import {} from 'foo/bar/quux'"
);

valid(
  "no-imports-down can import from organization packages at one level",
  noImportsDown,
  "import {} from '@org/foo/bar'"
);

invalid(
  "no-imports-down can not import from organization packages at deeper levels",
  noImportsDown,
  "import {} from '@org/foo/bar/quux'"
);

invalid(
  "no-imports-up can not import up and then down",
  noImportsDown,
  "import {} from '../getFoo/bar'"
);
