import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  ArrowLeft,
  LogIn,
  Mail,
  Lock,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    navigate("/dashboard");
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

      flex
      items-center
      justify-center

      p-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        "
      >
        <button
          onClick={() => navigate("/")}
          className="
          flex
          items-center
          gap-2

          mb-6

          bg-slate-900/80

          border
          border-cyan-500/20

          px-4
          py-3

          rounded-xl
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div
          className="
          bg-slate-900/70

          backdrop-blur-xl

          border
          border-cyan-500/20

          rounded-3xl

          p-8
          "
        >
          <div className="mb-8">

            <div
              className="
              flex
              items-center
              gap-3
              mb-3
              "
            >
              <LogIn
                size={30}
                className="
                text-cyan-400
                "
              />

              <h1
                className="
                text-4xl
                font-bold
                "
              >
                Login
              </h1>

            </div>

            <p className="text-slate-400">
              Welcome back to DevForge AI
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            <div>

              <label className="block mb-2">
                Email
              </label>

              <div
                className="
                flex
                items-center
                gap-3

                bg-slate-800

                rounded-xl

                px-4
                "
              >
                <Mail size={18} />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  placeholder="john@email.com"
                  className="
                  w-full

                  p-4

                  bg-transparent

                  outline-none
                  "
                />
              </div>

            </div>

            <div>

              <label className="block mb-2">
                Password
              </label>

              <div
                className="
                flex
                items-center
                gap-3

                bg-slate-800

                rounded-xl

                px-4
                "
              >
                <Lock size={18} />

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="********"
                  className="
                  w-full

                  p-4

                  bg-transparent

                  outline-none
                  "
                />
              </div>

            </div>

            <button
              type="submit"
              className="
              w-full

              bg-cyan-500
              hover:bg-cyan-600

              text-black

              font-bold

              py-4

              rounded-xl
              "
            >
              Login
            </button>

          </form>

          <p
            className="
            text-center

            mt-6

            text-slate-400
            "
          >
            Don't have an account?{" "}

            <Link
              to="/register"
              className="
              text-cyan-400
              "
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}