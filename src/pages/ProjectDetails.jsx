import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/Sidebar/Sidebar";

import {
  getProjectById,
  updateProject,
} from "../services/projectService";

export default function ProjectDetails() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjectById(id);

        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updateProject(id, {
        title,
        description,
      });

      alert("Project updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Sidebar />
        <div className="flex-1 p-10">
          <h1>Loading project...</h1>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Edit Project
        </h1>

        <div
          className="
          bg-slate-900
          p-8
          rounded-2xl
          border border-slate-700
          shadow-xl
          "
        >
          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="
            w-full
            p-4
            mb-4
            rounded-xl
            bg-slate-800
            "
          />

          <textarea
            rows="6"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="
            w-full
            p-4
            mb-4
            rounded-xl
            bg-slate-800
            "
          />

          <button
            onClick={handleUpdate}
            className="
            px-6 py-3
            bg-green-600
            hover:bg-green-700
            rounded-xl
            "
          >
            Update Project
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}