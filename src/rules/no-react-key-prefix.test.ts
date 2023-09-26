import { invalid, valid } from "../tester";
import noReactKeyPrefix from "./no-react-key-prefix";

valid("allows react key i", noReactKeyPrefix, "<div key={i} />");
valid("allows react key id", noReactKeyPrefix, "<div key={'foo-' + id} />");
valid(
  "allows react key with index property",
  noReactKeyPrefix,
  "<div key={foo.index} />",
);
valid(
  "allows react key with properties on an i variable",
  noReactKeyPrefix,
  "<div key={i.id} />",
);
invalid(
  "don’t prefix react key concat",
  noReactKeyPrefix,
  "<div key={'foo-' + i} />",
);
invalid(
  "don’t prefix react key template literal",
  noReactKeyPrefix,
  "<div key={`foo-${n}`} />",
);
invalid(
  "don’t prefix react key conditional",
  noReactKeyPrefix,
  "<div key={foo ? bar : i} />",
);
invalid(
  "don’t prefix react key function call",
  noReactKeyPrefix,
  "<div key={f(index)} />",
);
invalid(
  "don’t prefix react key array join",
  noReactKeyPrefix,
  "<div key={[i, 'foo'].join()} />",
);
