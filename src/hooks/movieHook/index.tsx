import React, {useEffect, useState} from 'react';
import {Movie} from '../../models/interfaces/movie';
import {useMovieServices} from '../../api/services/movieServices';

export const useMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const {getMoviePlayingNowService} = useMovieServices();
  useEffect(() => {
    getPlayingMovieNow();
  }, []);
  const getPlayingMovieNow = async () => {
    const {data} = await getMoviePlayingNowService();
    setMovies(data.results);
  };
  return {
    movies,
  };
};
