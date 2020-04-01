import React from "react";

const UserDetail = ({ user = {} }) => (
  <div className="content">
    <img
      className="right floated mini ui image"
      src={user.avatar}
      alt="userimage"
    />
    <div className="header">{user.email}</div>
    <div className="meta">{user.jobTitle}</div>
    <div className="description">{user.country}</div>
  </div>
);

export default UserDetail;
