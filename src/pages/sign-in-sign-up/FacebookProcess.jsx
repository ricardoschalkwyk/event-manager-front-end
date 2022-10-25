import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth";

import Api from "../../api";
import { useRef } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

// This function is called once consent is given on sign-in
const FacebookProcess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const loading = useRef(false);

  async function sendToFacebook() {
    try {
      loading.current = true;

      // This query will hold the params and data that is requested for the backend
      const query = new URLSearchParams(search);

      const newSignIn = await Api.get(`/auth/facebook-sign-in?${query}`);

      dispatch(login(newSignIn));

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
