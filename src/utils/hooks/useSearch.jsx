import { useState, useEffect } from "react";
import { fetchSearch } from "utils/api/fetchMovies";

export const useSearch = (query) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === "") return;
    fetchSearch(query).then((res) => {
      setMovies([...res.results]);
    });
  }, [query]);

  return { movies };
};
