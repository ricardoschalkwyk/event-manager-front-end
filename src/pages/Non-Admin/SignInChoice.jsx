import { Link, NavLink } from "react-router-dom";

import Button from "../../components/forms/Button";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function SignInChoice() {
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
          <Button
            bg="bg-red-600"
            className="py- flex w-full place-content-center space-x-1 rounded p-2 text-white"
          >
            <div>
              <FontAwesomeIcon icon={faGoogle} />
            </div>

            <div>Google</div>
          </Button>

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

SignInChoice.propTypes = {};

export default SignInChoice;
