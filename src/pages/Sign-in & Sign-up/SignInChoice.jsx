import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

import Button from "../../components/forms/Button";
import Api from "../../api";
function SignInChoice() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  console.log(profile);

  const googleUser = profile;

  const [firstName, setFirstName] = useState(profile.givenName);

  const [lastName, setLastName] = useState(profile.familyName);

  const [email, setEmail] = useState(profile.email);

  const client_id =
    "26061662701-q391ntrp908poon72g0gim86pcftfoej.apps.googleusercontent.com";

  const onSignIn = async () => {
    try {
      const id_token = googleUser.getAuthResponse().id_token;
      // This function fires the post request and the auth endpoint
      setFirstName(profile.givenName);
      setLastName(profile.familyName);
      setEmail(profile.email);

      await Api.post("/auth/google-sign-up", {
        id_token,
        firstName,
        lastName,
        email,
      });

      navigate("/sign-up");
    } catch (error) {
      console.log(error);
    }
  };

  // function onSignOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log("User signed out.");
  //   });
  // }

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };

  function handleResponse(response) {
    console.log(response.credential);
  }

  useEffect(() => {
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
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="text-gray-700">
          <div className="pb-2 text-3xl font-bold">
            Welcome to Event Management!
          </div>
          <div className="pb-4 text-sm">Sign in with the following:</div>
        </div>
        <div className="space-y-4">
          <GoogleLogin
            className="w-full place-content-center"
            clientId={client_id}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            onClick={() => onSignIn()}
          />

          <Button
            bg="bg-blue-500"
            padding="p-3"
            className="flex w-full place-content-center space-x-1 rounded-sm text-white shadow-sm shadow-slate-500"
          >
            <div>
              <FontAwesomeIcon icon={faFacebook} />
            </div>

            <div>Facebook</div>
          </Button>

          <Link
            className="flex w-full place-content-center space-x-1 rounded-sm bg-gray-500 p-2.5 text-white shadow-sm shadow-slate-500"
            to="/sign-in"
            as={NavLink}
          >
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div>Email</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

SignInChoice.propTypes = {};

export default SignInChoice;
