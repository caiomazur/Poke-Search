import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  const getSinglePokemon = async () => {
    try {
      const response = await axios.get(` https://pokeapi.co/api/v2/pokemon/${id}`);
      // console.log(response.data.owner[0]._id);

      setPet(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return <div>PokemonDetails</div>;
}

export default PokemonDetails;
