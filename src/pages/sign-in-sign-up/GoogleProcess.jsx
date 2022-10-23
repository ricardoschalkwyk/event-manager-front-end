import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth";

import Api from "../../api";
import { useRef } from "react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

const GoogleProcess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const loading = useRef(false);

  async function sendToGoogle() {
    try {
      loading.current = true;
      const query = new URLSearchParams(search);

      // This gets fired once the page is ready
      const newSignIn = await Api.get(`/auth/google-sign-in?${query}`);

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
      sendToGoogle();
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center gap-1">
      <div>Talking to Google</div>
      <div>
        <ArrowPathIcon className="h-5 w-5 animate-spin" />
      </div>
    </div>
  );
};

export default GoogleProcess;
