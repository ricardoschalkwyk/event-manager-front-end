import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, to }) => {
  return <RouterLink to={to}>{children}</RouterLink>;
};

Link.propTypes = {
  children: PropTypes.string,
  to: PropTypes.node,
};

export default Link;
