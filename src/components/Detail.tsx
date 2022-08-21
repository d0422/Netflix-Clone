import { AnimatePresence, useScroll } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getDetail, getSimilar, Igenres, IGetMoviesResult } from "../api";
import { detailSelector } from "../atoms";
import {
  BigContainer,
  BigCover,
  BigHeader,
  BigMovie,
  BigOverview,
  BigTitle,
  Overlay,
  Rate,
  Tag,
  Tags,
} from "../style/HomeStyle";
import { makeImagePath } from "../utils";
import Similar from "./Similar";

const Detail = () => {
  const navigate = useNavigate();
  const movieId = useRecoilValue(detailSelector);
  const setMovieId = useSetRecoilState(detailSelector);
  const { scrollY } = useScroll();
  const { data: detail } = useQuery(["detail", movieId], () =>
    getDetail(movieId)
  );
  const OverlayClick = () => {
    setMovieId("");
    navigate(-1);
  };
  return (
    <AnimatePresence>
      {movieId ? (
        <>
          <Overlay
            onClick={OverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <BigMovie layoutId={movieId} style={{ top: scrollY.get() }}>
            {movieId && (
              <>
                <BigCover
                  style={{
                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                      detail?.backdrop_path,
                      "w1280"
                    )})`,
                  }}
                ></BigCover>
                <BigHeader>
                  <BigTitle>{detail?.title}</BigTitle>
                  <Rate>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 51 48"
                    >
                      <path
                        fill="#45cd66"
                        stroke="#45cd66"
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                      />
                    </svg>
                    {detail?.vote_average.toFixed(2)}
                  </Rate>
                </BigHeader>
                <BigContainer>
                  <BigOverview>{detail?.overview}</BigOverview>
                  <Tags>
                    장르 :
                    {detail?.genres.map((g: Igenres, i: number) => (
                      <Tag key={i}>{g.name}</Tag>
                    ))}
                  </Tags>
                </BigContainer>
                <Similar movieid={detail?.id}></Similar>
              </>
            )}
          </BigMovie>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Detail;
