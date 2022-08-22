import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { search, searchTv } from "../api";
import { Info, SliderTitle } from "../style/HomeStyle";
import {
  Cont,
  Container,
  ContentBox,
  ImgBox,
  Result,
} from "../style/SearchStyle";
import { makeImagePath } from "../utils";
import { AnimatePresence } from "framer-motion";
import Detail from "../components/Detail";
import { useSetRecoilState } from "recoil";
import { detailSelector, tvdetailSelector } from "../atoms";
import TvDetail from "../components/TvDetail";
interface Iresult {
  backdrop_path: string;
  overview: string;
  title: string;
  id: number;
}
interface ITvresult {
  backdrop_path: string;
  overview: string;
  name: string;
  id: number;
}
const InfoVariants = {
  hover: {
    opacity: 1,
  },
};
const BoxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 99,
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      type: "tween",
      duration: 0.3,
    },
  },
};
const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data: result } = useQuery(["search", keyword], () =>
    search(keyword ? keyword : "")
  );
  const { data: tv } = useQuery(["search", "tv", keyword], () =>
    searchTv(keyword ? keyword : "")
  );
  const [cat, setCat] = useState("");
  const setDetail = useSetRecoilState(detailSelector);
  const setTvDetail = useSetRecoilState(tvdetailSelector);
  const results = result?.results?.filter((one: Iresult) => one.backdrop_path);
  const tvresults = tv?.results?.filter((one: Iresult) => one.backdrop_path);
  const navigate = useNavigate();
  const onMovieClicked = (id: number) => {
    navigate(`/search/${id}`);
  };
  const data = [
    results?.slice(0, 6),
    results?.slice(7, 13),
    results?.slice(14, 20),
  ];
  const tvdata = [
    tvresults?.slice(0, 6),
    tvresults?.slice(7, 13),
    tvresults?.slice(14, 20),
  ];
  console.log(cat);
  return (
    <Result>
      <SliderTitle>영화</SliderTitle>
      {data?.map((d) => (
        <Container>
          {d?.map((content: Iresult) => (
            <>
              <ImgBox
                key={content.id}
                onClick={() => {
                  setCat("movie");
                  setDetail(content.id + "");
                  onMovieClicked(content.id);
                }}
                bgPhoto={makeImagePath(content.backdrop_path)}
                variants={BoxVariants}
                initial="normal"
                whileHover="hover"
                transition={{
                  type: "tween",
                }}
              >
                <Info variants={InfoVariants}>{content.title}</Info>
              </ImgBox>
            </>
          ))}
        </Container>
      ))}
      <SliderTitle>TV쇼</SliderTitle>
      {tvdata?.map((d) => (
        <Container>
          {d?.map((content: ITvresult) => (
            <>
              <ImgBox
                key={content.id}
                onClick={() => {
                  setCat("tv");
                  setTvDetail(content.id + "");
                  onMovieClicked(content.id);
                }}
                bgPhoto={makeImagePath(content.backdrop_path)}
                variants={BoxVariants}
                initial="normal"
                whileHover="hover"
                transition={{
                  type: "tween",
                }}
              >
                <Info variants={InfoVariants}>{content.name}</Info>
              </ImgBox>
            </>
          ))}
        </Container>
      ))}
      {cat === "movie" ? <Detail></Detail> : null}
      {cat === "tv" ? <TvDetail></TvDetail> : null}
    </Result>
  );
};

export default Search;
