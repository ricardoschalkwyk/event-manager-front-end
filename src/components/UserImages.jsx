import React from "react";
import PropTypes from "prop-types";

const UserImages = ({ user }) => {
  const getFirstChar = (str) => {
    const firstChars = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstChars;
  };

  if (user === undefined) {
    return null;
  }

  return <div className="uppercase">{getFirstChar(user)}</div>;
};

UserImages.propTypes = {
  eventUser: PropTypes.string,
  user: PropTypes.string,
};

export default UserImages;
