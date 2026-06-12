import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: {
      label: "React Frontend",
    },
    style: {
      background: "#06b6d4",
      color: "#000",
      borderRadius: "12px",
      padding: "10px",
      fontWeight: "bold",
    },
  },

  {
    id: "2",
    position: { x: 250, y: 120 },
    data: {
      label: "Spring Boot API",
    },
    style: {
      background: "#22c55e",
      color: "#000",
      borderRadius: "12px",
      padding: "10px",
      fontWeight: "bold",
    },
  },

  {
    id: "3",
    position: { x: 250, y: 240 },
    data: {
      label: "Service Layer",
    },
    style: {
      background: "#a855f7",
      color: "#fff",
      borderRadius: "12px",
      padding: "10px",
      fontWeight: "bold",
    },
  },

  {
    id: "4",
    position: { x: 250, y: 360 },
    data: {
      label: "MySQL Database",
    },
    style: {
      background: "#f97316",
      color: "#fff",
      borderRadius: "12px",
      padding: "10px",
      fontWeight: "bold",
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
  },

  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
  },
];

export default function ArchitectureFlow() {
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
        Architecture Flow
      </h2>

      <div
        className="
        h-[500px]
        rounded-2xl
        overflow-hidden
        "
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}