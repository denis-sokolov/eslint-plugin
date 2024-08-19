import { invalid, valid } from "../tester";

import rule from "./exhaustive-deps-async";

[
  "function F(){ useMyEffect(() => {}, []); }",
  "function F(props){ useMyEffect(() => { console.log(props.a); }, [props.a]); }",
  "function F(props){ useMyEffect(() => { console.log(props.a, b); }, [props.a]); }",

  // Do not trigger on async callback
  "function F(){ useMyEffect(async () => {}, []); }",
].forEach((code, i) =>
  valid(`exhaustive-deps-async valid ${i}`, rule, code, {
    ruleOptions: [{ additionalHooks: "^useMyEffect$" }],
  }),
);

[
  "function F(props){ useMyEffect(() => { console.log(props.a); }, []); }",
  "function F(props){ useMyEffect(() => { console.log(props.a); }, [props.a, props.a ? b : c]); }",
  "function F(){ const a = useState(); useMyEffect(() => { console.log(a); }, []); }",
  "function F(props){ useMyEffect(async () => { console.log(props.a); }, []); }",

  // Trigger on original functions
  "function F(props){ useEffect(() => { console.log(props.a); }, []); }",
  "function F(props){ useEffect(() => {}, [props.a ? b : c]); }",
  "function F(props){ useCallback(() => { console.log(props.a); }, []); }",
  "function F(props){ useImperativeHandle(ref, () => { console.log(props.a); }, []); }",
  "function F(props){ useLayoutEffect(() => { console.log(props.a); }, []); }",
  "function F(props){ useMemo(() => { console.log(props.a); }, []); }",
  "function F(props){ useEffect(async () => {}, []); }",
  "function F(props){ useLayoutEffect(async () => {}, []); }",
].forEach((code, i) =>
  invalid(`exhaustive-deps-async invalid ${i}`, rule, code, {
    ruleOptions: [{ additionalHooks: "^useMyEffect$" }],
  }),
);
