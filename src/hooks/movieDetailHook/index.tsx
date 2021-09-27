import React, {useEffect, useState} from 'react';
import {useMovieDetailService} from '../../api/services/movieDetailService';
import {
  Cast,
  MovieDetails,
  VideoMovie,
} from '../../models/interfaces/movieDetails';
import {MovieDetailsProps} from '../../models/interfaces/props/MovieDetailHookProps';
import {Movie} from '../../models/interfaces/movie';

interface MovieDetailHook {
  cast: Cast[];
  movieDetails: MovieDetails;
  movieVideo: VideoMovie[];
  similarVideo: Movie[];
}

export const useMovieDetail = ({id}: MovieDetailsProps) => {
  const [movieDetailState, setMovieDetailState] = useState<MovieDetailHook>({
    cast: [],
    movieDetails: Object.create({}),
    movieVideo: [],
    similarVideo: [],
  });
  const {
    getMovieDetailService,
    getMovieCreditsService,
    getMovieVideosService,
    getMovieSimilarService,
  } = useMovieDetailService();
  useEffect(() => {
    getMovieDetails();
  }, [id]);
  const getMovieDetails = async () => {
    try {
      const [movieDetails, movieCredits, movieVideo, similarVideo] =
        await Promise.all([
          getMovieDetailService(id),
          getMovieCreditsService(id),
          getMovieVideosService(id),
          getMovieSimilarService(id),
        ]);
      setMovieDetailState({
        movieDetails: movieDetails.data,
        cast: movieCredits.data.cast,
        movieVideo: movieVideo.data.results,
        similarVideo: similarVideo.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return {
    ...movieDetailState,
  };
};
