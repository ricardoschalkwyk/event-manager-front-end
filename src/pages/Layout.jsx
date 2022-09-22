import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function Layout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/sign-in-choice");
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mb-16 mt-14">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
