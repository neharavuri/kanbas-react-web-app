import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { HiEllipsisVertical } from "react-icons/hi2";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <ul className="list-group my-4">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item modules my-3">
              <div>
                {module.name}
                <HiEllipsisVertical className= "float-end"/>
                <AiOutlinePlus className= "float-end"/>

                <FaCheckCircle className= "float-end" color="green" />
                <AiFillCaretDown className= "float-end" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
