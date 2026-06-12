import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="
      w-full
      lg:w-72
      bg-slate-950
      border-b
      lg:border-b-0
      lg:border-r
      border-slate-800
      p-6
      "
    >
      <h2
        className="
        text-3xl
        font-bold
        mb-6
        text-cyan-400
        "
      >
        DevForge AI
      </h2>

      <div
        className="
        flex
        flex-row
        lg:flex-col
        gap-4
        overflow-x-auto
        "
      >
        <Link
          to="/dashboard"
          className="
          px-4
          py-2
          rounded-lg
          hover:bg-slate-800
          transition
          "
        >
          Dashboard
        </Link>

        <Link
          to="/create-project"
          className="
          px-4
          py-2
          rounded-lg
          hover:bg-slate-800
          transition
          "
        >
          New Project
        </Link>

        <Link
          to="/settings"
          className="
          px-4
          py-2
          rounded-lg
          hover:bg-slate-800
          transition
          "
        >
          Settings
        </Link>
      </div>
    </div>
  );
}