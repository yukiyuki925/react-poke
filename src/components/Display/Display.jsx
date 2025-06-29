import styles from "./Display.module.css";

export default function Display({ name, imageUrl }) {
  return (
    <div className={styles.display}>
      <p>{name}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
}
