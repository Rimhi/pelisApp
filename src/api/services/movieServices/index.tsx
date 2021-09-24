import {useProviders} from '../../providers';
import {MovieApiResponse} from '../../../models/interfaces/movie';
import {AxiosResponse} from 'axios';

export const useMovieServices = () => {
  const {useMovieProviders} = useProviders();
  const {
    getMoviePlayingNowProvider,
    getMoviePopularProvider,
    getMovieTopRateProvider,
    getMovieUpcomingProvider,
  } = useMovieProviders();
  const getMoviePlayingNowService = () => {
    return new Promise<AxiosResponse<MovieApiResponse>>(
      async (resolve, reject) => {
        try {
          resolve(getMoviePlayingNowProvider());
        } catch (e) {
          reject(e);
        }
      },
    );
  };
  const getMoviePopularService = () => {
    return new Promise<AxiosResponse<MovieApiResponse>>(
      async (resolve, reject) => {
        try {
          resolve(getMoviePopularProvider());
        } catch (e) {
          reject(e);
        }
      },
    );
  };
  const getMovieTopRatedService = () => {
    return new Promise<AxiosResponse<MovieApiResponse>>(
      async (resolve, reject) => {
        try {
          resolve(getMovieTopRateProvider());
        } catch (e) {
          reject(e);
        }
      },
    );
  };
  const getMovieUpcomingService = () => {
    return new Promise<AxiosResponse<MovieApiResponse>>(
      async (resolve, reject) => {
        try {
          resolve(getMovieUpcomingProvider());
        } catch (e) {
          reject(e);
        }
      },
    );
  };
  return {
    getMoviePlayingNowService,
    getMoviePopularService,
    getMovieTopRatedService,
    getMovieUpcomingService,
  };
};
