import { invalid, valid } from "../tester";
import noSingleLetterGenericTypes from "./no-single-letter-generic-types";

invalid("type definition", noSingleLetterGenericTypes, "type Foo<T> = {}");

invalid(
  "function definition",
  noSingleLetterGenericTypes,
  "function foo<T>() {}",
);

invalid(
  "arrow function definition",
  noSingleLetterGenericTypes,
  "const foo = <T,>() => {}",
);

invalid(
  "function definition with extends",
  noSingleLetterGenericTypes,
  "function foo<T extends unknown>() {}",
);

valid(
  "allows uses of existing types in generics",
  noSingleLetterGenericTypes,
  "const a = new Promise<T>(() => {})",
);
