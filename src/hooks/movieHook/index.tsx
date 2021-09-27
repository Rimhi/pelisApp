import React, {useCallback, useEffect, useState} from 'react';
import {Movie} from '../../models/interfaces/movie';
import {useMovieServices} from '../../api/services/movieServices';
import {trackPromise} from 'react-promise-tracker';

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
    console.log('render');
  }, []);
  const getMovies = async () => {
    try {
      const [playingNow, popular, topRated, upcoming] = await trackPromise(
        Promise.all([
          getMoviePlayingNowService(),
          getMoviePopularService(),
          getMovieTopRatedService(),
          getMovieUpcomingService(),
        ]),
      );
      setMovies({
        ...movies,
        playingNow: playingNow.data.results,
        popular: popular.data.results,
        upcoming: upcoming.data.results,
        topRated: topRated.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return {
    ...movies,
  };
};
