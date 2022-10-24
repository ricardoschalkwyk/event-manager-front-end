import React from "react";
import PropTypes from "prop-types";

const UserFirstLetter = ({ user }) => {
  // This finds the first words and the first letter of that word
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

  // Then it will display that letter
  return <div className="uppercase">{getFirstChar(user)}</div>;
};

UserFirstLetter.propTypes = {
  eventUser: PropTypes.string,
  user: PropTypes.string,
};

export default UserFirstLetter;
