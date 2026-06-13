import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  User,
  Bell,
  Moon,
  Shield,
  Save,
  Settings as SettingsIcon,
} from "lucide-react";

export default function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] =
    useState(true);

  const [darkMode, setDarkMode] =
    useState(true);

  const [name, setName] =
    useState("Harshit Singh");

  const [email, setEmail] =
    useState("harshit@email.com");

  const handleSave = () => {
    alert(
      "Settings saved successfully!"
    );
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

          border
          border-cyan-500/20

          px-5
          py-3

          rounded-xl

          hover:border-cyan-400

          transition
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
            <SettingsIcon
              className="text-cyan-400"
              size={30}
            />

            <h1
              className="
              text-4xl
              md:text-5xl
              font-bold
              "
            >
              Settings
            </h1>

          </div>

          <p className="text-slate-400">
            Manage your profile and
            preferences.
          </p>

        </div>

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          "
        >
          {/* Profile Card */}

          <div
            className="
            bg-slate-900/70

            backdrop-blur-xl

            border
            border-cyan-500/20

            rounded-3xl

            p-6
            "
          >
            <div
              className="
              flex
              items-center
              gap-3
              mb-6
              "
            >
              <User
                className="
                text-cyan-400
                "
              />

              <h2
                className="
                text-2xl
                font-bold
                "
              >
                Profile
              </h2>
            </div>

            <div className="space-y-4">

              <div>
                <label className="block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="
                  w-full

                  p-4

                  rounded-xl

                  bg-slate-800

                  border
                  border-slate-700

                  outline-none
                  "
                />
              </div>

              <div>
                <label className="block mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="
                  w-full

                  p-4

                  rounded-xl

                  bg-slate-800

                  border
                  border-slate-700

                  outline-none
                  "
                />
              </div>

            </div>
          </div>

          {/* Preferences Card */}

          <div
            className="
            bg-slate-900/70

            backdrop-blur-xl

            border
            border-cyan-500/20

            rounded-3xl

            p-6
            "
          >
            <div
              className="
              flex
              items-center
              gap-3
              mb-6
              "
            >
              <Shield
                className="
                text-cyan-400
                "
              />

              <h2
                className="
                text-2xl
                font-bold
                "
              >
                Preferences
              </h2>
            </div>

            <div className="space-y-6">

              <div
                className="
                flex
                justify-between
                items-center
                "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >
                  <Bell size={18} />

                  Notifications
                </div>

                <input
                  type="checkbox"
                  checked={
                    notifications
                  }
                  onChange={() =>
                    setNotifications(
                      !notifications
                    )
                  }
                />
              </div>

              <div
                className="
                flex
                justify-between
                items-center
                "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >
                  <Moon size={18} />

                  Dark Mode
                </div>

                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() =>
                    setDarkMode(
                      !darkMode
                    )
                  }
                />
              </div>

            </div>
          </div>

        </div>

        {/* Save Button */}

        <div className="mt-8">

          <button
            onClick={handleSave}
            className="
            flex
            items-center
            gap-2

            bg-cyan-500
            hover:bg-cyan-600

            text-black

            font-bold

            px-8
            py-4

            rounded-xl
            "
          >
            <Save size={18} />

            Save Settings
          </button>

        </div>

      </div>
    </div>
  );
}