import React from "react";
import { useQuery } from "react-query";
import {
  getAiringTv,
  getOnAirTv,
  getPopularTv,
  getTopratedTv,
  IGetMoviesResult,
} from "../api";
import Detail from "../components/Detail";
import MovieSlider from "../components/MovieSlider";
import TvDetail from "../components/TvDetail";
import TvSlider from "../components/TvSlider";
import {
  Banner,
  Loader,
  Overview,
  SliderTitle,
  Title,
  Wrapper,
} from "../style/HomeStyle";
import { makeImagePath } from "../utils";

const Tv = () => {
  const { data: popular, isLoading } = useQuery(
    ["tvs", "nowPlaying"],
    getPopularTv
  );
  const { data: topRated } = useQuery(["tvs", "toprated"], getTopratedTv);
  const { data: airing } = useQuery(["airing"], getAiringTv);
  const { data: OnAir } = useQuery(["OnAir"], getOnAirTv);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgPhoto={makeImagePath(popular?.results[0].backdrop_path || "")}
          >
            <Title>{popular?.results[0].title}</Title>
            <Overview>{popular?.results[0].overview}</Overview>
          </Banner>
          <SliderTitle>최고 인기작</SliderTitle>
          <TvSlider data={popular} type={"tvpopular"}></TvSlider>
          <SliderTitle>최고 평점</SliderTitle>
          <TvSlider data={topRated} type={"topRated"}></TvSlider>
          <SliderTitle>오늘 방영</SliderTitle>
          <TvSlider data={airing} type={"airing"}></TvSlider>
          <SliderTitle>방영 중 인 작품</SliderTitle>
          <TvSlider data={OnAir} type={"OnAir"}></TvSlider>
        </>
      )}
      <TvDetail></TvDetail>
    </Wrapper>
  );
};

export default Tv;
