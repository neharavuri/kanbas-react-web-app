import Modules from "../Modules";
import ModuleList from "../Modules/ModuleList";
import rightButtonVertical from "./rightButtonVertical";
import {FaFile, FaFileImport, FaCloudUploadAlt, FaBullseye,
FaChartBar, FaHornbill, FaBell} from "react-icons/fa";
import "./index.css";

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col no-gutters">
          <Modules />
        </div>
        <div className="col-3 no-gutters">
          <button
            type="button"
            class="my-1 btn grey-button"
            style={{width:"110%"}}
          >
            <FaFileImport size = {30} className="react-button" />
            Import Existing Content
          </button>
          <button
            type="button"
            class="my-1 btn grey-button"
            style={{width:"110%"}}
          >
            <FaCloudUploadAlt size = {30} className="react-button"/>
            Import From Commons
          </button>
          <button
            type="button"
            class="my-1 btn grey-button"
            style={{width:"110%"}}
          >
            <FaBullseye size = {30} className="react-button"/>
            Choose Home Page
          </button>
          <button
            type="button"
            class="my-1 btn grey-button"
            style={{width:"110%"}}
          >
           <FaChartBar size = {30} className="react-button"/>View Course Stream
          </button>
          <button
            type="button"
            class="my-1 btn grey-button"
            style={{width:"110%"}}
          >
            <FaHornbill size = {30} className="react-button"/>
            New Announcement
          </button>
          <button
            type="button"
            class="my-1 btn grey-button"
            style={{width:"110%"}}
          >
            <FaChartBar size = {30} className="react-button"/>
            New Analytics
          </button>
          <button
            type="button"
            class="my-1 btn grey-button"
            style={{width:"110%"}}
          >
            <FaBell size = {30} className="react-button"/>
            View Course Notifications
          </button>
          <br />
          <br />
          <b>
            <p>To Do</p>
          </b>
          <hr />
          <p class="text-danger">
            <i class="pr-3 fa-solid fa-1"></i>Grade A1 + HTML <br />
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
