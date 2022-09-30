import React from "react";
import PropTypes from "prop-types";

import Link from "../../components/Link";

const UserList = ({ user }) => {
  return (
    <React.Fragment>
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

      <div className="py-6">member</div>
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
