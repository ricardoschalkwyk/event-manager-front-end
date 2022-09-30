import PropTypes from "prop-types";

function MembersList({ member }) {
  const getFirstChar = (str = "") => {
    const firstChars = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstChars;
  };

  return (
    <div className="w-80">
      <div className="rounded-lg bg-white p-4">
        <div className="pb-3 text-sm">Event Members</div>

        <div className="border-b-2 border-gray-100"></div>

        <div>
          {member.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-3 py-2 text-xs"
            >
              <div className="flex">
                <div className="h-6 w-6 overflow-hidden rounded-full object-cover">
                  {getFirstChar(member.firstName)}
                </div>
                <div>{member.firstName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

MembersList.propTypes = {
  member: PropTypes.array,
  user: PropTypes.object,
};

export default MembersList;
