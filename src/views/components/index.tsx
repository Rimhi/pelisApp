//import {MoviePoster} from './MoviePoster';
import HorizontalSlider from './HorizontalSlider';
import {MovieDetailsComponent} from './MovieDetails';
import {CastComponent} from './Cast';
import {BackButtonComponent} from './BackButton';
import {lazy} from 'react';
import CarrouselComponent from "./Carrousel";
//const HorizontalSlider = lazy(() => import('./HorizontalSlider'));
const MoviePoster = lazy(() => import('./MoviePoster'));
//const CarrouselComponent = lazy(() => import('./Carrousel'));
export const useComponents = () => ({
  MoviePoster,
  HorizontalSlider,
  MovieDetailsComponent,
  CastComponent,
  BackButtonComponent,
  CarrouselComponent,
});
