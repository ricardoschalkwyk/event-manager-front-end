import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Api from "../../api";

import UserForm from "../../components/forms/UserForm";
import UserEvent from "./UserEvent";

import { userEdit, removeEdit, eventAdd } from "../../store/users";

const UserDetails = () => {
  const { edit: user, events: userEvents } = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();
  const params = useParams();

  async function getUser() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get(`/users/${params.id}`);

      dispatch(userEdit(response));
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserEvents() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get(`/events/findByUserId/${params.id}`);

      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
    getUserEvents();

    return () => {
      if (user) {
        dispatch(removeEdit());
      }

      if (userEvents) {
        dispatch(removeEdit());
      }
    };
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="rounded-t-md bg-gray-700">
          <UserForm user={user} />
        </div>
      </div>

      <div className="flex max-w-md justify-end pt-12 pr-5 text-white underline">
        User Events:
      </div>

      <div className="mt-5 flex items-center justify-center">
        <div className="rounded-md bg-gray-700">
          <div className="grid grid-cols-5 grid-rows-1 place-content-start rounded-t-md bg-gray-600 p-1 text-white">
            <div className="col-span-2 py-1 px-4">Event</div>
            <div className="col-span-2 py-1 px-3">Created</div>
          </div>
          <div className="border-b-2 border-gray-100"></div>

          <div className="grid grid-cols-5 grid-rows-1 gap-4 p-2 text-gray-500">
            {userEvents?.map((event) => (
              <UserEvent key={event._id} event={event} dispatch={dispatch} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
