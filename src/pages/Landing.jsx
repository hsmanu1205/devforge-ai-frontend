import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import {
  Sparkles,
  Database,
  Network,
  Code2,
  ArrowRight,
} from "lucide-react";

export default function Landing() {
  return (
    <div
      className="
      min-h-screen

      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-blue-950

      text-white
      "
    >

      <Navbar />

      {/* Hero Section */}

      <section
        className="
        max-w-7xl
        mx-auto

        px-6
        py-20

        text-center
        "
      >

        <div
          className="
          inline-flex
          items-center
          gap-2

          px-4
          py-2

          rounded-full

          bg-cyan-500/10

          border
          border-cyan-500/20

          mb-8
          "
        >
          <Sparkles
            size={18}
            className="text-cyan-400"
          />

          <span className="text-cyan-300">
            AI Powered Software Architect
          </span>

        </div>

        <h1
          className="
          text-5xl
          md:text-7xl

          font-black

          leading-tight
          "
        >
          Build Software
          <br />

          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            to-blue-500

            bg-clip-text
            text-transparent
            "
          >
            With AI
          </span>

        </h1>

        <p
          className="
          max-w-3xl
          mx-auto

          mt-8

          text-lg
          md:text-xl

          text-slate-400
          "
        >
          Generate complete software
          architectures, database schemas,
          API endpoints and development
          blueprints using AI.
        </p>

        {/* Buttons */}

        <div
          className="
          flex
          flex-col
          sm:flex-row

          justify-center

          gap-4

          mt-10
          "
        >

          <Link
            to="/register"
            className="
            bg-cyan-500

            hover:bg-cyan-600

            px-8
            py-4

            rounded-xl

            font-semibold

            text-black

            flex
            items-center
            justify-center
            gap-2
            "
          >
            Get Started

            <ArrowRight size={18} />
          </Link>

          <Link
            to="/dashboard"
            className="
            bg-slate-800

            hover:bg-slate-700

            px-8
            py-4

            rounded-xl

            font-semibold
            "
          >
            View Dashboard
          </Link>

        </div>

      </section>

      {/* Features */}

      <section
        className="
        max-w-7xl
        mx-auto

        px-6
        pb-20
        "
      >

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3

          gap-6
          "
        >

          {/* Feature 1 */}

          <div
            className="
            bg-slate-900/80

            border
            border-slate-800

            rounded-3xl

            p-6
            "
          >
            <Network
              size={36}
              className="text-cyan-400 mb-4"
            />

            <h3
              className="
              text-xl
              font-bold
              mb-2
              "
            >
              Architecture Flow
            </h3>

            <p className="text-slate-400">
              Visualize complete software
              architecture automatically.
            </p>

          </div>

          {/* Feature 2 */}

          <div
            className="
            bg-slate-900/80

            border
            border-slate-800

            rounded-3xl

            p-6
            "
          >
            <Database
              size={36}
              className="text-cyan-400 mb-4"
            />

            <h3
              className="
              text-xl
              font-bold
              mb-2
              "
            >
              Database Schema
            </h3>

            <p className="text-slate-400">
              Generate tables,
              relationships and data models.
            </p>

          </div>

          {/* Feature 3 */}

          <div
            className="
            bg-slate-900/80

            border
            border-slate-800

            rounded-3xl

            p-6
            "
          >
            <Code2
              size={36}
              className="text-cyan-400 mb-4"
            />

            <h3
              className="
              text-xl
              font-bold
              mb-2
              "
            >
              API Explorer
            </h3>

            <p className="text-slate-400">
              Generate backend APIs and
              development blueprints instantly.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}