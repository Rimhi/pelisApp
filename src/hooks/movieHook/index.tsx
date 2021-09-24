import React, {useEffect, useState} from 'react';
import {Movie} from '../../models/interfaces/movie';
import {useMovieServices} from '../../api/services/movieServices';

interface MovieHook {
  playingNow: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
export const useMovie = () => {
  const [movies, setMovies] = useState<MovieHook>({
    playingNow: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const {
    getMoviePlayingNowService,
    getMoviePopularService,
    getMovieUpcomingService,
    getMovieTopRatedService,
  } = useMovieServices();
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const [playingNow, popular, topRated, upcoming] = await Promise.all([
      getMoviePlayingNowService(),
      getMoviePopularService(),
      getMovieTopRatedService(),
      getMovieUpcomingService(),
    ]);
    setMovies({
      playingNow: playingNow.data.results,
      popular: popular.data.results,
      upcoming: upcoming.data.results,
      topRated: topRated.data.results,
    });
  };
  return {
    ...movies,
  };
};
