import styles from "./Searchbar.module.css";

export const Searchbar = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.input} type="text" name="movieName" />
      <button type="submit" className={styles.submit}>
        Search
      </button>
    </form>
  );
};
