import React from "react";
import UserDetail from "./UserDetail";

const FlagCard = ({ user }) => (
  <div className="ui card">
    <div className="content">
      <UserDetail user={user} />
    </div>
  </div>
);

export default FlagCard;
