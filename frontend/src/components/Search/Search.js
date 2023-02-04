import React, { useState } from 'react';
import "./Search.css";

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    return (
        <div className='search-container'>
            
            <input 
            className='search-input'
            type="text"
            name="search-input"
            placeholder="Search perfumes by name"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            />
           
            
        </div>
    )
}

export default SearchBar;
