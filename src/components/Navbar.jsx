import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Dropdown from "./Dropdown";

const routes = [
  {
    path: "/home",
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

  const navigate = useNavigate();

  const options = [
    {
      text: "Admin",
      roles: ["Admin"],
      onClick: () => {
        navigate("/admin/users");
      },
    },

    {
      text: "Profile",
      roles: ["Admin", "User"],
      onClick: () => {
        navigate(`/profile/${user._id}`);
      },
    },

    {
      text: "Log out",
      roles: ["Admin", "User"],
      onClick: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/sign-in-choice");
      },
    },
  ];

  const navigation = [
    {
      text: "Home",
      roles: ["Admin", "User"],
      onClick: () => {
        navigate("/home");
      },
    },

    {
      text: "My Events",
      roles: ["Admin", "User"],
      onClick: () => {
        navigate("/my-events");
      },
    },

    {
      text: "Create",
      roles: ["Admin", "User"],
      onClick: () => {
        navigate("/create");
      },
    },
  ];

  const filteredOptions = () => {
    const list = [];
    options.forEach((option) => {
      if (!option.roles.some((role) => role === user.role)) {
        return null;
      }
      list.push(option);
    });

    return list;
  };

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
    <div className="rounded-2xl bg-gray-600 px-4 py-3.5 text-center md:mx-2 md:px-8">
      <div className="flex items-center justify-between font-medium">
        <div className="flex items-center gap-4 text-gray-300 md:pr-6">
          <div className="shrink-0 rounded-3xl border-2 bg-orange-300 p-2 font-extrabold text-white">
            E-Management
          </div>

          <div className="shrink-0 rounded-3xl border-2 bg-gray-600 p-2 font-extrabold text-white md:hidden">
            <Dropdown navigation={navigation} right>
              <div>Navigation</div>
            </Dropdown>
          </div>

          {routes.map((route, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                clsx(
                  "hidden rounded-2xl px-5 py-2 transition-all md:inline-block",
                  isActive ? "bg-white text-gray-700 shadow-md" : "bg-gray-600"
                )
              }
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </div>

        <div className="rounded-md border-2 border-double border-black bg-gray-300 p-1">
          <Dropdown options={filteredOptions()} right>
            <div className="flex items-center gap-4 text-gray-700 md:shrink-0">
              <div className="hidden md:block">
                {user.firstName} {user.lastName}
              </div>

              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-700 object-cover text-gray-300 md:hidden">
                <div>{getFirstChar(user.firstName)}</div>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
