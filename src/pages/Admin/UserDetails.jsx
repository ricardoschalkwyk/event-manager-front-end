import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Api from "../../api";

import UserForm from "../../components/forms/UserForm";
import UserEvent from "./UserEvent";

import { eventAdd } from "../../store/events";
import { userEdit, removeEdit } from "../../store/users";

const UserDetails = () => {
  const event = useSelector((state) => state.events.data);
  const user = useSelector((state) => state.users.edit);

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

  async function getEvents() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/events");

      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
    getEvents();

    return () => {
      if (user) {
        dispatch(removeEdit());
      }

      if (event) {
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

      <div className="flex justify-center text-white">User Events:</div>

      <div className="mt-10 flex items-center justify-center">
        <div className="rounded-md bg-gray-700">
          <div className="grid grid-cols-5 grid-rows-1 place-content-start rounded-t-md bg-gray-600 p-1 text-white">
            <div className="col-span-2 py-1 px-4">Event</div>
            <div className="col-span-2 py-1 px-3">Created</div>
          </div>
          <div className="border-b-2 border-gray-100"></div>

          <div className="grid grid-cols-5 grid-rows-1 gap-4 p-2 text-gray-500">
            {event?.map((event) => (
              <React.Fragment key={event._id}>
                <UserEvent event={event} dispatch={dispatch} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
