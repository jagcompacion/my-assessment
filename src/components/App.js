import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import FlagCard from "./FlagCard";

const App = ({ users }) => {
  console.log(users);

  const [userFound, setUserFound] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSearch = searchEmail => {
    setLoading(true);
    setUserFound(users.find(user => user.email === searchEmail));
    setLoading(false);
  };

  const renderUser = userFound ? (
    <FlagCard user={userFound} />
  ) : (
    "No record found"
  );
  const renderLoading = loading ? <Spinner /> : renderUser;

  return (
    <div className="ui container">
      <SearchBar onSearch={handleSearch} />
      {renderLoading}
    </div>
  );
};

export default App;
