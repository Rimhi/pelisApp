import {useConifg} from '../../../config';
import {
  MovieCredits,
  MovieDetails,
} from '../../../models/interfaces/movieDetails';
export const useMovieDetailProviders = () => {
  const {axiosConfig} = useConifg();
  const getMovieDetailProvider = (id: string) => {
    return axiosConfig.get<MovieDetails>(`/${id}`);
  };
  const getMovieCredits = (id: string) => {
    return axiosConfig.get<MovieCredits>(`/${id}/credits`);
  };
  return {
    getMovieDetailProvider,
    getMovieCredits,
  };
};
