import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <TailSpin
        height="50"
        width="50"
        color="#346341"
        ariaLables="tail-spin-loader"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      ></TailSpin>
    </div>
  );
};
