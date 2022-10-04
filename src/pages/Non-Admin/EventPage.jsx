import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Api from "../../api";

import MembersList from "../../components/MembersList";
import Button from "../../components/forms/Button";

import { eventEdit } from "../../store/events";

function EventPage() {
  const event = useSelector((state) => state.events.edit);
  const user = useSelector((state) => state.auth.user);

  const [joined, setIsJoined] = useState(false);

  const [listing, setListing] = useState([]);
  console.log(listing);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const getEvent = async () => {
    try {
      // Then makes a Get request after to get to output
      const res = await Api.get(`/events/${params.id}`);

      dispatch(eventEdit(res));
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoin = async () => {
    try {
      setListing((list) => [...list, user]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLeave = async () => {
    try {
      setListing((list) => list.filter((item) => item._id !== user._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      // Makes delete request
      await Api.delete(`/events/${event._id}`);

      // Then makes a Get request after to get to output
      getEvent();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  if (!event) {
    return null;
  }

  return (
    <div className="flex justify-center gap-16">
      <div className="flex max-w-2xl">
        <div className="gap-6 rounded-md bg-gray-500">
          {/* event creator */}
          <div className="flex gap-2.5 p-2 text-gray-900">
            Creator: <div className="text-gray-50">Benjamin bens</div>
          </div>

          <div className="flex justify-center pt-4">
            <div className="text-gray-900">
              <div className="flex py-3">
                <div className="flex gap-1 font-semibold text-gray-50">
                  {event.name} -
                  <div className="font-medium text-gray-100">
                    {event.occasion}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* event description */}
          <div className=" text-gray-50">
            <div className="gap-2.5 py-3 px-16 text-center">
              <div className="text-gray-900">
                <h1>Event details:</h1>
              </div>
              <p>{event.description}</p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-4 text-gray-900">
            <div className="flex gap-1.5">
              Event Time:<div className="text-gray-50">{event.time}</div>
            </div>

            <div className="flex gap-1.5">
              Event Date:<div className="text-gray-50">{event.date}</div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-5 rounded-b-md bg-gray-400 p-3">
            <div className="flex gap-2">
              {!joined ? (
                <Button
                  onClick={() => {
                    handleJoin(), setIsJoined(true);
                  }}
                  bg="bg-white"
                  className="text-gray-900"
                >
                  Join Event
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleLeave(), setIsJoined(false);
                  }}
                  bg="bg-white"
                  className="text-gray-900"
                >
                  Leave Event
                </Button>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => navigate("/")}
                bg="bg-white"
                className="text-gray-900"
              >
                Back to home
              </Button>

              <Button
                bg="bg-white"
                className="text-red-500"
                onClick={() => {
                  handleDelete();
                  navigate("/");
                }}
              >
                End Event
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <MembersList setListing={setListing} setIsJoined={setIsJoined} />
      </div>
    </div>
  );
}
EventPage.propTypes = {};

export default EventPage;
