import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/my-events",
    name: "My Events",
  },
  {
    path: "/create",
    name: "Create",
  },
];

function Navbar() {
  const user = useSelector((state) => state.auth.user);

  const [sampleString] = useState(user.firstName);

  const navigate = useNavigate();

  const options = [
    {
      text: "Admin",
      onClick: () => {
        navigate("/admin/users");
      },
    },

    {
      text: "Profile",
      onClick: () => {
        navigate(`/profile/${user._id}`);
      },
    },

    {
      text: "Log out",
      onClick: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/sign-in-choice");
      },
    },
  ];

  const getFirstChar = (str) => {
    const firstChars = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstChars;
  };

  useEffect(() => {
    getFirstChar("Internet of things");
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-gray-600 px-8 py-3.5 text-center">
      <div className="flex items-center justify-between font-medium">
        <div className="flex items-center gap-4 text-gray-300 ">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                clsx(
                  "rounded-2xl px-5 py-2 transition-all",
                  isActive ? "bg-white text-gray-700 shadow-md" : "bg-gray-600"
                )
              }
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-8 text-gray-300">
          <div>
            {user.firstName} {user.lastName}
          </div>

          <div>
            <Dropdown options={options} right>
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-700 object-cover">
                <div>{getFirstChar(sampleString)}</div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
