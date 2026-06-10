import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Sidebar />

      <div>
        <h1>Dashboard</h1>
      </div>
    </DashboardLayout>
  );
}