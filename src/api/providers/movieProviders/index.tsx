import {useConifg} from '../../../config';

export const useMovieProviders = () => {
  const {axiosConfig} = useConifg();
  const getMoviePlayingNowProvider = () => {
    return axiosConfig.get('/now_playing');
  };
  return {
    getMoviePlayingNowProvider,
  };
};
