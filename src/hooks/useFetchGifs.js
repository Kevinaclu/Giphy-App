import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs(category)
      .then(setGifs)
      .finally(() => setLoading(false));
  }, [category]);

  return { gifs, loading };
};
