import {useMovieProviders} from './movieProviders';
import {useMovieDetailProviders} from './movieDetailProviders';

export const useProviders = () => ({
  useMovieProviders,
  useMovieDetailProviders,
});
