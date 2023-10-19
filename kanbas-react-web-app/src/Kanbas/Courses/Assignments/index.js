import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  AiFillCheckCircle,
  AiFillCaretDown,
  AiOutlinePlus,
} from "react-icons/ai";
import { HiEllipsisVertical } from "react-icons/hi2";
import { FaGripVertical, FaFile, FaPlus } from "react-icons/fa";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            type="search"
            class="w-60 form-control"
            placeholder="Search for Assignment"
          />
        </div>
        <div className="col">
          <button type="button" class="float-end my-1 btn grey-button">
            <HiEllipsisVertical />
          </button>
          <button type="button" class="float-end my-1 btn btn-danger">
            +Assignment
          </button>
          <button type="button" class="float-end my-1 btn grey-button">
            +Group
          </button>
        </div>
      </div>
      <hr/>
      <div className="list-group">
        <li class="list-group-item assignment-heading py-3">
          <FaGripVertical size={20} />
          <AiFillCaretDown />
          <b>ASSIGNMENTS</b>
          <HiEllipsisVertical size={25} className="float-end" />
          <AiOutlinePlus className="float-end" />
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item assignment-list"
          >
            <div className="row">
              <div className="col-1 px-2 py-3">
                <FaGripVertical size={20} />
                <FaFile className="text-success" size={20} />
              </div>
              <div className="col-10">
                <b>{assignment.title}</b>
                <p class="text-danger">Multiple Modules</p>
              </div>
              <div className="col py-3 px-2">
                <HiEllipsisVertical size={25} className="float-end" />
                <AiFillCheckCircle size={20} class="float-end text-success" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
