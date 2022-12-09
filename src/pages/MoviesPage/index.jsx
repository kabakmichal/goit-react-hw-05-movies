import { useSearchParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useSearch } from "utils/hooks/useSearch";
import styles from "./MoviesPage.module.css";
import { Loader } from "components/Loader";
import { Searchbar } from "components/Searchbar";

const SearchMovies = lazy(() => import("components/SearchMovies"));

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const { movies } = useSearch(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movieName.value.toLowerCase() });
    form.reset();
  };

  return (
    <div className={styles.container}>
      <Searchbar handleSubmit={handleSubmit} />
      <Suspense fallback={<Loader />}>
        <SearchMovies movies={movies} />
      </Suspense>
    </div>
  );
};
