import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <button type="button" class="float-end my-1 btn grey-button">
        <HiEllipsisVertical />
      </button>
      <b className="py-2 mx-2 float-end text-success">Published</b>
      <FaCheckCircle className="my-2 float-end text-success" />
      <br />
      <hr />
      <p>Assignment Name</p>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <button
        onClick={handleSave}
        className="my-2 float-end btn btn-danger me-2"
      >
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="my-2 mx-2 float-end btn grey-button"
      >
        Cancel
      </Link>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default AssignmentEditor;
