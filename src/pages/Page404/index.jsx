import styles from "./Page404.module.css";

export const Page404 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.info}>
        Ups... something get wrong, this page doesn't exist
      </p>
    </div>
  );
};
