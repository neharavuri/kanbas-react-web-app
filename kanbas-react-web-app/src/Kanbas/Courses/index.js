import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <nav class="bcrumb" aria-label="breadcrumb">
        <ol class="breadcrumb p-4">
          <li class="breadcrumb-item">
            <FaGripLines color="red"/>
            <a href="#" class="ps-4 text-danger">
              {course.name}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default Courses;
