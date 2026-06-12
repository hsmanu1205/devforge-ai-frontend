import { useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import useProjectStore from "../store/projectStore";

import {
  FolderKanban,
  Activity,
  Database,
} from "lucide-react";

export default function Dashboard() {

  const {
    projects,
    loading,
    fetchProjects,
  } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-8 mt-12 lg:mt-0">

          <h1
            className="
            text-3xl
            md:text-5xl
            font-bold
            text-white
            "
          >
            Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all your AI generated software projects.
          </p>

        </div>

        {/* Statistics Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mb-8
          "
        >

          {/* Total Projects */}

          <div
            className="
            bg-slate-900/80
            border
            border-slate-800
            rounded-2xl
            p-5
            hover:border-cyan-500/40
            transition-all
            "
          >
            <FolderKanban
              size={30}
              className="text-cyan-400 mb-3"
            />

            <p className="text-slate-400">
              Total Projects
            </p>

            <p className="text-3xl font-bold">
              {projects.length}
            </p>
          </div>

          {/* Active Blueprints */}

          <div
            className="
            bg-slate-900/80
            border
            border-slate-800
            rounded-2xl
            p-5
            hover:border-emerald-500/40
            transition-all
            "
          >
            <Activity
              size={30}
              className="text-emerald-400 mb-3"
            />

            <p className="text-slate-400">
              Active Blueprints
            </p>

            <p className="text-3xl font-bold">
              {projects.length}
            </p>
          </div>

          {/* Database Records */}

          <div
            className="
            bg-slate-900/80
            border
            border-slate-800
            rounded-2xl
            p-5
            hover:border-purple-500/40
            transition-all
            "
          >
            <Database
              size={30}
              className="text-purple-400 mb-3"
            />

            <p className="text-slate-400">
              Database Records
            </p>

            <p className="text-3xl font-bold">
              {projects.length}
            </p>
          </div>

        </div>

        {/* Projects Header */}

        <div className="mb-5">
          <h2 className="text-2xl font-bold">
            Projects
          </h2>
        </div>

        {/* Loading */}

        {loading ? (
          <div
            className="
            bg-slate-900
            rounded-2xl
            p-8
            text-center
            "
          >
            Loading Projects...
          </div>
        ) : projects.length === 0 ? (

          /* Empty State */

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-8
            text-center
            "
          >
            <h3 className="text-xl font-semibold">
              No Projects Found
            </h3>

            <p className="text-slate-400 mt-2">
              Create your first AI project.
            </p>
          </div>

        ) : (

          /* Projects Grid */

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-3
            gap-6
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        )}

      </div>
    </DashboardLayout>
  );
}