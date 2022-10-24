import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

import { login } from "../../store/auth";
import Api from "../../api";

// This function is called once consent is given on sign-in
const GoogleProcess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const loading = useRef(false);

  async function sendToGoogle() {
    try {
      loading.current = true;

      // This query will hold the params and data that is requested for the backend
      const query = new URLSearchParams(search);

      // Once signed in the token and data is saved to local storage
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
