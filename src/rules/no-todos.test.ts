import { invalid, valid } from "../tester";

import noTodos from "./no-todos";

invalid("todos are forbidden", noTodos, "// TODO correctly improve the thing");
invalid(
  "todos are forbidden multiline",
  noTodos,
  "/* TODO correctly improve the thing */",
);
invalid("mixed case fixme", noTodos, "// Fixme: correctly improve the thing");
invalid("lowercase todo", noTodos, "// todo: correctly improve the thing");
invalid("lowercase fixme", noTodos, "// fixme correctly improve the thing");
invalid("lowercase xxx", noTodos, "// xxx correctly improve the thing");

valid("no todos here", noTodos, "// What happens when foo bars?");
valid("tickets are allowed", noTodos, "// BUG-123, TODO-456");
valid("lowercase fix in a word", noTodos, "// A fix for this is coming in");
valid("lowercase todo in a word", noTodos, "// This is on our todo list:");
