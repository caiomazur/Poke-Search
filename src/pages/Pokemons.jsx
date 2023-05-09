import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import { StyledPokemonList } from "../components/styled/PokemonCard.styled";
import {
  StyledTypeButton,
  TypeButtonContainer,
} from "../components/styled/Button.styled";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";

function Pokemons() {
  // initialize states
  const [pokemons, setPokemons] = useState([]);
  const [showPokemons, setShowPokemons] = useState([]); // Filtered array of pokemons (search)
  const [type, setType] = useState(null);

  // function to get all the pokemons from the API
  const getPokemons = async () => {
    try {
      let endpoints = [];
      for (let i = 1; i < 152; i++) {
        // loop through all pokemon endpoints
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint)) // make requests for all endpoints
      );
      console.log(response);
      setPokemons(response); // set the state of all the pokemons
      setShowPokemons(response); // set the state of the filtered pokemons
    } catch (error) {
      console.log(error);
    }
  };

  // use effect to call the function to get all the pokemons when the component mounts
  useEffect(() => {
    getPokemons();
  }, []);

  // function to search for pokemons based on name and type
  const searchPokemons = (query) => {
    const filteredPokemons = pokemons.filter(
      (pokemon) =>
        pokemon.data.name.toLowerCase().includes(query.toLowerCase()) &&
        (type === null ||
          pokemon.data.types[0].type.name.toLowerCase() === type.toLowerCase())
    );
    setShowPokemons(filteredPokemons);
  };

  // function to filter pokemons by type
  const filterByType = (types) => {
    setType(types); // set the state of the type
    if (types === null) {
      setShowPokemons(pokemons); // show all the pokemons
    } else {
      const filteredPokemons = pokemons.filter(
        (pokemon) =>
          pokemon.data.types[0].type.name.toLowerCase() === types.toLowerCase() // show only the pokemons with the type selected
      );
      setShowPokemons(filteredPokemons); // set the state of the filtered pokemons
    }
  };

  // array of types to filter
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return (
    <main id="pokemons-page">
      <NavBar />
      <SearchBar searchPokemons={searchPokemons} />

      <TypeButtonContainer>
        <div className="button-types-position">
          <StyledTypeButton onClick={() => filterByType(null)}>
            All
          </StyledTypeButton>
          {types.map((type) => (
            <StyledTypeButton key={type} onClick={() => filterByType(type)}>
              {type}
            </StyledTypeButton>
          ))}
        </div>
      </TypeButtonContainer>

      <StyledPokemonList>
        {showPokemons.length > 0 ? (
          showPokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              name={pokemon.data.name}
              image={pokemon.data.sprites.front_default}
              types={pokemon.data.types}
            />
          ))
        ) : (
          <Spinner />
        )}
      </StyledPokemonList>
    </main>
  );
}

export default Pokemons;
