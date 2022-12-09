import { useEffect, useState } from "react";
import { fetchReviews } from "utils/api/fetchMovies";

export const useReviews = (movieId) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (movieId)
      fetchReviews(movieId).then((res) => {
        setReviews([...res.results]);
      });
  }, [movieId]);

  return { reviews };
};
