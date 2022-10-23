import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth";

import Api from "../../api";
import { useRef } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const FacebookProcess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const loading = useRef(false);

  async function sendToFacebook() {
    try {
      loading.current = true;
      const query = new URLSearchParams(search);

      // This gets fired once the page is ready
      const newSignIn = await Api.get(`/auth/facebook-sign-in?${query}`);

      localStorage.setItem("token", newSignIn.token);
      localStorage.setItem("user", JSON.stringify(newSignIn.user));

      dispatch(login(newSignIn.user));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!loading.current) {
      sendToFacebook();
    }
  }, []);

  return (
    <div>
      <div>Talking to Facebook</div>
      <div>
        <ArrowPathIcon className="h-5 w-5 animate-spin" />
      </div>
    </div>
  );
};

export default FacebookProcess;
