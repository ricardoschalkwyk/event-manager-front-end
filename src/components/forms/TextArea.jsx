import clsx from "clsx";
import PropTypes from "prop-types";

// This component is for a dynamic input component.

function TextArea({
  className = "",
  type = "text",
  onChange,
  value,
  placeholder,
  required,
  icon,
}) {
  return (
    <div className="flex items-start gap-2 rounded-md bg-white py-2 px-3 text-black shadow-sm sm:text-sm">
      {icon && <div>{icon}</div>}
      <textarea
        type={type}
        className={clsx("w-full resize-none focus:outline-none", className)}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => {
          onChange?.(e);
        }}
      ></textarea>
    </div>
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node,
};

export default TextArea;
