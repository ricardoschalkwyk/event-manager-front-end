import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import Api from "../../api";

import MembersList from "../../components/MembersList";
import Button from "../../components/forms/Button";

import { eventAdd, eventEdit, removeEdit } from "../../store/events";

function EventPage({ closeModal }) {
  const event = useSelector((state) => state.events.edit);
  const eventId = useSelector((state) => state.events.eventId);

  const user = useSelector((state) => state.auth.user);

  const [joined, setIsJoined] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getEvent = async () => {
    try {
      // Then makes a Get request after to get to output
      const res = await Api.get(`/events/${eventId}`);

      dispatch(eventEdit(res));

      setIsJoined(res.members.some((member) => member._id === user._id));
    } catch (error) {
      console.log(error);
    }
  };

  async function getUserEvents() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/events/all");

      // Adds the response to the redux store
      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  const handleJoin = async () => {
    try {
      await Api.get(`/events/${eventId}/join`);

      getEvent();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLeave = async () => {
    try {
      await Api.get(`/events/${eventId}/leave/${user._id}`);

      getEvent();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      // Makes delete request
      await Api.delete(`/events/${eventId}`);

      getUserEvents();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserEvents();
    getEvent();

    return () => {
      dispatch(removeEdit());
    };
  }, []);

  if (!event) {
    return null;
  }

  return (
    <div className="justify-center gap-16 md:m-2">
      <div className="grow rounded-md bg-gray-500">
        {/* event creator */}
        <div className="flex justify-between">
          <div className="flex gap-2.5 p-2 text-gray-900">
            Creator: <div className="text-gray-50">Benjamin bens</div>
          </div>
        </div>

        <div className="pt-4">
          <div className="text-gray-900">
            <div className="py-3">
              <div className="flex justify-center gap-1 font-semibold text-gray-50">
                {event.name} -
                <div className="font-medium text-gray-100">
                  {event.occasion}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* event description */}
        <div className="text-gray-50">
          <div className="py-3 px-16 text-center">
            <div className="text-gray-900">
              <h1>Event details:</h1>
            </div>
            <p>{event.description}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-4 text-gray-900">
          <div>
            Event Time: <span className="text-gray-50">{event.time}</span>
          </div>

          <div>
            Event Date: <span className="text-gray-50">{event.date}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-b-md bg-gray-400 p-3">
          <div>
            {!joined ? (
              <Button
                onClick={() => {
                  handleJoin();
                }}
                bg="bg-white"
                className="text-gray-900"
              >
                Join Event
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleLeave();
                }}
                bg="bg-white"
                className="text-gray-900"
              >
                Leave Event
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            {/* Checks if the event belongs to the logged in user */}
            {event.user === user._id && (
              <Button
                onClick={() => {
                  handleDelete();
                  closeModal();
                  navigate("/");
                }}
                bg="bg-white"
                className="text-red-500"
              >
                End Event
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <MembersList
          getEvent={getEvent}
          listing={event.members}
          setIsJoined={setIsJoined}
        />
      </div>
    </div>
  );
}

export default EventPage;
