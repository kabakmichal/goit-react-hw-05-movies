import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./SearchMovies.module.css";

const SearchMovies = ({ movies }) => {
  const location = useLocation();

  if (!movies) return;

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li className={styles.item} key={movie.id}>
            <Link
              to={`${movie.id}`}
              state={{ from: location }}
              className={styles.title}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

SearchMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default SearchMovies;
