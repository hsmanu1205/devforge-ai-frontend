import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FolderPlus,
  FileText,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import useProjectStore from "../store/projectStore";

export default function CreateProject() {
  const navigate = useNavigate();

  const { createNewProject } =
    useProjectStore();

  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const handleCreateProject =
    async () => {
      if (
        !title.trim() ||
        !description.trim()
      ) {
        alert(
          "Please fill all fields"
        );

        return;
      }

      try {
        setLoading(true);

        await createNewProject({
          title,
          description,
        });

        alert(
          "Project Created Successfully!"
        );

        navigate("/dashboard");
      } catch (error) {
        console.error(error);

        alert(
          "Failed to create project"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-blue-950
      text-white
      p-4
      md:p-8
      "
    >
      <div
        className="
        max-w-5xl
        mx-auto
        "
      >
        {/* Back Button */}

        <button
          onClick={() =>
            navigate("/dashboard")
          }
          className="
          flex
          items-center
          gap-2

          mb-8

          bg-slate-900/80
          backdrop-blur-xl

          border
          border-cyan-500/30

          hover:border-cyan-400

          px-5
          py-3

          rounded-xl

          transition-all
          duration-300

          hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]
          "
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Header */}

        <div className="mb-10">
          <div
            className="
            flex
            items-center
            gap-3
            mb-3
            "
          >
            <Sparkles
              className="
              text-cyan-400
              "
              size={32}
            />

            <h1
              className="
              text-4xl
              md:text-6xl
              font-black
              "
            >
              Create Project
            </h1>
          </div>

          <p
            className="
            text-slate-400
            text-lg
            "
          >
            Describe your software
            idea and create a new
            project.
          </p>
        </div>

        {/* Form Card */}

        <div
          className="
          bg-slate-900/70

          backdrop-blur-xl

          border
          border-cyan-500/20

          rounded-3xl

          p-6
          md:p-10

          shadow-[0_0_40px_rgba(6,182,212,0.08)]
          "
        >
          {/* Title */}

          <div className="mb-8">
            <label
              className="
              flex
              items-center
              gap-2

              text-slate-300
              mb-3

              font-medium
              "
            >
              <FolderPlus
                size={18}
              />

              Project Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              placeholder="Netflix Clone"
              className="
              w-full

              p-5

              rounded-2xl

              bg-slate-800

              border
              border-slate-700

              focus:border-cyan-400
              focus:outline-none

              transition-all
              "
            />
          </div>

          {/* Description */}

          <div className="mb-8">
            <label
              className="
              flex
              items-center
              gap-2

              text-slate-300
              mb-3

              font-medium
              "
            >
              <FileText
                size={18}
              />

              Project Description
            </label>

            <textarea
              rows="8"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              placeholder="Build a streaming platform using React, Spring Boot and MySQL with authentication and admin dashboard."
              className="
              w-full

              p-5

              rounded-2xl

              bg-slate-800

              border
              border-slate-700

              focus:border-cyan-400
              focus:outline-none

              resize-none

              transition-all
              "
            />
          </div>

          {/* Create Button */}

          <button
            onClick={
              handleCreateProject
            }
            disabled={loading}
            className="
            w-full

            bg-cyan-500
            hover:bg-cyan-600

            text-black

            font-bold

            py-5

            rounded-2xl

            transition-all
            duration-300

            hover:scale-[1.01]

            disabled:opacity-50
            "
          >
            {loading
              ? "Creating..."
              : "Create Project"}
          </button>
        </div>
      </div>
    </div>
  );
}