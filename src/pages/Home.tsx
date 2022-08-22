import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  getMovies,
  getPopular,
  getToprated,
  getUpcoming,
  IGetMoviesResult,
} from "../api";
import { makeImagePath } from "../utils";
import {
  Banner,
  Loader,
  Overview,
  SliderTitle,
  Title,
  Wrapper,
} from "../style/HomeStyle";
import MovieSlider from "../components/MovieSlider";
import Detail from "../components/Detail";
const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const { data: popular } = useQuery(["popular"], getPopular);
  const { data: topRated } = useQuery(["topRated"], getToprated);
  const { data: Upcoming } = useQuery(["Upcoming"], getUpcoming);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <SliderTitle>현재 상영작</SliderTitle>
          <MovieSlider data={data as any} type={"nowplaying"}></MovieSlider>
          <SliderTitle>최근 인기작</SliderTitle>
          <MovieSlider data={popular} type={"popular"}></MovieSlider>
          <SliderTitle>최고 평점</SliderTitle>
          <MovieSlider data={topRated} type={"topRated"}></MovieSlider>
          <SliderTitle>곧 개봉</SliderTitle>
          <MovieSlider data={Upcoming} type={"Upcoming"}></MovieSlider>
        </>
      )}
      <Detail></Detail>
    </Wrapper>
  );
};

export default Home;
