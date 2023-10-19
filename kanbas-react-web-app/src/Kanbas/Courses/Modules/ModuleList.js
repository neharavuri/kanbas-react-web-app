import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCaretDown, AiOutlinePlus, AiFillCaretRight } from "react-icons/ai";
import { HiEllipsisVertical } from "react-icons/hi2";
import {TbGripVertical} from "react-icons/tb"
import ButtonBar from "./ButtonBar";

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
                <TbGripVertical/>
                <AiFillCaretRight size="20px" style={{paddingRight: '10px'}}/>
                {module.name}
                <HiEllipsisVertical className= "float-end"/>
                <AiOutlinePlus className= "float-end"/>
                <AiFillCaretDown className= "float-end" />
                <FaCheckCircle className= "float-end" color="green" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
