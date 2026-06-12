import {
  Database,
  KeyRound,
  Type,
  FileText,
} from "lucide-react";

export default function DatabaseTable() {

  const tables = [
    {
      name: "projects",

      columns: [
        {
          name: "id",
          type: "BIGINT",
          primary: true,
        },

        {
          name: "title",
          type: "VARCHAR(255)",
          primary: false,
        },

        {
          name: "description",
          type: "TEXT",
          primary: false,
        },
      ],
    },

    {
      name: "users",

      columns: [
        {
          name: "id",
          type: "BIGINT",
          primary: true,
        },

        {
          name: "username",
          type: "VARCHAR(255)",
          primary: false,
        },

        {
          name: "email",
          type: "VARCHAR(255)",
          primary: false,
        },
      ],
    },
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

      {/* Header */}

      <div
        className="
        flex
        items-center
        gap-3

        mb-6
        "
      >
        <Database
          className="
          text-cyan-400
          "
          size={28}
        />

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Database Schema
        </h2>

      </div>

      {/* Tables */}

      <div className="space-y-5">

        {tables.map((table) => (

          <div
            key={table.name}
            className="
            bg-slate-800

            border
            border-slate-700

            rounded-2xl

            overflow-hidden
            "
          >

            {/* Table Header */}

            <div
              className="
              bg-slate-700/50

              px-4
              py-3

              border-b
              border-slate-700
              "
            >
              <h3
                className="
                text-cyan-400
                font-bold
                text-lg
                "
              >
                {table.name}
              </h3>
            </div>

            {/* Columns */}

            <div>

              {table.columns.map(
                (column) => (

                  <div
                    key={column.name}
                    className="
                    flex
                    justify-between
                    items-center

                    px-4
                    py-3

                    border-b
                    border-slate-700/50

                    last:border-b-0
                    "
                  >

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      {column.primary ? (

                        <KeyRound
                          size={16}
                          className="
                          text-yellow-400
                          "
                        />

                      ) : (

                        <FileText
                          size={16}
                          className="
                          text-slate-400
                          "
                        />

                      )}

                      <span>
                        {column.name}
                      </span>

                    </div>

                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      "
                    >

                      <Type
                        size={14}
                        className="
                        text-slate-400
                        "
                      />

                      <span
                        className="
                        text-xs

                        bg-slate-700

                        px-2
                        py-1

                        rounded-lg
                        "
                      >
                        {column.type}
                      </span>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}