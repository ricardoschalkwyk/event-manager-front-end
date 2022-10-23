import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Api from "../../api";
import ErrorMessage from "../../components/forms/ErrorMessage";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";

function SignUp() {
  // These four states hold the input values
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  //

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (firstName, lastName, email, password) => {
    try {
      setIsLoading(true);

      // This function fires the post request and the auth endpoint
      await Api.post("/auth/sign-up", {
        firstName,
        lastName,
        email,
        password,
      });

      navigate("/sign-in");
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      setError(true);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="rounded-2xl bg-gray-700 p-10 text-center">
        <div className="mb-8 text-gray-300">
          <div className="text-3xl font-bold">Sign up to Event Management!</div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleSignUp(firstName, lastName, email, password);
          }}
        >
          <div className=" px-10">
            {error && (
              <div className="mb-2">
                <ErrorMessage message={errorMessage} />
              </div>
            )}

            <div className="flex">
              <div className="mt-1 mr-4 w-full space-y-2">
                <Input
                  required
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mt-1 w-full space-y-2">
                <Input
                  required
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Input
                required
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-1 space-y-2 pt-3">
              <Input
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-1 space-y-2 pt-3">
              <Input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <Button
              loading={isLoading}
              variant="primary"
              type="submit"
              bg="bg-gray-300"
              className="mt-8 w-full font-bold text-gray-700"
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

SignUp.propTypes = {};

export default SignUp;
