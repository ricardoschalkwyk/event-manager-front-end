import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userAdd } from "../../store/users";
import { eventAdd } from "../../store/events";

import Button from "../../components/forms/Button";
import EventList from "./EventList";

import Api from "../../api";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const events = useSelector((state) => state.events.data);

  async function getUsers() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/users");

      dispatch(userAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  async function getEvents() {
    try {
      const response = await Api.get("/events/all");

      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
    getEvents();
  }, []);

  return (
    <div className="items-center justify-center">
      <div className="flex gap-2 py-2">
        <Button
          bg="bg-gray-700"
          text="text-white"
          onClick={() => navigate("/admin/users")}
        >
          Go To Users
        </Button>
      </div>

      <div className="rounded-md bg-gray-700">
        <div className="grid grid-cols-4 gap-4 rounded-md bg-gray-600 p-4 text-white">
          <div>Event</div>
          <div>Members</div>
          <div>User</div>
          <div>Actions</div>
        </div>

        <div className="border-b border-gray-100"></div>

        <div className="grid max-h-80 grid-cols-4 items-center gap-4 overflow-hidden overflow-y-scroll p-4 text-gray-200">
          {events.map((event) => (
            <EventList key={event._id} event={event} dispatch={dispatch} />
          ))}
        </div>
      </div>
    </div>
  );
};

EventsPage.propTypes = {};

export default EventsPage;
