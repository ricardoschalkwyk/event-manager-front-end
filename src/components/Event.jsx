import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  CalendarIcon,
  ClockIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import Button from "./forms/Button";
import Api from "../api";

// This sets the max length of a sentence within an event card
const MAX_LENGTH = 225;

function Event({ edit = false, event, getEvents }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Makes delete request
      await Api.delete(`/events/${event._id}`);

      // Then makes a Get request after to get to output
      getEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="self-start rounded-lg bg-white p-4">
      <div className="text-center">{event.name}</div>

      <div className="border-b-2 border-gray-100 pt-1.5"></div>

      <div className="pt-1.5 text-sm">
        <p>
          {event.description.substring(0, MAX_LENGTH)}
          {event.description.length > MAX_LENGTH ? "..." : null}
        </p>
      </div>

      <div className="flex justify-end pt-1.5">
        <div className="rounded bg-gray-300 py-0.5 px-1 text-[8px]">
          <div className="flex items-center gap-1 divide-x divide-gray-400">
            <div className="flex items-center gap-1">
              {event.date} <CalendarIcon className="h-2.5 w-2.5" />
            </div>
            <div className="flex items-center gap-1 pl-1">
              {event.time}
              <ClockIcon className=" h-2.5 w-2.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-100 pt-1.5"></div>

      <div className="flex items-center justify-start gap-4 pt-1.5 text-gray-300">
        {!edit ? (
          <div className="flex items-center gap-1 pt-1">
            <img
              className="h-6 w-6 overflow-hidden rounded-full object-cover"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="image"
            />

            <div>
              <div className="text-xs text-gray-700">Benny Smith</div>
            </div>
          </div>
        ) : (
          <div className="flex grow flex-col items-center justify-center gap-4 md:flex-row md:gap-9">
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
  setUpdate: PropTypes.func,
  setId: PropTypes.func,
};

export default Event;
