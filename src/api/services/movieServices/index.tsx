import {useProviders} from '../../providers';
import {MovieGetPlayingNow} from '../../../models/interfaces/movie';
import {AxiosResponse} from 'axios';

export const useMovieServices = () => {
  const {useMovieProviders} = useProviders();
  const {getMoviePlayingNowProvider} = useMovieProviders();
  const getMoviePlayingNowService = () => {
    return new Promise<AxiosResponse<MovieGetPlayingNow>>(
      async (resolve, reject) => {
        try {
          resolve(getMoviePlayingNowProvider());
        } catch (e) {
          reject(e);
        }
      },
    );
  };
  return {
    getMoviePlayingNowService,
  };
};
