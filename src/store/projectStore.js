import { create } from "zustand";

import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

const useProjectStore = create((set) => ({
  projects: [],
  loading: false,

  fetchProjects: async () => {
    try {
      set({ loading: true });

      const response = await getAllProjects();

      set({
        projects: response.data || [],
        loading: false,
      });
    } catch (error) {
      console.error("Fetch Error:", error);

      set({
        loading: false,
      });
    }
  },

  createNewProject: async (project) => {
    try {
      await createProject(project);

      const response = await getAllProjects();

      set({
        projects: response.data || [],
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateExistingProject: async (
    id,
    project
  ) => {
    try {
      await updateProject(id, project);

      const response = await getAllProjects();

      set({
        projects: response.data || [],
      });
    } catch (error) {
      console.error(error);
    }
  },

  removeProject: async (id) => {
    try {
      await deleteProject(id);

      const response = await getAllProjects();

      set({
        projects: response.data || [],
      });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useProjectStore;