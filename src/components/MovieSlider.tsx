import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGetMoviesResult } from "../api";
import { Box, Info, Row, SlideButton, Slider } from "../style/HomeStyle";
import { makeImagePath } from "../utils";
import { useSetRecoilState } from "recoil";
import { detailSelector } from "../atoms";
const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
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
const InfoVariants = {
  hover: {
    opacity: 1,
  },
};
const offset = 6;
const MovieSlider = ({ data }: { data: IGetMoviesResult }) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const setDetail = useSetRecoilState(detailSelector);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const navigate = useNavigate();
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  return (
    <>
      <Slider>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            variants={rowVariants}
            key={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween" }}
          >
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Box
                  layoutId={String(movie.id)}
                  onClick={() => {
                    onBoxClicked(movie.id);
                    setDetail(movie.id + "");
                  }}
                  variants={BoxVariants}
                  initial="normal"
                  whileHover="hover"
                  transition={{
                    type: "tween",
                  }}
                  key={movie.id}
                  bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                >
                  <Info variants={InfoVariants}>
                    <h4>{movie.title}</h4>
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
        <SlideButton
          onClick={increaseIndex}
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{
            opacity: 1,
            scale: 1,
          }}
        >
          &gt;
        </SlideButton>
      </Slider>
    </>
  );
};

export default MovieSlider;
