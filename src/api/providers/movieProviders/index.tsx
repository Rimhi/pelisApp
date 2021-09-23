import {useConifg} from '../../../config';
import {MovieGetPlayingNow} from '../../../models/interfaces/movie';

export const useMovieProviders = () => {
  const {axiosConfig} = useConifg();
  const getMoviePlayingNowProvider = () => {
    return axiosConfig.get<MovieGetPlayingNow>('/now_playing');
  };
  return {
    getMoviePlayingNowProvider,
  };
};
