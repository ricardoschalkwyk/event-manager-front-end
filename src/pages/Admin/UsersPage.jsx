import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Api from "../../api";

import { add } from "../../store/users";

const UsersPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  async function getUsers() {
    try {
      // This gets fired once the page is ready
      const response = await Api.get("/users");

      dispatch(add(response));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-md bg-gray-700">
        <div className="grid grid-cols-4 gap-4 rounded-md bg-gray-600 p-2 text-white">
          <div className="col-span-2 gap-2.5 py-3 px-3">User</div>
          <div className="gap-2.5 py-3 px-3">Role</div>
          <div className="gap-2.5 py-3 px-3">Details</div>
        </div>
        <div className="border-b-2 border-gray-100"></div>

        <div className="grid max-h-80 grid-cols-4 gap-4 overflow-hidden overflow-y-scroll p-2 text-gray-500">
          {users.list.map((user) => (
            <React.Fragment key={user._id}>
              <div className="col-span-2 flex items-center gap-4 py-3 px-3">
                <img
                  className="h-8 w-8 overflow-hidden rounded-full object-cover"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="image"
                />

                <div>
                  <h3 className="text-white">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p>{user.email}</p>
                </div>
              </div>

              <div className="gap-2.5 py-6 px-3">member</div>
              <div>
                <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

UsersPage.propTypes = {};

export default UsersPage;
