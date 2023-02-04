import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchDetail } from "../../store/perfumes";
import "./Search.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const perfumes = useSelector((state) => Object.values(state.perfumes));
  console.log('THESE ARE THE PERFUMES', perfumes)

  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    reset();
    perfumes.map((perfume) => {
      if (searchInput.length > 1) {
        console.log("Somethig has been searched");
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
