import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function UserLayout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/sign-in-choice");
    }
  }, []);

  return <Outlet />;
}

UserLayout.propTypes = {};

export default UserLayout;
