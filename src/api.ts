import { API_KEY } from "./apikey";

const BASE_PATH = "https://api.themoviedb.org/3";
interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}
interface ITv {
  backdrop_path: string;
  id: number;
  name: string;
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
export interface IGetTvResult {
  page: number;
  results: ITv[];
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
export function getUpcoming() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=ko-KR`
  ).then((res) => res.json());
}

export function getPopularTv() {
  return fetch(
    `${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
export function getTopratedTv() {
  return fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
export function getAiringTv() {
  return fetch(
    `${BASE_PATH}/tv/airing_today?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
export function getOnAirTv() {
  return fetch(
    `${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
export function getTvDetail(TvId: string) {
  return fetch(`
  ${BASE_PATH}/tv/${TvId}?api_key=${API_KEY}&language=ko-KR`).then((res) =>
    res.json()
  );
}

export function getTvSimliar(TvId: string) {
  return fetch(`
  ${BASE_PATH}/tv/${TvId}/similar?api_key=${API_KEY}&language=ko-KR&page=1`).then(
    (res) => res.json()
  );
}
export function search(keyword: string) {
  return fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${keyword}&page=1`
  ).then((res) => res.json());
}
export function searchTv(keyword: string) {
  return fetch(
    `${BASE_PATH}/search/tv?api_key=${API_KEY}&language=ko-KR&query=${keyword}&page=1`
  ).then((res) => res.json());
}
