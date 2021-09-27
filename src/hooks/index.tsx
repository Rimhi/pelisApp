import {useMovieDetail} from './movieDetailHook';
import {useMovie} from './movieHook';
import {useFade} from './fade';

export const useHooks = () => ({
  useMovieDetail,
  useMovie,
  useFade,
});
