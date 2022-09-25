import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./pages/Layout";

import SignInChoice from "./pages/SignInChoice";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import MyEventsPage from "./pages/MyEventsPage";
import EventPage from "./pages/EventPage";
import EditPage from "./pages/EditPage";
import UsersPage from "./pages/Admin/UsersPage";
import UserDetails from "./pages/Admin/UserDetails";

import Api from "./api";

import { eventAdd } from "./store/events";

function App() {
  // Dispatch actions/mutations
  const dispatch = useDispatch();
  // Select store data to use inside the components

  async function getEvents() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/events");

      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  // return null;

  return (
    <div>
      <Routes>
        {/* Routes will determine which component is shown */}
        <Route path="/sign-in-choice" element={<SignInChoice />} />

        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage getEvents={getEvents} />} />

          <Route path="/create" element={<CreatePage />} />

          <Route path="/event/:id/edit" element={<EditPage />} />

          <Route
            path="/my-events"
            element={<MyEventsPage getEvents={getEvents} />}
          />

          <Route path="/event" element={<EventPage />} />

          <Route path="/admin">
            <Route path="/admin/users" element={<UsersPage />} />
            <Route path="/admin/users/:id/edit" element={<UserDetails />} />
            <Route path="/admin//event/:id/edit" element={<EditPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
