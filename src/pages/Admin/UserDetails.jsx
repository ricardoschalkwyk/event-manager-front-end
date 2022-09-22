import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Api from "../../api";

import { edit, removeEdit } from "../../store/users";

import Button from "../../components/forms/Button";
import UserForm from "../../components/forms/UserForm";

const UserDetails = () => {
  // const events = useSelector((state) => state.events);
  const user = useSelector((state) => state.users.edit);

  const dispatch = useDispatch();
  const params = useParams();

  async function getUser() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get(`/users/${params.id}`);

      dispatch(edit(response));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();

    return () => {
      if (user) {
        dispatch(removeEdit());
      }
    };
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="rounded-t-md bg-gray-700">
          <UserForm user={user} />
        </div>
      </div>

      <div className="flex justify-center text-white">User Events:</div>

      <div className="mt-10 flex items-center justify-center">
        <div className="rounded-md bg-gray-700">
          <div className="grid grid-cols-5 grid-rows-1 place-content-start rounded-t-md bg-gray-600 p-1 text-white">
            <div className="col-span-2 py-1 px-4">Event</div>
            <div className="col-span-2 py-1 px-3">Created</div>
          </div>
          <div className="border-b-2 border-gray-100"></div>

          <div className="grid grid-cols-5 grid-rows-1 place-items-center gap-4 p-2 text-gray-500">
            <div className="col-span-1 pl-2">
              <h3 className="text-white">Charity Event</h3>
              <p>UserId:</p>
            </div>

            <div className="col-span-2 pl-28">16 February</div>
            <div>
              <Button className="text-white">Remove</Button>
            </div>

            <div>
              <Button className="text-white">Update</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
