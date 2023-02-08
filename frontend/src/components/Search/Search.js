import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Search.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const perfumes = useSelector((state) => Object.values(state.perfumes));

  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    reset();
    perfumes.map((perfume) => {
      if (searchInput.toUpperCase() === perfume.name.toUpperCase()) {
        history.push(`/perfumes/${perfume.id}`);
      }
    });
  };

  const reset = () => {
    setSearchInput("");
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
