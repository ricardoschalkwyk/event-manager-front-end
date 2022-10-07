import React from "react";
import PropTypes from "prop-types";

const UserImages = ({ eventUser }) => {
  const getFirstChar = (str) => {
    const firstChars = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstChars;
  };

  if (eventUser === undefined) {
    return null;
  }

  return <div>{getFirstChar(eventUser)}</div>;
};

UserImages.propTypes = {
  eventUser: PropTypes.string,
};

export default UserImages;
