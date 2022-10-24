import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { userAdd } from "../../store/users";
import { eventAdd } from "../../store/events";

import Button from "../../components/forms/Button";
import UserList from "./UserList";

import Api from "../../api";

const UsersPage = () => {
  const user = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.users.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getUsers() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/users");

      // Adds the users to data to redux store
      dispatch(userAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  async function getEvents() {
    try {
      const response = await Api.get("/events/all");

      // Adds the events data to redux store
      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // This makes sure that only an admin can navigate to the admin page
    if (user.role !== "Admin") {
      navigate("/");
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
          <div className="col-span-2 py-3 px-3">User</div>
          <div className="py-3">Role</div>
          <div className="py-3">Actions</div>
        </div>
        <div className="border-b-2 border-gray-100"></div>

        <div className="grid max-h-80 grid-cols-4 items-center gap-4 overflow-hidden overflow-y-scroll p-2 text-gray-500">
          {users.map((user) => (
            // Maps the array for users
            <UserList key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

UsersPage.propTypes = {};

export default UsersPage;
