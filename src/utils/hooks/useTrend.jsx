import { useState, useEffect } from "react";
import { fetchTrend } from "utils/api/fetchMovies";

export const useTrend = () => {
  const [trendList, setTrendList] = useState(null);

  useEffect(() => {
    fetchTrend().then((res) => {
      setTrendList([...res.results]);
    });
  }, []);

  return { trendList };
};
