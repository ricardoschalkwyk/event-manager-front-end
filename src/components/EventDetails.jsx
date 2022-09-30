import React from "react";
import PropTypes from "prop-types";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";

const EventDisc = (event) => {
  const MAX_LENGTH = 225;

  return (
    <>
      <div className="text-center">{event.occasion}</div>

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
    </>
  );
};

EventDisc.propTypes = {
  event: PropTypes.object,
};

export default EventDisc;
