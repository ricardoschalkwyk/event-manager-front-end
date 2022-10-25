import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Api from "../../api";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";

import { updateUser } from "../../store/auth";
import { userAdd } from "../../store/users";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    try {
      if (!data.password) {
        delete data.password;
      }

      // POST request
      // This sends the post request
      const newUser = await Api.put(`/users/${user._id}`, data);

      const res = await Api.get("/users");

      dispatch(updateUser(newUser));
      dispatch(userAdd(res));
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-sm grow rounded-md bg-gray-500 p-4 md:max-w-3xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit({ firstName, lastName, email, password });
          }}
        >
          {/* All input values are take and given to the handleSignUp where the request
                will be fired */}
          <div className="flex gap-3">
            <div className="grow pb-3">
              <Input
                required
                type="text"
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="grow pb-3">
              <Input
                required
                type="text"
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="pb-3">
            <Input
              required
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit">Save Profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
