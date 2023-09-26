import { invalid, valid } from "../tester";
import noInterfaces from "./no-interfaces";

valid("type keyword is allowed", noInterfaces, "type Foo = 'foo' | 'bar'");
invalid(
  "interface keyword is forbidden",
  noInterfaces,
  "interface Foo { bar: string }",
);
valid(
  "no-interfaces allows interface Window",
  noInterfaces,
  "interface Window { bar: string }",
);
valid(
  "no-interfaces allows inside declared modules",
  noInterfaces,
  "declare module 'foo' { interface Foo { bar: string } }",
);
