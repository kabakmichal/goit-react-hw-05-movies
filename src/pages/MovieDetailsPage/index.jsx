import { Suspense } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { useDetails } from "../../utils/hooks/useDetails";
import { Loader } from "../../components/Loader";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie } = useDetails(movieId);
  const location = useLocation();

  const backHref = location.state?.from ?? "/movies";

  if (!movie) return <Loader />;

  return (
    <div className={styles.container}>
      <NavLink to={backHref} className={styles.link}>
        ← Go back
      </NavLink>
      <div className={styles.containerDetail}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title}`}
          width="200"
        />
        <div className={styles.information}>
          <h2 className={styles.title}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className={styles.paragraph}>
            User Score: {Number.parseFloat(movie.vote_average * 10).toFixed(0)}%
          </p>
          <h3 className={styles.overview}>Overview</h3>
          <p className={styles.paragraph}>{movie.overview}</p>
          <h4 className={styles.genres}>Genres</h4>
          <p className={styles.paragraph}>
            {movie.genres.map((genre) => genre.name).join(",")}
          </p>
        </div>
      </div>
      <div className={styles.containerAddinfo}>
        <p className={styles.paragraph}>Additional Information</p>
        <ul>
          <li className={styles.itemLink}>
            <Link to="cast">Cast</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
