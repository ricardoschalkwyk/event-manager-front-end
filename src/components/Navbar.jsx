import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

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

  const navigate = useNavigate();

  const options = [
    {
      text: "Admin",
      onClick: () => {
        navigate("/admin/users");
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

  return (
    <div className="rounded-2xl bg-gray-600 px-8 py-3.5 text-center">
      <div className="flex items-center justify-between font-light">
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
              <img
                className="h-8 w-8 overflow-hidden rounded-full object-cover"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="image"
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
