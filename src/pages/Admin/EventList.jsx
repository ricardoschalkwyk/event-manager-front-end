import React from "react";
import PropTypes from "prop-types";

import Link from "../../components/Link";

const EventList = ({ event }) => {
  return (
    <>
      <div className="col-span-1 flex items-center gap-4 py-3 px-3">
        <div>
          <p className="text-white">{event.occasion}</p>
          <p className="text-gray-400">{event.name}</p>
        </div>
      </div>

      <div className="col-span-1 flex items-center gap-4 py-3 px-3">
        {/* Counts the length of the members list of an event */}
        <div>count: {event.members.length}</div>
      </div>

      <div className="py-6">
        {event.user.firstName} {event.user.lastName}
      </div>

      <div className="flex items-center">
        <Link to={`/admin/users/${event.user._id}/edit`}>Edit</Link>
      </div>
    </>
  );
};

EventList.propTypes = {
  event: PropTypes.object,
};

export default EventList;
