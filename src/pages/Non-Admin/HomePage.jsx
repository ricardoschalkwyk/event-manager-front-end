import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ArrowPathIcon, PlusIcon } from "@heroicons/react/20/solid";

import Event from "../../components/Event";
import Button from "../../components/forms/Button";
import EventDialog from "../../components/forms/EventDialog";
import { clearEvents, idCollector } from "../../store/events";

function HomePage({ getUserEvents }) {
  // Events are kept in the events redux store
  const { data, loading } = useSelector((state) => state.events);

  // Controls the modal
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getUserEvents();

    return () => {
      dispatch(clearEvents());
    };
  }, []);

  // What is shown when loading state is true
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <ArrowPathIcon className="h-24 w-24 animate-spin" />
      </div>
    );
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
          <div className="text-center">Create Event</div>
          <div className="border-b-2 border-gray-100 pt-1.5"></div>
          <div className="flex items-center justify-center pt-5">
            <PlusIcon className="h-24 w-24 text-black" />
          </div>
        </div>
      </Button>

      {/* Mapping events for homepage render */}
      {data.map((event) => (
        <button
          key={event._id}
          className="rounded-md ring-orange-300 hover:ring-4"
          onClick={() => {
            // onClick adds eventId to redux store
            dispatch(idCollector(event._id));
            setIsOpen(true);
          }}
        >
          <Event event={event} />
        </button>
      ))}

      {/* Opens when event is clicked */}
      {isOpen && (
        <div>
          <EventDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}

HomePage.propTypes = {
  getUserEvents: PropTypes.func,
};

export default HomePage;
