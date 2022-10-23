import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { gapi } from "gapi-script";

const googleUrl = () => {
  const options = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: `${location.origin}${
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    }`,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
  };

  const query = new URLSearchParams(options);

  return `https://accounts.google.com/o/oauth2/v2/auth?${query}`;
};

// do dis

const facebookUrl = () => {
  const options = {
    client_id: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
    redirect_uri: `${location.origin}${
      import.meta.env.VITE_FACEBOOK_REDIRECT_URI
    }`,

    response_type: "code",
    state: "321cba",
    scope: ["email", "public_profile"].join(" "),
  };

  const query = new URLSearchParams(options);

  return `https://www.facebook.com/v15.0/dialog/oauth?${query}`;
};

function SignInChoice() {
  const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  console.log(import.meta.env);

  function handleResponse(response) {
    console.log(response.credential);
  }

  useEffect(() => {
    console.log({ url: googleUrl() });

    const initClient = () => {
      gapi.client.init({
        clientId: client_id,
        callback: handleResponse,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="text-center">
        <div className="text-gray-700">
          <div className="pb-2 text-3xl font-bold">
            Welcome to Event Management!
          </div>
          <div className="pb-4 text-sm">Sign in with the following:</div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 rounded-md bg-google p-2.5 text-white">
            <FontAwesomeIcon icon={faGoogle} />
            <a href={googleUrl()}>Sign in with Google</a>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-md bg-facebook p-2.5 text-white">
            <FontAwesomeIcon icon={faFacebook} />
            <a href={facebookUrl()}>Sign in with Facebook</a>
          </div>

          <Link
            className="flex w-full place-content-center gap-2 rounded-sm bg-gray-500 p-2.5 text-white shadow-sm shadow-slate-500"
            to="/sign-in"
            as={NavLink}
          >
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div>Sign in with Email</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

SignInChoice.propTypes = {};

export default SignInChoice;
