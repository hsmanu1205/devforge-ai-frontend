import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/Sidebar/Sidebar";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import {
  getAllProjects,
  deleteProject,
} from "../services/projectService";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects();
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);

      setProjects((prevProjects) =>
        prevProjects.filter(
          (project) => project.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <Sidebar />

      <div className="flex-1 p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}