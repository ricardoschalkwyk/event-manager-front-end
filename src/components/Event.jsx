import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

import Api from "../api";

import Button from "./forms/Button";
import UserFirstLetter from "./UserFirstLetter";

// This sets the max length of a sentence within an event card
let MAX_LENGTH = 99;

function Event({ edit = false, event, getEvents }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Makes delete request
      await Api.delete(`/events/${event._id}`);

      // Then makes a Get request after to get to data
      getEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full self-start rounded-md bg-white p-4">
      <div className="text-center">{event.occasion}</div>

      <div className="border-b-2 border-gray-100 pt-1.5"></div>

      <div className="pt-1.5 text-start text-sm">
        <p className="break-words">
          {event.description.substring(0, MAX_LENGTH)}
          {event.description.length > MAX_LENGTH ? "..." : null}
        </p>
      </div>

      <div className="flex justify-end pt-1.5">
        <div className="rounded bg-gray-300 py-0.5 px-1 text-xs">
          <div className="flex items-center gap-1 divide-x divide-gray-400">
            <div className="flex items-center gap-1">
              {event.date} <CalendarIcon className="h-3 w-3" />
            </div>
            <div className="flex items-center gap-1 pl-1">
              {event.time}
              <ClockIcon className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-100 pt-1.5"></div>

      <div className="flex items-center justify-start gap-4 text-gray-300">
        {/* Determines the set elements based on which value edit has*/}
        {!edit ? (
          <div className="flex items-center gap-1 pt-2">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-700 object-cover">
              <div>{<UserFirstLetter user={event.user.firstName} />}</div>
            </div>

            <div>
              <div className="text-xs text-gray-700">
                {event.user?.firstName} {event.user?.lastName}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex grow items-center justify-center gap-4 pt-4 md:gap-9">
            <Button
              onClick={() => {
                navigate(`/event/${event._id}/edit`);
              }}
            >
              <PencilSquareIcon className="h-4 w-4" />
              Update
            </Button>

            <Button
              onClick={() => {
                handleDelete();
              }}
              bg="bg-red-600"
            >
              <TrashIcon className="h-4 w-4" />
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

Event.propTypes = {
  edit: PropTypes.bool,
  event: PropTypes.object,
  getEvents: PropTypes.func,
};

export default Event;
