import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    onSearch(value);
  };
  return (
    <form className="ui form">
      <div className="field">
        <label>Search by Email</label>
        <input type="text" placeholder="Search..." onChange={handleChange} />
      </div>
    </form>
  );
};

export default SearchBar;
