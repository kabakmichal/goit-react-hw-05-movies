import { useState, useEffect } from "react";
import { fetchTrend } from "../api";

export const useTrend = () => {
  const [trendList, setTrendList] = useState(null);

  useEffect(() => {
    fetchTrend().then((res) => {
      setTrendList([...res.results]);
    });
  }, []);

  return { trendList };
};
