import styles from "./DetailDisplay.module.css";

export default function DetailPage({
  name,
  img,
  height,
  weight,
  types,
  stats,
}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>Height: {height / 10} m</p>
      <p>Weight: {weight / 10} kg</p>
      <p>Types: {types.map((t) => t.type.name).join(", ")}</p>
      <ul>
        {stats.map((stat) => (
          <li key={stat.stat.name} className={styles.display}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
