import PropTypes from "prop-types";

function ErrorMessage({ message }) {
  return (
    <div className="rounded-md bg-red-600 p-2 text-sm text-white shadow-sm shadow-gray-500">
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
