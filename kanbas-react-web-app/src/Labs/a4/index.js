import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
function Assignment4() {
    function sayHello() {
        alert("Hello");
      }    
  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions  theFunction={sayHello}/>
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <DateStateVariable/>
      <StringStateVariables/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <ReduxExamples/>
    </div>
  );
}
export default Assignment4;