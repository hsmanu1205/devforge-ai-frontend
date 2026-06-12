import api from "./api";

export const getAllProjects = () => {
  return api.get("/api/projects");
};

export const getProjectById = (id) => {
  return api.get(`/api/projects/${id}`);
};

export const createProject = (project) => {
  return api.post("/api/projects", project);
};

export const updateProject = (id, project) => {
  return api.put(`/api/projects/${id}`, project);
};

export const deleteProject = (id) => {
  return api.delete(`/api/projects/${id}`);
};