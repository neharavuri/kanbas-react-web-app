import Labs from "./Labs";
import Project from "./Project";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Project/*" element={<Project/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
