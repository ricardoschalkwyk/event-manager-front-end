import PropTypes from "prop-types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UpdateForm from "../../components/UpdateForm";

import Api from "../../api";

import { eventEdit, removeEdit } from "../../store/events";

function EditPage({ setEvents }) {
  const event = useSelector((state) => state.events.edit);
  console.log(event);

  const dispatch = useDispatch();
  const params = useParams();

  async function getEvents() {
    try {
      // This gets fired once the page is ready
      const res = await Api.get(`/events/${params.id}`);

      dispatch(eventEdit(res));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEvents();

    return () => {
      if (event) {
        dispatch(removeEdit());
      }
    };
  }, []);

  if (!event) {
    return null;
  }

  return (
    <div className="flex justify-center gap-16">
      <div className="max-w-sm grow md:max-w-3xl">
        <UpdateForm setEvents={setEvents} event={event} />
      </div>
    </div>
  );
}

EditPage.propTypes = {
  setEvents: PropTypes.array,
};
export default EditPage;
