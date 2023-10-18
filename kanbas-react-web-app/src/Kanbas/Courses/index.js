import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Modules from "./Modules";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <nav class="bcrumb" aria-label="breadcrumb">
        <ol class="breadcrumb p-4">
          <li class="breadcrumb-item">
            <FaGripLines color="red" />
            <a href="#" class="ps-4 text-danger">
              {course.name}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
      <CourseNavigation />
      <div
        className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{
          left: "320px",
          top: "50px",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<h1>Home</h1>} />
          <Route path="Modules" element={<Modules/>} />
          <Route path="Assignments" element={<h1>Assignments</h1>} />
          <Route
            path="Assignments/:assignmentId"
            element={<h1>Assignment Edit</h1>}
          />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Courses;
