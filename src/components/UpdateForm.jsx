import { useState } from "react";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Input from "./forms/Input";
import Button from "./forms/Button";
import Select from "./forms/Select";
import TextArea from "./forms/TextArea";
import Date from "./forms/Date";
import Time from "./forms/Time";

import Api from "../api";

import { eventAdd } from "../store/events";
import { useNavigate } from "react-router-dom";

function UpdateForm({ event }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Presets existing data for the chosen event
  const [name, setEventName] = useState(event.name);
  const [description, setEventDescription] = useState(event.description);
  const [occasion, setEventOccasion] = useState(event.occasion);
  const [date, setEventDate] = useState(event.date);
  const [time, setEventTime] = useState(event.time);

  // Sets options for dropdown
  const options = [
    {
      id: 1,
      label: "Charity Event",
      value: "Charity",
    },
    {
      id: 2,
      label: "Social Event",
      value: "Social",
    },
    {
      id: 3,
      label: "Business Event",
      value: "Business",
    },
  ];

  const handleSubmit = async (data) => {
    try {
      // This sends the put request
      await Api.put(`/events/${event._id}`, data);

      const res = await Api.get("/events");

      // Updated data it sent to the redux store
      dispatch(eventAdd(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-md bg-gray-500">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ name, description, occasion, date, time });
          navigate("/my-events");
        }}
      >
        {/* All input values are take and given to the handleSignUp where the request
            will be fired */}
        <div className="p-4">
          <div className="text-gray-50">
            <h1>What is your event name </h1>
            <div className="py-2">
              <Input
                type="text"
                placeholder={"Event name"}
                value={name}
                onChange={(e) => setEventName(e.target.value)}
                className="text-black"
              />
            </div>
          </div>
          <div className="text-gray-50">
            <h1>What is your event about?</h1>
            <div className="py-3">
              <TextArea
                placeholder="Event description"
                value={description}
                onChange={(e) => setEventDescription(e.target.value)}
                className="h-20"
              ></TextArea>
            </div>
          </div>
          <div className="items-baseline gap-2 space-y-3 md:flex">
            <div>
              <Select options={options} setEventOccasion={setEventOccasion} />
            </div>
            <div>
              <Date
                value={date}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
            <div>
              <Time
                type="time"
                value={time}
                onChange={(e) => setEventTime(e.target.value)}
              />
            </div>
          </div>
        </div>
        <footer className="flex justify-end gap-2.5 rounded-b-md bg-gray-400 px-4 py-3">
          <Button bg="bg-gray-500" className="text-white" type="submit">
            Update
          </Button>
        </footer>
      </form>
    </div>
  );
}

UpdateForm.propTypes = {
  event: PropTypes.object,
};

export default UpdateForm;
