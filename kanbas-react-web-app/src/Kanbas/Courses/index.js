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
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import AddAssignment from "./Assignments/AddAssignment";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/api/courses`;
  const location = window.location.href.split("/");
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    console.log(response);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

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
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Assignments/new" element={<AddAssignment />} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
