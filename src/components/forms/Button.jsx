import clsx from "clsx";
import PropTypes from "prop-types";

import { ArrowPathIcon } from "@heroicons/react/24/solid";

// This component is for a dynamic Button component.
// // This component is reusable

function Button({
  // Props are set to default values for repeated use
  className = "",
  children,
  type = "button",
  onClick,
  disabled,
  loading = false,
  bg = "bg-gray-800",
  text = "text-white",
  padding = "py-2 px-4",
  rounded = "rounded-md",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center gap-1.5 text-sm",
        className,
        padding,
        bg,
        rounded,
        text
      )}
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {loading && <ArrowPathIcon className="h-4 w-4 animate-spin" />}
      {!loading && children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  bg: PropTypes.string,
  text: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
