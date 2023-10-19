import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Modules from "./Modules";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import "./index.css";

function Courses() {
  const location = window.location.href.split("/");
  console.log(window);
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div class="container">
      <div className="row ">
        <nav class="bcrumb" aria-label="breadcrumb">
          <ol class="breadcrumb p-4">
            <li class="breadcrumb-item">
              <FaGripLines color="red" />
              <a href="#" class="ps-4 text-danger">
                {course.name}
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {location.pop()}
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <div className="row">
        <div className="float-left col-2">
          <CourseNavigation />
        </div>
        <div className="col-sm-10">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Edit</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
