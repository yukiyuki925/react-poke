import { useEffect, useState } from "react";
import styles from "./Index.module.css";
import Display from "../src/components/Display/Display";

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
    <>
      <div className={styles.displayContainer}>
        {pokemonList.map((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <Display
              key={pokemon.name}
              name={pokemon.name}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </>
  );
}
