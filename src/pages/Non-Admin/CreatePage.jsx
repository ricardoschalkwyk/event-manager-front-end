import PropTypes from "prop-types";

import CreationForm from "../../components/CreationForm";

function CreatePage({ setEvents }) {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-16">
        <div className="max-w-3xl grow">
          <CreationForm setEvent={setEvents} />
        </div>
      </div>
    </div>
  );
}

CreatePage.propTypes = {
  setEvents: PropTypes.array,
};

export default CreatePage;
