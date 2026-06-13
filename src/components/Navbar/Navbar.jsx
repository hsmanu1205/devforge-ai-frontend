import { Link } from "react-router-dom";
import {
  Sparkles,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="
      sticky top-0 z-50

      bg-slate-950/80
      backdrop-blur-xl

      border-b
      border-slate-800
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        py-4

        flex
        justify-between
        items-center
        "
      >
        <Link
          to="/"
          className="
          flex
          items-center
          gap-2
          "
        >
          <Sparkles
            className="text-cyan-400"
          />

          <span
            className="
            text-xl
            font-bold
            "
          >
            DevForge AI
          </span>
        </Link>

        <div
          className="
          flex
          gap-3
          "
        >
          <Link
            to="/login"
            className="
            flex
            items-center
            gap-2

            px-4
            py-2

            rounded-xl

            bg-slate-800
            hover:bg-slate-700
            "
          >
            <LogIn size={18} />
            Login
          </Link>

          <Link
            to="/register"
            className="
            flex
            items-center
            gap-2

            px-4
            py-2

            rounded-xl

            bg-cyan-500
            hover:bg-cyan-600

            text-black
            font-semibold
            "
          >
            <UserPlus size={18} />
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}