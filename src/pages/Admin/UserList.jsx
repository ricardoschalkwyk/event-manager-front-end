import React from "react";
import PropTypes from "prop-types";

import Link from "../../components/Link";
import UserImages from "../../components/UserImages";

const UserList = ({ user }) => {
  return (
    <React.Fragment>
      <div className="col-span-2 flex items-center gap-4 py-3 px-3">
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-500 object-cover text-gray-800">
          {<UserImages user={user.firstName} />}
        </div>
        <div>
          <h3 className="text-white">
            {user.firstName} {user.lastName}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="py-6">{user.role}</div>
      <div className="flex items-center">
        <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
      </div>
    </React.Fragment>
  );
};

UserList.propTypes = {
  user: PropTypes.object,
};

export default UserList;
