import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group py-5">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item modules my-2">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
                <div key={index}>
                  <p>{lesson.name}</p>
                  <p>{lesson.description}</p>
                </div>
              ))}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;