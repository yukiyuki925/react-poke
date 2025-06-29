import { useEffect, useState } from "react";

export default function IndexPage() {
  // ポケモン一覧配列
  const [pokemonList, setPokemonList] = useState([]);

  // apiを叩いて一覧を配列に格納
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <p>{pokemon.name}</p>
          <p>{pokemon.url}</p>
        </div>
      ))}
    </div>
  );
}
