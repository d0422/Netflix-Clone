import { API_KEY } from "./apikey";

const BASE_PATH = "https://api.themoviedb.org/3";
interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}
export interface IGetMoviesResult {
  dates: {
    mininum: string;
    maximum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_result: number;
}
export interface Igenres {
  id: number;
  name: string;
}
export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
}
export function getDetail(movieId: string) {
  return fetch(
    `${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
  ).then((res) => res.json());
}
export function getSimilar(movieId: number) {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/similar?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
export function getPopular() {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
export function getToprated() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
export function search() {
  return fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=0b509fc29bded6c0c259c6203d006b72&language=ko-KR&query=dune&page=1&include_adult=false`
  );
}
