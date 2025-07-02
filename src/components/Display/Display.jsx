import styles from "./Display.module.css";
import { Link } from "react-router-dom";

export default function Display({ name, imageUrl }) {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className={styles.display}>
        <p>{name}</p>
        <img src={imageUrl} alt={name} />
      </div>
    </Link>
  );
}
