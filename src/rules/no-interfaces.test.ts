import { invalid, valid } from "../tester";
import noInterfaces from "./no-interfaces";

valid("type keyword is allowed", noInterfaces, "type Foo = 'foo' | 'bar'");
invalid(
  "interface keyword is forbidden",
  noInterfaces,
  "interface Foo { bar: string }"
);
