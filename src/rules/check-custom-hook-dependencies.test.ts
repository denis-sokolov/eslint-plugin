import { invalid, valid } from "../tester";
import rule from "./check-custom-hook-dependencies";

[
  "function F(){ useMyEffect(() => {}, []); }",
  "function F(props){ useMyEffect(() => { console.log(props.a); }, [props.a]); }",
  "function F(props){ useMyEffect(() => { console.log(props.a, b); }, [props.a]); }",
  // Do not trigger on original functions
  "function F(props){ useEffect(() => { console.log(props.a); }, []); }",
  "function F(props){ useEffect(() => {}, [props.a ? b : c]); }",
  "function F(props){ useCallback(() => { console.log(props.a); }, []); }",
  "function F(props){ useImperativeHandle(() => { console.log(props.a); }, []); }",
  "function F(props){ useLayoutEffect(() => { console.log(props.a); }, []); }",
  "function F(props){ useMemo(() => { console.log(props.a); }, []); }",
  // Do not trigger on async callback
  "function F(){ useMyEffect(async () => {}, []); }",
].forEach((code, i) =>
  valid(`check-custom-hook-dependencies valid ${i}`, rule, code, {
    ruleOptions: [{ additionalHooks: "^useMyEffect$" }],
  }),
);

[
  "function F(props){ useMyEffect(() => { console.log(props.a); }, []); }",
  "function F(props){ useMyEffect(() => { console.log(props.a); }, [props.a, props.a ? b : c]); }",
  "function F(){ const a = useState(); useMyEffect(() => { console.log(a); }, []); }",
].forEach((code, i) =>
  invalid(`check-custom-hook-dependencies invalid ${i}`, rule, code, {
    ruleOptions: [{ additionalHooks: "^useMyEffect$" }],
  }),
);
