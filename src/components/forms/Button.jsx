import clsx from "clsx";
import PropTypes from "prop-types";

import { ArrowPathIcon } from "@heroicons/react/24/solid";

// This component is for a dynamic Button component.

function Button({
  className = "",
  children,
  type = "button",
  onClick,
  disabled,
  loading = false,
  bg = "bg-gray-800",
  text = "text-white",
  padding = "py-2 px-4",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center gap-1.5 rounded-md text-sm",
        className,
        padding,
        bg,
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
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  bg: PropTypes.string,
  padding: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
