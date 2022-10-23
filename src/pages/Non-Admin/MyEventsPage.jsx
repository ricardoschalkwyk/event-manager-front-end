import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ArrowPathIcon, PlusIcon } from "@heroicons/react/20/solid";

import Button from "../../components/forms/Button";
import Event from "../../components/Event";

function MyEventsPage({ getEvents }) {
  const events = useSelector((state) => state.events.data);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 150);

    getEvents();
  }, [isLoading]);

  if (!isLoading) {
    return (
      <div className="flex items-center justify-center">
        <ArrowPathIcon className="h-24 w-24 animate-spin" />
      </div>
    );
  }

  if (!events) {
    return null;
  }
  return (
    <div>
      <div className="flex gap-8">
        <div className="grow">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            <Button
              text="text-black"
              bg="bg-white"
              className="rounded-md ring-orange-300 hover:ring-4"
              onClick={() => navigate("/create")}
            >
              <div className="w-full">
                {isLoading && <div className="text-center">Create Event</div>}
                <div className="border-b-2 border-gray-100 pt-1.5"></div>

                <div className="flex items-center justify-center pt-9">
                  <PlusIcon className="h-24 w-24 text-black" />
                </div>
              </div>
            </Button>

            {events.map((event) => (
              <Event edit key={event._id} event={event} getEvents={getEvents} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

MyEventsPage.propTypes = {
  getEvents: PropTypes.func,
};

export default MyEventsPage;
