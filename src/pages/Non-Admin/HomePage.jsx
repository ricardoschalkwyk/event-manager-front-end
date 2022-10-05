import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { PlusIcon } from "@heroicons/react/20/solid";

import Filter from "../../components/Filter";
import Event from "../../components/Event";
import Button from "../../components/forms/Button";

function HomePage({ getUserEvents }) {
  const events = useSelector((state) => state.events.data);

  const navigate = useNavigate();

  useEffect(() => {
    getUserEvents();
  }, []);

  if (!events.length) {
    return null;
  }

  return (
    <div>
      <div className="p-2 text-white">
        <Filter />
      </div>

      <div className="flex gap-8 pt-8">
        <div className="grow">
          <div className="grid grid-cols-3 grid-rows-3 gap-7">
            <Button
              bg="bg-white"
              text="text-gray-700"
              className="rounded-lg p-4"
              onClick={() => {
                navigate("/create");
              }}
            >
              <div className="w-full">
                <div className="text-center">Create Event</div>
                <div className="border-b-2 border-gray-100 pt-1.5"></div>
                <div className="flex items-center justify-center pt-9">
                  <PlusIcon className="h-24 w-24 text-black" />
                </div>
              </div>
            </Button>

            {events.map((event) => (
              <button
                key={event._id}
                onClick={() => navigate(`/home/details/${event._id}`)}
              >
                <Event event={event} getUserEvents={getUserEvents} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  getUserEvents: PropTypes.func,
};

export default HomePage;
