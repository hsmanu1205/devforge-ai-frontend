import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-blue-950
      text-white
      flex
    "
    >
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="
        lg:hidden
        fixed
        top-4
        left-4
        z-50
        bg-cyan-500
        p-3
        rounded-xl
        shadow-lg
        "
      >
        <Menu size={22} />
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="
          fixed
          inset-0
          bg-black/70
          z-40
          lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static
        top-0 left-0
        h-screen
        w-72
        bg-black/40
        backdrop-blur-xl
        border-r border-cyan-500/20
        z-50
        transform
        transition-transform
        duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <Sidebar />
      </aside>

      {/* Main Content */}
      <main
        className="
        flex-1
        w-full
        lg:ml-0
        p-4
        md:p-6
        lg:p-10
        overflow-x-hidden
        "
      >
        {children}
      </main>
    </div>
  );
}