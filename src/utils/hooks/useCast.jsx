import { useEffect } from "react";
import { useState } from "react";
import { fetchCredits } from "utils/api/fetchMovies";

export const useCast = (movieId) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (movieId)
      fetchCredits(movieId).then((res) => {
        setCast([...res]);
      });
  }, [movieId]);

  return { cast };
};
