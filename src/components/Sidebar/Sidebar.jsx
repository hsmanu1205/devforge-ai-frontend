import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  PlusCircle,
  Settings,
  Sparkles,
  User,
} from "lucide-react";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `
    flex
    items-center
    gap-3

    p-4

    rounded-xl

    transition-all
    duration-300

    ${
      isActive
        ? "bg-cyan-500 text-black font-semibold shadow-lg"
        : "hover:bg-cyan-500/10 text-slate-300"
    }
  `;

  return (
    <div
      className="
      h-screen

      bg-black/40
      backdrop-blur-xl

      border-r
      border-cyan-500/20

      p-6

      flex
      flex-col
      justify-between
      "
    >

      {/* Top Section */}

      <div>

        {/* Logo */}

        <div
          className="
          flex
          items-center
          gap-3

          mb-12
          "
        >
          <Sparkles
            className="text-cyan-400"
            size={30}
          />

          <h1
            className="
            text-2xl
            md:text-3xl

            font-bold

            text-cyan-400
            "
          >
            DevForge AI
          </h1>
        </div>

        {/* Navigation */}

        <nav
          className="
          flex
          flex-col
          gap-3
          "
        >

          <NavLink
            to="/dashboard"
            className={linkClass}
          >
            <LayoutDashboard size={20} />

            Dashboard
          </NavLink>

          <NavLink
            to="/create-project"
            className={linkClass}
          >
            <PlusCircle size={20} />

            New Project
          </NavLink>

          <NavLink
            to="/settings"
            className={linkClass}
          >
            <Settings size={20} />

            Settings
          </NavLink>

        </nav>

      </div>

      {/* Bottom User Card */}

      <div
        className="
        bg-slate-900/80

        border
        border-slate-800

        rounded-2xl

        p-4
        "
      >

        <div
          className="
          flex
          items-center
          gap-3
          "
        >

          <div
            className="
            h-12
            w-12

            rounded-full

            bg-cyan-500

            flex
            items-center
            justify-center
            "
          >
            <User
              size={22}
              className="text-black"
            />
          </div>

          <div>

            <h3
              className="
              font-semibold
              "
            >
              Harshit Singh
            </h3>

            <p
              className="
              text-sm
              text-slate-400
              "
            >
              Developer
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}