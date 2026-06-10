import { useState } from "react";

export default function CreateProject() {

  const [idea, setIdea] = useState("");

  const generateBlueprint = () => {
    console.log(idea);
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Create Project
      </h1>

      <textarea
        rows="8"
        className="border w-full p-4"
        placeholder="Describe your software idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-5 py-3 mt-5"
        onClick={generateBlueprint}
      >
        Generate Blueprint
      </button>

    </div>
  );
}