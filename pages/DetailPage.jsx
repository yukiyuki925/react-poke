import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Detail from "../src/components/DetailDisplay/DetailDisplay";

export default function DetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <>
      <Detail
        name={pokemon.name}
        img={pokemon.sprites.front_default}
        height={pokemon.height}
        weight={pokemon.weight}
        types={pokemon.types}
        stats={pokemon.stats}
      />
    </>
  );
}
