import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import ActivityBoard from "../components/ActivityBoard";
import Filter from "../components/Filter";
import Button from "../components/forms/Button";
import Event from "../components/Event";

function HomePage({ getEvents }) {
  const events = useSelector((state) => state.events.data);
  const navigate = useNavigate();

  useEffect(() => {
    getEvents();
  }, []);

  if (!events) {
    return null;
  }

  return (
    <div>
      <div className="p-2 text-white">
        <Filter />
      </div>
      <div className="flex gap-8 pt-8">
        <div className="grow">
          <div className="grid grid-cols-2 grid-rows-2 gap-7">
            <Button
              text="text-black"
              bg="bg-white"
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

            {events.map((event, index) => (
              <Button
                key={index}
                text="text-black"
                bg="bg-white"
                onClick={() => navigate("/event")}
              >
                <Event event={event} getEvents={getEvents} />
              </Button>
            ))}
          </div>
        </div>

        <div>
          <ActivityBoard />
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  getEvents: PropTypes.func,
};

export default HomePage;
