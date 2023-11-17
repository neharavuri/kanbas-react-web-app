import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import {
  AiFillCaretDown,
  AiOutlinePlus,
  AiFillCaretRight,
} from "react-icons/ai";
import { HiEllipsisVertical } from "react-icons/hi2";
import { TbGripVertical } from "react-icons/tb";
import ButtonBar from "./ButtonBar";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { updateModuleForCourse, deleteModuleforCourse, findModulesForCourse, createModule} from "./client";

function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    deleteModuleforCourse(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await updateModuleForCourse(module);
    dispatch(updateModule(module));
  };


  console.log(modules);
  return (
    <div>
      <ul className="list-group my-4">
        <li className="list-group-item">
          <input
            value={module.name}
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button
            onClick={handleAddModule}
            className="btn btn-success"
          >
            {" "}
            Add
          </button>
          <button
            onClick={() => handleUpdateModule(module)}
            className="mx-2 my-2 btn btn-success"
          >
            Update
          </button>
        </li>
        {modules
          .map((module, index) => (
            <li key={index} className="list-group-item modules my-3">
              <div>
                <TbGripVertical />
                <AiFillCaretRight
                  size="20px"
                  style={{ paddingRight: "10px" }}
                />
                {module.name}
                <HiEllipsisVertical className="float-end" />
                <AiOutlinePlus className="float-end" />
                <AiFillCaretDown className="float-end" />
                <FaCheckCircle className="float-end" color="green" />
                <button
                  className="mx-3 btn btn-danger float-end"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
                <button
                  className="float-end btn btn-success"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
