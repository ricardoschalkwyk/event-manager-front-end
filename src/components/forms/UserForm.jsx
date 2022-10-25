import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Api from "../../api";

import Input from "./Input";
import Button from "./Button";
import Dialog from "./Dialog";

import { userAdd } from "../../store/users";
import { useParams } from "react-router-dom";

const UserForm = ({ user }) => {
  const params = useParams();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.email);

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

  async function deleteUser() {
    try {
      await Api.delete(`/users/${params.id}`);

      const res = await Api.get("/users");

      dispatch(userAdd(res));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit({ firstName, lastName, email, password });
      }}
    >
      {/* All input values are take and given to the handleSignUp where the request
          will be fired */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 text-black">
        <div>
          <Input
            label="First name"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <Input
            label="Last name"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 rounded-b-md bg-gray-400 py-3 px-4">
        <Dialog deleteUser={deleteUser} />
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
};

UserForm.propTypes = {
  user: PropTypes.object,
};

export default UserForm;
