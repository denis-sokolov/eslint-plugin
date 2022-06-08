import { customConfigs } from "../custom";

import { minimal } from "./minimal";
import { recommended } from "./recommended";
import { opinionated } from "./opinionated";

export const configs = {
  minimal,
  recommended,
  opinionated,
  ...customConfigs(),
};
