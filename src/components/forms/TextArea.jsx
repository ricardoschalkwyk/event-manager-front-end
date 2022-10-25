import clsx from "clsx";
import PropTypes from "prop-types";

// This component is for a dynamic input component.
// This component is reusable

function TextArea({
  // Props are set to default values for repeated use
  className = "",
  type = "text",
  onChange,
  value,
  label,
  placeholder,
  required,
  icon,
}) {
  return (
    <>
      {label && <label className="mb-2 block text-gray-50">{label}</label>}
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
    </>
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
