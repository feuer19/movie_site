import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMvoieGenre = () => {
  return api.get(`/genre/movie/list?language=en-US`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMvoieGenre,
    select: (data) => {
      return data.data.genres;
    },
    staleTime: 300000,
  });
};
