import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import UserFirstLetter from "./UserFirstLetter";
import Api from "../api";

import Button from "./forms/Button";

function MembersList({ listing, setIsJoined, getEvent }) {
  const event = useSelector((state) => state.events.edit);

  const eventId = useSelector((state) => state.events.eventId);

  const user = useSelector((state) => state.auth.user);

  const handleRemove = async () => {
    try {
      await Api.get(`/events/${eventId}/leave`);
      getEvent();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div>
      <div className="rounded-lg bg-gray-500 p-4">
        <div className="pb-3 text-center font-bold text-gray-200">
          Event Members
        </div>

        <div className="border-b-2 border-gray-100"></div>

        <div className="max-h-32 overflow-y-auto">
          {listing.length === 0 ? (
            <div className="flex items-center justify-center pt-4">
              No current members
            </div>
          ) : (
            listing.map((item) => (
              <div key={item._id} className="pt-2">
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-700 object-cover text-gray-200">
                    {<UserFirstLetter user={item.firstName} />}
                  </div>

                  <div className="flex items-center justify-center gap-16">
                    <div className="text-sm text-gray-200">
                      {item.firstName} {item.lastName}
                    </div>
                    {event.user === user._id && (
                      <Button
                        className="py-1.5"
                        onClick={() => {
                          handleRemove(), setIsJoined(false);
                        }}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

MembersList.propTypes = {
  listing: PropTypes.array,
  getEvent: PropTypes.func,
  setIsJoined: PropTypes.func,
  user: PropTypes.object,
};

export default MembersList;
