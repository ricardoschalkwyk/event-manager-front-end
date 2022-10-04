import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Api from "../../api";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";

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
      await Api.put(`/users/${user._id}`, data);

      const res = await Api.get("/users");

      dispatch(userAdd(res));
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex max-w-fit items-center justify-center rounded-md bg-gray-500">
        <div className="p-6 text-center text-gray-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit({ firstName, lastName, email, password });
            }}
          >
            <div className="pb-3">
              <span>First name</span>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="pb-3">
              <span>Last name</span>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="pb-3">
              <span>Email</span>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <span>Password</span>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit">Save profile</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
