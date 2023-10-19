import ButtonBar from "./ButtonBar";
import ModuleList from "./ModuleList";
import "../Modules/index.css";
function Modules() {
  return (
    <div class="moduleContainer">
      <ButtonBar/>
      <hr/>
      <ModuleList />
    </div>
  );
}
export default Modules;