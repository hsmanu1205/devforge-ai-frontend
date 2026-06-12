import { Link } from "react-router-dom";

export default function ProjectCard({
  project,
  onDelete,
}) {
  return (
    <div
      className="
      bg-slate-900/70
      backdrop-blur-lg
      border
      border-slate-700
      rounded-2xl
      p-5
      shadow-lg
      hover:scale-[1.03]
      hover:-translate-y-1
      hover:shadow-cyan-500/20
      transition-all
      duration-300
      w-full
      "
    >
      <h2 className="text-xl font-bold">
        {project.title}
      </h2>

      <p className="text-slate-300 mt-2">
        {project.description}
      </p>

      <div className="flex gap-3 mt-5 flex-wrap">
        <Link
          to={`/project/${project.id}`}
          className="
          px-4
          py-2
          rounded-lg
          bg-cyan-600
          hover:bg-cyan-700
          transition
          "
        >
          View / Edit
        </Link>

        <button
          onClick={() => onDelete(project.id)}
          className="
          px-4
          py-2
          rounded-lg
          bg-red-600
          hover:bg-red-700
          transition
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}