export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-64 bg-black text-white min-h-screen">
        Sidebar
      </div>

      <div className="flex-1 p-5">
        {children}
      </div>
    </div>
  );
}