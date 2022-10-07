import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function UserLayout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/sign-in-choice");
    }
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
}

UserLayout.propTypes = {};

export default UserLayout;
