import {useMovieDetailProviders} from '../../providers/movieDetailProviders';
import {AxiosResponse} from 'axios';
import {
  MovieCredits,
  MovieDetails,
  VideoMovieResponse,
} from '../../../models/interfaces/movieDetails';
import {MovieApiResponse} from '../../../models/interfaces/movie';

export const useMovieDetailService = () => {
  const {
    getMovieDetailProvider,
    getMovieCreditsProvider,
    getMovieVideosProvider,
    getMovieSimilarProvider,
  } = useMovieDetailProviders();
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
        resolve(getMovieCreditsProvider(id));
      } catch (e) {
        reject(e);
      }
    });
  };
  const getMovieVideosService = (id: string) => {
    return new Promise<AxiosResponse<VideoMovieResponse>>((resolve, reject) => {
      try {
        resolve(getMovieVideosProvider(id));
      } catch (e) {
        reject(e);
      }
    });
  };
  const getMovieSimilarService = (id: string) => {
    return new Promise<AxiosResponse<MovieApiResponse>>((resolve, reject) => {
      try {
        resolve(getMovieSimilarProvider(id));
      } catch (e) {
        reject(e);
      }
    });
  };
  return {
    getMovieDetailService,
    getMovieCreditsService,
    getMovieVideosService,
    getMovieSimilarService,
  };
};
