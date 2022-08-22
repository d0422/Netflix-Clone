import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGetMoviesResult, IGetTvResult } from "../api";
import { Box, Info, Row, SlideButton, Slider } from "../style/HomeStyle";
import { makeImagePath } from "../utils";
import { useSetRecoilState } from "recoil";
import { detailSelector, tvdetailSelector } from "../atoms";
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
const TvSlider = ({ data, type }: { data: IGetTvResult; type: string }) => {
  console.log(data);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const setDetail = useSetRecoilState(tvdetailSelector);
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
  const onBoxClicked = (tvId: number) => {
    navigate(`/tv/${tvId}`);
  };
  return (
    <>
      <Slider>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            variants={rowVariants}
            key={index + type}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween" }}
          >
            {data?.results
              ?.slice(offset * index, offset * index + offset)
              .map((tv) => (
                <Box
                  layoutId={String(tv.id) + type}
                  onClick={() => {
                    onBoxClicked(tv.id);
                    setDetail(tv.id + type);
                  }}
                  variants={BoxVariants}
                  initial="normal"
                  whileHover="hover"
                  transition={{
                    type: "tween",
                  }}
                  key={tv.id + type}
                  bgPhoto={makeImagePath(tv.backdrop_path, "w500")}
                >
                  <Info variants={InfoVariants}>
                    <h4>{tv.name}</h4>
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
        <SlideButton
          onClick={increaseIndex}
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
          }}
        >
          &gt;
        </SlideButton>
      </Slider>
    </>
  );
};

export default TvSlider;
