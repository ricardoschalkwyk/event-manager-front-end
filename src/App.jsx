import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./pages/Non-Admin/Layout";
import UserLayout from "./pages/Non-Admin/UserLayout";
import AdminLayout from "./pages/Admin/AdminLayout";

import SignInChoice from "./pages/Sign-in & Sign-up/SignInChoice";
import SignIn from "./pages/Sign-in & Sign-up/SignIn";
import SignUp from "./pages/Sign-in & Sign-up/SignUp";

import HomePage from "./pages/Non-Admin/HomePage";
import CreatePage from "./pages/Non-Admin/CreatePage";
import MyEventsPage from "./pages/Non-Admin/MyEventsPage";
import EditPage from "./pages/Non-Admin/EditPage";
import Profile from "./pages/Non-Admin/Profile";

import UsersPage from "./pages/Admin/UsersPage";
import UserDetails from "./pages/Admin/UserDetails";
import UserEditPage from "./pages/Admin/UserEditPage";
import EventsPage from "./pages/Admin/EventsPage";

import Api from "./api";

import { eventAdd } from "./store/events";

// Todo list

// Mobile prep on UI // Clean up and refine Event Modal // Test animations on buttons //

function App() {
  // Dispatch actions/mutations
  const dispatch = useDispatch();
  // Select store data to use inside the components

  async function getEvents() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/events");

      dispatch(eventAdd(response));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserEvents() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/events/all");

      dispatch(eventAdd(response));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Routes>
        {/* Routes will determine which component is shown */}
        <Route path="/sign-in-choice" element={<SignInChoice />} />

        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route element={<UserLayout />}>
            <Route
              index
              path="/home"
              element={<HomePage getUserEvents={getUserEvents} />}
            />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/event/:id/edit" element={<EditPage />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route
              path="/my-events"
              element={<MyEventsPage getEvents={getEvents} />}
            />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin">
              <Route path="users" element={<UsersPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="users/:id/edit" element={<UserDetails />} />
              <Route path="event/:id/edit" element={<UserEditPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
