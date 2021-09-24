import {useMovieDetailProviders} from '../../providers/movieDetailProviders';
import {AxiosResponse} from 'axios';
import {
  MovieCredits,
  MovieDetails,
} from '../../../models/interfaces/movieDetails';

export const useMovieDetailService = () => {
  const {getMovieDetailProvider, getMovieCredits} = useMovieDetailProviders();
  const getMovieDetailService = (id: string) => {
    return new Promise<AxiosResponse<MovieDetails>>((resolve, reject) => {
      try {
        resolve(getMovieDetailProvider(id));
      } catch (e) {
        reject(e);
      }
    });
  };
  const getMovieCreditsService = (id: string) => {
    return new Promise<AxiosResponse<MovieCredits>>((resolve, reject) => {
      try {
        resolve(getMovieCredits(id));
      } catch (e) {
        reject(e);
      }
    });
  };
  return {
    getMovieDetailService,
    getMovieCreditsService,
  };
};
