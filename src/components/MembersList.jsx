import PropTypes from "prop-types";

import Button from "./forms/Button";

function MembersList({ listing, setListing, setIsJoined }) {
  const getFirstChar = (str = "") => {
    const firstChars = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstChars;
  };

  const handleRemove = async () => {
    try {
      setListing((list) => list.filter((item) => item._id !== item._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="rounded-lg bg-gray-500 p-4">
        <div className="pb-3 text-center font-bold text-gray-200">
          Event Members
        </div>

        <div className="border-b-2 border-gray-100"></div>

        <div>
          {listing.map((item) => (
            <div key={item._id} className="flex items-center gap-3 pt-2">
              <div className="flex gap-2">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-700 object-cover text-gray-200">
                  {getFirstChar(item.firstName)}
                </div>

                <div className="flex items-center gap-16">
                  <div className="text-sm text-gray-200">
                    {item.firstName} {item.lastName}
                  </div>
                  <Button
                    className="py-1.5"
                    onClick={() => {
                      handleRemove(), setIsJoined(false);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

MembersList.propTypes = {
  listing: PropTypes.array,
  setListing: PropTypes.func,
  setIsJoined: PropTypes.func,
  user: PropTypes.object,
};

export default MembersList;
