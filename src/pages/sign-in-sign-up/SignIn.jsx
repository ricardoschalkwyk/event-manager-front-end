import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

import { login } from "../../store/auth";

import Api from "../../api";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import ErrorMessage from "../../components/forms/ErrorMessage";

function SignIn() {
  const dispatch = useDispatch();

  // This gets the token from local storage
  const token = localStorage.getItem("token");

  // These two states hold the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This state is for the loading animation
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Login function
  const handleSignIn = async (email, password) => {
    // First it will try to run the auth function in the backend to
    // check if the values exist
    try {
      setIsLoading(true);
      setError(false);

      const newSignIn = await Api.post("/auth/sign-in", {
        email,
        password,
      });

      dispatch(login(newSignIn));

      // Navigate is called to after the process
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
      setError(true);

      setEmail("");
      setPassword("");
    }
  };

  // It will only navigate if a token is valid
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="rounded-lg bg-gray-700 p-8 text-center">
        <div className="mb-8 text-gray-300">
          <h2 className="text-3xl font-bold">Sign in to Event Management!</h2>
        </div>
        <form
          className="px-10"
          onSubmit={(e) => {
            e.preventDefault();
            // This gets the values entered and gives it to the function to get verified
            handleSignIn(email, password);
          }}
        >
          {/* conditionally renders depending on if a user has entered valid values */}
          {error && (
            <div className="mb-2">
              <ErrorMessage message={errorMessage} />
            </div>
          )}
          <div className="space-y-2">
            {/* All input values are taken and given to the newSignIn function for the
            request to be fired */}
            <div>
              <Input
                icon={<EnvelopeIcon className="h-4 w-4 text-gray-400" />}
                required
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Input
                icon={<LockClosedIcon className="h-4 w-4 text-gray-400" />}
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="primary"
            bg="bg-gray-300"
            className="mt-8 w-full font-bold text-gray-700"
            loading={isLoading}
          >
            Sign in
          </Button>
        </form>
        <div className="border-b border-gray-400 pt-5"></div>
        <div className="mt-4 text-xs text-white">
          <div>Don&apos;t have an account?</div>
          <Link to="/sign-up" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {};

export default SignIn;
