import React, {useEffect, useState} from 'react';
import {useMovieDetailService} from '../../api/services/movieDetailService';
import {Cast, MovieDetails} from '../../models/interfaces/movieDetails';
import {MovieDetailsProps} from '../../models/interfaces/props/MovieDetailHookProps';

interface MovieDetailHook {
  cast: Cast[];
  movieDetails?: MovieDetails;
}

export const useMovieDetail = ({id}: MovieDetailsProps) => {
  const [movieDetailState, setMovieDetailState] = useState<MovieDetailHook>({
    cast: [],
  });
  const {getMovieDetailService, getMovieCreditsService} =
    useMovieDetailService();
  useEffect(() => {
    getMovieDetails();
  }, []);
  const getMovieDetails = async () => {
    const [movieDetails, movieCredits] = await Promise.all([
      getMovieDetailService(id),
      getMovieCreditsService(id),
    ]);

    setMovieDetailState({
      movieDetails: movieDetails.data,
      cast: movieCredits.data.cast,
    });
    console.log(movieDetails.data);
  };
  return {
    ...movieDetailState,
  };
};
