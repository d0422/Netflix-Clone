import { AnimatePresence, useScroll } from "framer-motion";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getDetail, getTvDetail, Igenres } from "../api";
import { detailSelector, tvdetailSelector } from "../atoms";
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
import TvSimilar from "./Tvsimilar";

const TvDetail = () => {
  const navigate = useNavigate();
  const TvId = useRecoilValue(tvdetailSelector);
  const setTvId = useSetRecoilState(tvdetailSelector);
  const { scrollY } = useScroll();
  const { data: detail } = useQuery(["detail", TvId], () => getTvDetail(TvId));
  const OverlayClick = () => {
    setTvId("");
    navigate(-1);
  };
  return (
    <AnimatePresence>
      {TvId ? (
        <>
          <Overlay
            onClick={OverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <BigMovie layoutId={TvId} style={{ top: scrollY.get() }}>
            {TvId && (
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
                  <BigTitle>{detail?.name}</BigTitle>
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
                <TvSimilar TvId={detail?.id}></TvSimilar>
              </>
            )}
          </BigMovie>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default TvDetail;
