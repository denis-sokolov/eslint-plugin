import { invalid, valid } from "../tester";
import noEnums from "./no-enums";

valid("type union is not enum", noEnums, "type Foo = 'foo' | 'bar'");
invalid("enum is forbidden", noEnums, "enum Foo { Bar, Quux }");
