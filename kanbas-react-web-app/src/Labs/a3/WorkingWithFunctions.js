import ArrowFunction from "./ArrowFunction";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
function WorkingWithFunctions() {
    function add (a,b) {
        return a + b;
    }
    const twoPlus4 = add(2,4);
    console.log(twoPlus4);
    return (
        <div>
            <h2>Functions</h2>
            <h3>Legacy ES5 functions</h3>
            twoPlusFour = {twoPlus4}<br/>
            add(2,4) = {add(2,4)}<br/>
            <ArrowFunction/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
    );
}
export default WorkingWithFunctions