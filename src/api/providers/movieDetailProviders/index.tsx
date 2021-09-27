import {useConifg} from '../../../config';
import {
  MovieCredits,
  MovieDetails,
  VideoMovieResponse,
} from '../../../models/interfaces/movieDetails';
import {MovieApiResponse} from '../../../models/interfaces/movie';
export const useMovieDetailProviders = () => {
  const {axiosConfig, getOhtersViedo} = useConifg();
  //getOhtersViedo(false);
  const getMovieDetailProvider = (id: string) => {
    return axiosConfig.get<MovieDetails>(`/${id}`);
  };
  const getMovieCreditsProvider = (id: string) => {
    return axiosConfig.get<MovieCredits>(`/${id}/credits`);
  };
  const getMovieSimilarProvider = (id: string) => {
    return axiosConfig.get<MovieApiResponse>(`/${id}/similar`);
  };
  const getMovieVideosProvider = (id: string) => {
    //getOhtersViedo(true);
    return axiosConfig.get<VideoMovieResponse>(`/${id}/videos`);
  };
  return {
    getMovieDetailProvider,
    getMovieCreditsProvider,
    getMovieVideosProvider,
    getMovieSimilarProvider,
  };
};
