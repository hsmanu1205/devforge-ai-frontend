import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-5">
        DevForge AI
      </h2>

      <div className="flex flex-col gap-3">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-project">New Project</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}