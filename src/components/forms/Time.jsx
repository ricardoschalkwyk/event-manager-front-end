import clsx from "clsx";
import PropTypes from "prop-types";

// This component is for a dynamic input component.

function Time({
  className = "",
  type = "time",
  onChange,
  value,
  placeholder,
  required,
  icon,
}) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white py-[7px] px-3 shadow-sm sm:text-sm">
      {icon && <div>{icon}</div>}
      <input
        type={type}
        className={clsx("w-full focus:outline-none", className)}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => {
          onChange?.(e);
        }}
      />
    </div>
  );
}

Time.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node,
};

export default Time;
