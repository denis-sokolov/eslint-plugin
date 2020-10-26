import { invalid, valid } from "../tester";
import noImportsUp from "./no-imports-up";

valid(
  "no-imports-up can import at current level",
  noImportsUp,
  "import {} from './getFoo'"
);

invalid(
  "no-imports-up can not import at one level up",
  noImportsUp,
  "import {} from '../getFoo'"
);
