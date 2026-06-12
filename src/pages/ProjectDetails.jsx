import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import useProjectStore from "../store/projectStore";

import { getProjectById } from "../services/projectService";

import ArchitectureFlow from "../components/ArchitectureFlow/ArchitectureFlow";
import DatabaseTable from "../components/DatabaseTable/DatabaseTable";
import ApiList from "../components/ApiList/ApiList";

import {
  Save,
  ArrowLeft,
  FolderKanban,
  FileText,
  Sparkles,
} from "lucide-react";

export default function ProjectDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    updateExistingProject,
  } = useProjectStore();

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [project, setProject] =
    useState({
      title: "",
      description: "",
    });

  useEffect(() => {

    let mounted = true;

    (async () => {

      try {

        const response =
          await getProjectById(id);

        if (mounted) {

          setProject({
            title:
              response.data.title || "",

            description:
              response.data.description || "",
          });

          setLoading(false);
        }

      } catch (error) {

        console.error(error);

        setLoading(false);

      }

    })();

    return () => {
      mounted = false;
    };

  }, [id]);

  const handleChange = (e) => {

    setProject({
      ...project,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleUpdate =
    async () => {

      if (
        !project.title.trim() ||
        !project.description.trim()
      ) {

        alert(
          "Please fill all fields"
        );

        return;
      }

      try {

        setSaving(true);

        await updateExistingProject(
          id,
          project
        );

        alert(
          "Project updated successfully!"
        );

        navigate("/dashboard");

      } catch (error) {

        console.error(error);

        alert(
          "Failed to update project"
        );

      } finally {

        setSaving(false);

      }
    };

  if (loading) {

    return (
      <DashboardLayout>

        <div
          className="
          flex
          justify-center
          items-center
          min-h-[80vh]
          "
        >
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Loading Project...
          </h2>
        </div>

      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div
        className="
        max-w-7xl
        mx-auto
        "
      >

        {/* Header */}

        <div
          className="
          flex
          flex-col
          md:flex-row

          md:items-center
          md:justify-between

          gap-4

          mb-8

          mt-12
          lg:mt-0
          "
        >

          <div>

            <div
              className="
              flex
              items-center
              gap-3
              mb-2
              "
            >
              <Sparkles
                size={28}
                className="
                text-cyan-400
                "
              />

              <h1
                className="
                text-3xl
                md:text-5xl

                font-bold
                "
              >
                Project Workspace
              </h1>

            </div>

            <p
              className="
              text-slate-400
              "
            >
              Manage architecture,
              APIs and database design.
            </p>

          </div>

          <button
            onClick={() =>
              navigate("/dashboard")
            }
            className="
            flex
            items-center
            gap-2

            bg-slate-800
            hover:bg-slate-700

            px-5
            py-3

            rounded-xl

            transition
            "
          >
            <ArrowLeft size={18} />

            Back
          </button>

        </div>

        {/* Edit Project Card */}

        <div
          className="
          bg-slate-900/80

          backdrop-blur-xl

          border
          border-slate-800

          rounded-3xl

          p-6
          md:p-8

          shadow-xl

          mb-8
          "
        >

          <div className="mb-6">

            <label
              className="
              flex
              items-center
              gap-2

              text-slate-300

              mb-2
              "
            >
              <FolderKanban
                size={18}
              />

              Project Title
            </label>

            <input
              type="text"

              name="title"

              value={
                project.title
              }

              onChange={
                handleChange
              }

              className="
              w-full

              p-4

              rounded-xl

              bg-slate-800

              border
              border-slate-700

              focus:border-cyan-400
              focus:outline-none
              "
            />

          </div>

          <div className="mb-8">

            <label
              className="
              flex
              items-center
              gap-2

              text-slate-300

              mb-2
              "
            >
              <FileText
                size={18}
              />

              Project Description
            </label>

            <textarea
              rows="8"

              name="description"

              value={
                project.description
              }

              onChange={
                handleChange
              }

              className="
              w-full

              p-4

              rounded-xl

              bg-slate-800

              border
              border-slate-700

              focus:border-cyan-400
              focus:outline-none

              resize-none
              "
            />

          </div>

          <button
            onClick={
              handleUpdate
            }

            disabled={saving}

            className="
            flex
            items-center
            gap-2

            bg-cyan-500
            hover:bg-cyan-600

            px-6
            py-4

            rounded-xl

            font-semibold

            text-black
            "
          >
            <Save size={18} />

            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>

        </div>

        {/* Architecture + Database */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          "
        >

          <ArchitectureFlow />

          <DatabaseTable />

        </div>

        {/* APIs */}

        <div className="mt-6">

          <ApiList />

        </div>

      </div>

    </DashboardLayout>
  );
}