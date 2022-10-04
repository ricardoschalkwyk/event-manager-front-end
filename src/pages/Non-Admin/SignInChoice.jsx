import { Link, NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import PropTypes from "prop-types";

import Button from "../../components/forms/Button";
function SignInChoice({ clientId, onSuccess, onFailure }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="text-gray-200">
          <div className="pb-2 text-3xl font-bold">
            Welcome to Event Management!
          </div>
          <div className="pb-4 text-sm">Sign in with the following:</div>
        </div>
        <div className="mt-2 space-y-4 px-10">
          <GoogleLogin
            className="flex w-full place-content-center space-x-1 rounded bg-red-600 text-white"
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />

          <Button
            bg="bg-blue-500"
            className="flex w-full place-content-center space-x-1 rounded p-2 text-white"
          >
            <div>
              <FontAwesomeIcon icon={faFacebook} />
            </div>

            <div>Facebook</div>
          </Button>

          <Link
            className="flex w-full place-content-center space-x-1 rounded bg-gray-500 p-2 text-white"
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

SignInChoice.propTypes = {
  clientId: PropTypes.string,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
};

export default SignInChoice;
