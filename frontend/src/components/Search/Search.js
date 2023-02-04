import React, { useState } from "react";
import "./Search.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={search}>
        <input
          className="search-input"
          type="text"
          name="search-input"
          placeholder="Search perfumes by name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
