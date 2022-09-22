import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import Input from "./forms/Input";
import Button from "./forms/Button";
import Select from "./forms/Select";
import TextArea from "./forms/TextArea";
import Date from "./forms/Date";
import Time from "./forms/Time";

import Api from "../api";
import { add } from "../store/events";

function CreationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const today = moment().add(1, "days").format("YYYY-MM-DD");
  const timeNow = moment().format("HH:mm");

  const [name, setEventName] = useState("");
  const [description, setEventDescription] = useState("");
  const [occasion, setEventOccasion] = useState("");
  const [date, setEventDate] = useState(today);
  const [time, setEventTime] = useState(timeNow);

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
      // POST request
      // This sends the post request
      await Api.post("/events", data);

      const res = await Api.get("/events");

      // Sets new event
      dispatch(add(res));
      navigate("/my-events");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grow rounded-md bg-gray-500 object-contain">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ name, description, occasion, date, time });

          setEventName("");
          setEventDescription("");
          setEventOccasion("");
          setEventDate("");
          setEventTime("");
        }}
      >
        <div className="p-4">
          <div className="gap-6">
            <div className="gap-1 text-gray-50">
              <h1>What is your event name</h1>
              <div className="gap-2.5 py-2">
                <Input
                  type="text"
                  placeholder={"Event name"}
                  value={name}
                  onChange={(e) => setEventName(e.target.value)}
                  className="text-black"
                />
              </div>
            </div>
            <div className="gap-1 text-gray-50">
              <h1>What is your event about?</h1>
              <div className="gap-2.5 py-3">
                <TextArea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Event description"
                  value={description}
                  onChange={(e) => setEventDescription(e.target.value)}
                  className="h-20"
                ></TextArea>
              </div>
            </div>
            <div className="flex items-baseline gap-2 ">
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
        </div>
        <footer className="flex justify-end gap-2.5 rounded-b-md bg-gray-400 px-6 py-3">
          <Button bg="bg-gray-500" className="text-white" type="submit">
            Create
          </Button>
        </footer>
      </form>
    </div>
  );
}

CreationForm.propTypes = {
  setEvent: PropTypes.array,
  handleUpdate: PropTypes.func,
};

export default CreationForm;
