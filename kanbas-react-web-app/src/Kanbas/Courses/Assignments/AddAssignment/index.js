import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";

function AddAssignment() {
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const { courseId } = useParams();

  return (
    <div>
      <p>Assignment Name</p>
      <input
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, name: e.target.value, course: courseId }))
        }
        class="form-control"
        value={assignment.name}
      ></input>
      <br />
      <input class="form-control" value="Assignment Description"></input>
      <br />
      <p>Points</p>
      <input class="form-control"></input>
      <br />
      <p>Assign</p>
      <b>Due</b>
      <br />
      <input class="form-control"></input>
      <br />
      <b>Available From</b>
      <input class="form-control"></input>
      <br />
      <b>Available Until</b>
      <input class="form-control"></input>
      <br />
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="list-group-item"
      >
        <button class="btn btn-secondary">Cancel</button>
      </Link>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="list-group-item"
      >
        <button
          onClick={() =>
            dispatch(addAssignment({ ...assignment, course: courseId }))
          }
          class="btn btn-danger"
        >
          Save
        </button>
      </Link>
      {console.log(assignment)}
      {console.log(
        useSelector((state) => state.assignmentsReducer.assignments)
      )}
    </div>
  );
}

export default AddAssignment;
