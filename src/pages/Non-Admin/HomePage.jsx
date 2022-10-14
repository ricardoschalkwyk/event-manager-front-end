import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ArrowPathIcon, PlusIcon } from "@heroicons/react/20/solid";

import Event from "../../components/Event";
import Button from "../../components/forms/Button";
import EventDialog from "../../components/forms/EventDialog";

function HomePage({ getUserEvents }) {
  const events = useSelector((state) => state.events.data);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [eventId, setEventId] = useState();

  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 150);

    getUserEvents();
    return () => {};
  }, []);

  if (!isLoading) {
    return (
      <div className="flex items-center justify-center">
        <ArrowPathIcon className="h-24 w-24 animate-spin" />
      </div>
    );
  }

  if (!events.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
      <Button
        bg="bg-white"
        text="text-gray-700"
        className="rounded-md ring-orange-300 hover:ring-4"
        onClick={() => {
          navigate("/create");
        }}
      >
        <div className="w-full">
          {isLoading && <div className="text-center">Create Event</div>}
          <div className="border-b-2 border-gray-100 pt-1.5"></div>

          <div className="flex items-center justify-center pt-5">
            <PlusIcon className="h-24 w-24 text-black" />
          </div>
        </div>
      </Button>

      {events.map((event) => (
        <button
          key={event._id}
          className="rounded-md ring-orange-300 hover:ring-4"
          onClick={() => {
            setEventId(event._id);
            setIsOpen(true);
          }}
        >
          <Event event={event} getUserEvents={getUserEvents} />
        </button>
      ))}

      {isOpen && (
        <div>
          <EventDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            eventId={eventId}
          />
        </div>
      )}
    </div>
  );
}

HomePage.propTypes = {
  getUserEvents: PropTypes.func,
};

export default HomePage;
