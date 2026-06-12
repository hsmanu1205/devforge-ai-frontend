export default function ApiList() {
  const apis = [
    "GET /api/projects",
    "GET /api/projects/{id}",
    "POST /api/projects",
    "PUT /api/projects/{id}",
    "DELETE /api/projects/{id}",
  ];

  return (
    <div
      className="
      bg-slate-900/80
      border
      border-slate-800
      rounded-3xl
      p-6
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        API Endpoints
      </h2>

      <div className="space-y-3">
        {apis.map((api) => (
          <div
            key={api}
            className="
            bg-slate-800
            rounded-xl
            p-3
            "
          >
            {api}
          </div>
        ))}
      </div>
    </div>
  );
}