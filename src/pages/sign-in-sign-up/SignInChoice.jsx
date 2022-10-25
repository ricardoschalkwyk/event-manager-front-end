import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

// Google sign-in
const googleUrl = () => {
  // This sets options for the query
  const options = {
    // Client id given from the google api
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: `${location.origin}${
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    }`,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",

    // Scopes sets the data that I want from the api
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
  };

  // Options are given to query to set params within the request
  const query = new URLSearchParams(options);

  return `https://accounts.google.com/o/oauth2/v2/auth?${query}`;
};

// Facebook sign-in
const facebookUrl = () => {
  // This sets options for the query
  const options = {
    // Client id given from the google api
    client_id: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
    redirect_uri: `${location.origin}${
      import.meta.env.VITE_FACEBOOK_REDIRECT_URI
    }`,
    response_type: "code",
    state: "321cba",

    // Scopes sets the data that I want from the api
    scope: ["email", "public_profile"].join(" "),
  };

  // Options are given to query to set params within the request
  const query = new URLSearchParams(options);

  return `https://www.facebook.com/v15.0/dialog/oauth?${query}`;
};

function SignInChoice() {
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
          <a
            href={googleUrl()}
            className="flex items-center justify-center gap-2 rounded-md bg-google p-2.5 text-white"
          >
            <FontAwesomeIcon icon={faGoogle} />
            Sign in with Google
          </a>

          <a
            href={facebookUrl()}
            className="flex items-center justify-center gap-2 rounded-md bg-facebook p-2.5 text-white"
          >
            <FontAwesomeIcon icon={faFacebook} />
            Sign in with Facebook
          </a>

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
