import clsx from "clsx";
import PropTypes from "prop-types";

// This component is for a dynamic input component.
// This component is reusable

function Input({
  // Props are set to default values for repeated use
  className = "",
  type = "text",
  onChange,
  value,
  placeholder,
  required,
  icon,
}) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white py-2 px-3 shadow-sm sm:text-sm">
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

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node,
};

export default Input;
