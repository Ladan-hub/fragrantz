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

      // if search input is equal to any of the perfume names in out database ==> we take the user to that perfume's detail page
      // what if the perfume name in our searchInput does not exist in our database? 
      
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
