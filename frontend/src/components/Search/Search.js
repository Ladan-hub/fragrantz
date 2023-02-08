import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadSearchedPerfumeThunk } from "../../store/perfumes";
import "./Search.css";

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");
  

const dispatch = useDispatch();
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    reset();
    console.log(searchInput)
    dispatch(loadSearchedPerfumeThunk(searchInput))

    
    // history.push(`/results`)
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
