import db from "../Database";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div class="p-4" style={{ width: "60rem" }}>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="row">
        {courses.map((course, index) => (
          <div className="col-sm">
            <div class="card">
              <img src="/blue.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
