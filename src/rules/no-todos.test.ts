import { invalid, valid } from "../tester";
import noTodos from "./no-todos";

valid("no todos here", noTodos, "// What happens when foo bars?");
invalid("todos are forbidden", noTodos, "// TODO correctly improve the thing");
invalid(
  "todos are forbidden multiline",
  noTodos,
  "/* TODO correctly improve the thing */"
);
