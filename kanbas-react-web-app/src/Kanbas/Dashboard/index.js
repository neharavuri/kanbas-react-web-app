import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState } from "react";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div class="p-4" style={{ width: "70rem" }}>
      <h1>Dashboard</h1>
      <br />
      <h5>Add New Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <br />
      <button className="btn btn-danger" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-danger mx-2" onClick={updateCourse}>
        Update
      </button>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="row">
        {courses.map((course, index) => (
          <div className="col-sm-4">
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
                <br />
                <button
                  className="my-2 btn btn-success"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  className="mx-2 btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
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
