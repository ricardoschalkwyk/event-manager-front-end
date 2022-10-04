import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/forms/Button";
import Link from "../../components/Link";

import Api from "../../api";
import { eventAdd } from "../../store/events";
import { useParams } from "react-router-dom";

const UserEvent = ({ event, dispatch }) => {
  const params = useParams();

  const handleDelete = async () => {
    try {
      // Makes delete request
      await Api.delete(`/events/${event._id}`);

      // Then makes a Get request after to get to output
      const res = await Api.get(`/events/findByUserId/${params.id}`);

      dispatch(eventAdd(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="col-span-1 pl-2">
        <h3 className="text-white">{event.occasion}</h3>
      </div>

      <div className="col-span-2 pl-28">16 February</div>

      <div>
        <Button
          className="font-normal text-white"
          onClick={() => {
            handleDelete();
          }}
        >
          Remove
        </Button>
      </div>

      <div className="flex justify-center rounded-md bg-gray-800 py-1.5 font-normal text-white">
        <Link to={`/admin/event/${event._id}/edit`}>Update</Link>
      </div>
    </>
  );
};

UserEvent.propTypes = {
  event: PropTypes.object,
  getEvents: PropTypes.func,
  dispatch: PropTypes.func,
};

export default UserEvent;
