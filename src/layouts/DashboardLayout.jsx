export default function DashboardLayout({
  children,
}) {
  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      lg:flex-row
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-blue-950
      text-white
      "
    >
      {children}
    </div>
  );
}