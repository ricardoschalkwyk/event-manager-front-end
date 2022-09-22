import PropTypes from "prop-types";

import ActivityBoard from "../components/ActivityBoard";
import CreationForm from "../components/CreationForm";

function CreatePage({ setEvents }) {
  return (
    <div className="container mx-auto ">
      <div className="flex gap-16">
        <div className="grow">
          <CreationForm setEvent={setEvents} />
        </div>

        <div>
          <ActivityBoard />
        </div>
      </div>
    </div>
  );
}

CreatePage.propTypes = {
  setEvents: PropTypes.array,
};

export default CreatePage;
