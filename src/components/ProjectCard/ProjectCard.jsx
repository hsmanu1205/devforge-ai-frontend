import { Link } from "react-router-dom";

import useProjectStore from "../../store/projectStore";

import {
  Pencil,
  Trash2,
  FolderKanban,
} from "lucide-react";

export default function ProjectCard({
  project,
}) {

  const { removeProject } =
    useProjectStore();

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      `Delete "${project.title}" ?`
    );

    if (!confirmDelete) return;

    try {

      await removeProject(project.id);

    } catch (error) {

      console.error(error);

      alert(
        "Failed to delete project"
      );
    }
  };

  return (
    <div
      className="
      group
      bg-slate-900/70
      backdrop-blur-xl
      border
      border-slate-800
      rounded-2xl
      p-5

      hover:border-cyan-500/40
      hover:-translate-y-1

      transition-all
      duration-300
      "
    >

      {/* Header */}

      <div className="flex items-center gap-3 mb-4">

        <div
          className="
          p-3
          rounded-xl
          bg-cyan-500/10
          text-cyan-400
          "
        >
          <FolderKanban size={22} />
        </div>

        <h2
          className="
          text-xl
          font-semibold
          break-words
          "
        >
          {project.title}
        </h2>

      </div>

      {/* Description */}

      <p
        className="
        text-slate-400
        text-sm
        leading-6
        mb-6
        min-h-[80px]
        "
      >
        {project.description}
      </p>

      {/* Buttons */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        gap-3
        "
      >

        <Link
          to={`/project/${project.id}`}
          className="
          flex
          justify-center
          items-center
          gap-2

          bg-cyan-500
          hover:bg-cyan-600

          px-5
          py-3

          rounded-xl

          font-semibold

          transition
          "
        >
          <Pencil size={18} />

          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="
          flex
          justify-center
          items-center
          gap-2

          bg-red-500
          hover:bg-red-600

          px-5
          py-3

          rounded-xl

          font-semibold

          transition
          "
        >
          <Trash2 size={18} />

          Delete
        </button>

      </div>

    </div>
  );
}