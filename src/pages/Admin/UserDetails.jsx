import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Api from "../../api";

import UserForm from "../../components/forms/UserForm";
import UserEvent from "./UserEvent";

import { userEdit, removeEdit, eventAdd } from "../../store/users";
import { CalendarIcon } from "@heroicons/react/20/solid";

const UserDetails = () => {
  const { edit, events } = useSelector((state) => state.users);

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
      if (edit) {
        dispatch(removeEdit());
      }

      if (events) {
        dispatch(removeEdit());
      }
    };
  }, []);

  if (!edit) {
    return null;
  }

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="max-w-sm grow rounded-md bg-gray-700 md:max-w-3xl">
            <UserForm user={edit} />
          </div>
        </div>
      </div>

      <div className="pt-12 font-bold">User Events</div>

      <div className="mt-5">
        <div className="rounded-md bg-gray-700">
          <div className="grid grid-cols-4 gap-2 rounded-t-md bg-gray-600 text-sm text-white">
            <div className="col-span-1 py-1 pl-2 uppercase">Occasion</div>
            <div className="col-span-1 py-1 pl-2 uppercase">Event Title</div>
            <div className="col-span-1 py-1 uppercase">Date</div>
            <div className="col-span-1 py-1 uppercase">Actions</div>
          </div>
          {events.length === 0 && (
            <div className="flex items-center justify-center gap-1 pt-4 text-white">
              <CalendarIcon className="h-4 w-4" />
              No current events
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-2 py-2 text-gray-500">
            {events?.map((event) => (
              <UserEvent
                key={event._id}
                event={event}
                dispatch={dispatch}
                getUserEvents={getUserEvents}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
