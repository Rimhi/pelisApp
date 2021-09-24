import {useConifg} from '../../../config';
import {MovieApiResponse} from '../../../models/interfaces/movie';

export const useMovieProviders = () => {
  const {axiosConfig} = useConifg();
  const getMoviePlayingNowProvider = () => {
    return axiosConfig.get<MovieApiResponse>('/now_playing');
  };
  const getMoviePopularProvider = () => {
    return axiosConfig.get<MovieApiResponse>('/popular');
  };
  const getMovieTopRateProvider = () => {
    return axiosConfig.get<MovieApiResponse>('/top_rated');
  };
  const getMovieUpcomingProvider = () => {
    return axiosConfig.get<MovieApiResponse>('/upcoming');
  };
  return {
    getMoviePlayingNowProvider,
    getMoviePopularProvider,
    getMovieTopRateProvider,
    getMovieUpcomingProvider,
  };
};
