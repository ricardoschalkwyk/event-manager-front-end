import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Api from "../../api";
import { useEffect } from "react";

const GoogleProcess = () => {
  const { search } = useLocation();

  async function sendToGoogle() {
    try {
      const query = new URLSearchParams(search);

      // This gets fired once the page is ready
      await Api.get(`/auth/google-sign-in?${query}`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    sendToGoogle();
  }, []);

  return <div>Talking to google</div>;
};

GoogleProcess.propTypes = {};

export default GoogleProcess;
