import axios from "axios";
const API_BASE = "http://localhost:4000";
const COURSES_URL = `${API_BASE}/api/courses`;
const MODULES_URL = `${API_BASE}/api/modules`;
export const deleteModuleforCourse = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
export const findModulesForCourse = async (courseId) => {
  console.log(courseId);
  console.log("HELO");
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  console.log(response);
  console.log("RESP");
  return response.data;
};
export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  console.log(response.data);
  return response.data;
};

export const updateModuleForCourse = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};
