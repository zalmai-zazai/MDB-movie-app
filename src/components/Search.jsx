import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="Search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search Through Thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
