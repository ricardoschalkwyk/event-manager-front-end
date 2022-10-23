import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userAdd } from "../../store/users";
import { eventAdd } from "../../store/events";

import Button from "../../components/forms/Button";

import UserList from "./UserList";

import Api from "../../api";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const user = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.users.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getUsers() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/users");

      dispatch(userAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  async function getEvents() {
    try {
      const response = await Api.get("/events/all");

      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user.role !== "Admin") {
      navigate("/home");
    }

    getUsers();
    getEvents();
  }, []);

  return (
    <div className="items-center justify-center">
      <div className="flex gap-2 py-2">
        <Button
          bg="bg-gray-700"
          text="text-white"
          onClick={() => navigate("/admin/events")}
        >
          Go To Events
        </Button>
      </div>
      <div className="rounded-md bg-gray-700">
        <div className="grid grid-cols-4 gap-4 rounded-md bg-gray-600 p-2 text-white">
          <div className="col-span-2 gap-2.5 py-3 px-3">User</div>
          <div className="py-3 px-3">Role</div>
          <div className="py-3 px-3">Actions</div>
        </div>
        <div className="border-b-2 border-gray-100"></div>

        <div className="grid max-h-80 grid-cols-4 gap-4 overflow-hidden overflow-y-scroll p-2 text-gray-500">
          {users.map((user) => (
            <UserList key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

UsersPage.propTypes = {};

export default UsersPage;
