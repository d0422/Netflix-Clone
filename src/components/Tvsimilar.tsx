import React from "react";
import { useQuery } from "react-query";
import { getSimilar, getTvSimliar } from "../api";
import {
  BigCover,
  DBox,
  SmallCover,
  SmallOverView,
  SmallTitle,
  TBox,
  With,
} from "../style/HomeStyle";
import { makeImagePath } from "../utils";
interface Iresults {
  backdrop_path: string;
  name: string;
  release_date: string;
  overview: string;
}
interface ISimilar {
  results: Iresults[];
}

const TvSimilar = ({ TvId }: { TvId: number }) => {
  const { data: similar } = useQuery(["tvsimilar", TvId], () =>
    getTvSimliar(TvId + "")
  );
  const results = [
    similar?.results?.slice(0, 4),
    similar?.results?.slice(5, 9),
    similar?.results?.slice(10, 14),
    similar?.results?.slice(15, 19),
  ];
  console.log(results);
  return (
    <>
      <With>함께 시청한 컨텐츠</With>
      {results?.map((result, i) => (
        <TBox key={i}>
          {result?.map((data: Iresults) => (
            <DBox>
              <SmallCover
                style={{
                  backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                    data.backdrop_path,
                    "w1280"
                  )})`,
                }}
              >
                <SmallTitle>{data.name}</SmallTitle>
              </SmallCover>
              <SmallOverView>
                {data?.overview ? data.overview : "데이터가 없습니다."}
              </SmallOverView>
            </DBox>
          ))}
        </TBox>
      ))}
    </>
  );
};

export default TvSimilar;
