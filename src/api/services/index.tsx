import {useMovieServices} from './movieServices';
import {useMovieDetailService} from './movieDetailService';

export const useServices = () => ({
  useMovieServices,
  useMovieDetailService,
});
