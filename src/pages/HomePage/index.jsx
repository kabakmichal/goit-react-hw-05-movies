import { useTrend } from "../../utils/hooks/useTrend";
import styles from "./HomePage.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Loader } from "../../components/Loader";

const HomePage = () => {
  const { trendList } = useTrend();
  const location = useLocation();

  if (!trendList) return <Loader />;

  return (
    <main>
      <h1 className={styles.headone}>Trending today</h1>
      <ul>
        {trendList.map((movie) => {
          return (
            <li key={movie.id} className={styles.item}>
              <NavLink to={`movie/${movie.id}`} state={{ from: location }}>
                <span>{movie.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;
