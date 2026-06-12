import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FolderPlus,
  FileText,
  Sparkles,
} from "lucide-react";

import useProjectStore from "../store/projectStore";

export default function CreateProject() {

  const navigate = useNavigate();

  const {
    createNewProject,
  } = useProjectStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleCreateProject = async () => {

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
      bg-slate-950
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

        {/* Header */}

        <div className="mb-8">

          <div
            className="
            flex
            items-center
            gap-3
            mb-3
            "
          >
            <Sparkles
              className="text-cyan-400"
              size={30}
            />

            <h1
              className="
              text-3xl
              md:text-5xl
              font-bold
              "
            >
              Create Project
            </h1>

          </div>

          <p className="text-slate-400">
            Describe your software idea
            and create a new project.
          </p>

        </div>

        {/* Form Card */}

        <div
          className="
          bg-slate-900/80
          backdrop-blur-xl

          border
          border-slate-800

          rounded-3xl

          p-6
          md:p-8

          shadow-xl
          "
        >

          {/* Title */}

          <div className="mb-6">

            <label
              className="
              flex
              items-center
              gap-2

              text-slate-300
              mb-2
              "
            >
              <FolderPlus size={18} />

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

              placeholder="
              Netflix Clone
              "

              className="
              w-full

              p-4

              rounded-xl

              bg-slate-800

              border
              border-slate-700

              focus:border-cyan-400
              focus:outline-none

              transition
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
              mb-2
              "
            >
              <FileText size={18} />

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

              placeholder="
Build a streaming platform using React, Spring Boot and MySQL with authentication and admin dashboard.
              "

              className="
              w-full

              p-4

              rounded-xl

              bg-slate-800

              border
              border-slate-700

              focus:border-cyan-400
              focus:outline-none

              resize-none

              transition
              "
            />

          </div>

          {/* Button */}

          <button
            onClick={
              handleCreateProject
            }

            disabled={loading}

            className="
            w-full
            md:w-auto

            px-8
            py-4

            rounded-xl

            bg-cyan-500
            hover:bg-cyan-600

            text-black
            font-semibold

            transition-all
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