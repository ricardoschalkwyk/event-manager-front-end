import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin/users");
    }
  }, []);

  return <Outlet />;
}

AdminLayout.propTypes = {};

export default AdminLayout;
