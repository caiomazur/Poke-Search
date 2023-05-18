import React, { useEffect, useState } from "react";
import { StyledSearchBar } from "./styled/SearchBar.styled";
import { StyledSearchButton } from "./styled/Button.styled";

function SearchBar({ searchPokemons }) {
  // initialize state variables
  const [query, setQuery] = useState("");

  // function to handle input change
  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchPokemons(e.target.value);
  };

  // function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`You searched for: ${query}`);
    searchPokemons(query);
  };

  return (
    <StyledSearchBar>
      <form className="search-bar" onSubmit={handleSubmit}>
        <label id="search-label" htmlFor="search"></label>
        <input
          id="search-input"
          type="text"
          name="search"
          value={query}
          onChange={handleSearch}
        />
        <StyledSearchButton>
          {" "}
          <img
            src="/images/detectivePikachu.png"
            alt="Detective-Pikachu-Search-Icon"
            className="search-icon"
          />
        </StyledSearchButton>
      </form>
    </StyledSearchBar>
  );
}

export default SearchBar;
