import styled from "styled-components";
import { motion } from "framer-motion";
export const Wrapper = styled.div`
  background: black;
`;
export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
export const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
export const Overview = styled.p`
  font-size: 36;
  width: 50%;
`;
export const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  position: relative;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
export const Slider = styled(motion.div)`
  display: flex;
  margin-bottom: 30px;
`;
export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
`;
export const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const BigMovie = styled(motion.div)`
  position: absolute;
  width: 60vw;
  z-index: 10000;
  border-radius: 15px;
  overflow: hidden;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
`;
export const BigCover = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
`;
export const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  font-size: 46px;
`;
export const BigHeader = styled.div`
  position: relative;
  top: -80px;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const BigContainer = styled.div`
  top: -80px;
  position: relative;
`;
export const BigOverview = styled.p`
  padding: 20px;
  color: ${(props) => props.theme.white.lighter};
`;
export const Rate = styled.div`
  font-size: 30px;
  color: #45cd66;
`;
export const Tags = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 25px;
`;
export const Tag = styled.div`
  margin-left: 5px;
`;
export const TBox = styled.div`
  display: flex;
`;
export const DBox = styled.div`
  width: 33%;
  border-radius: 10px;
  position: relative;
  margin: 10px;
  background-color: ${(props) => props.theme.black.darker};
`;
export const SmallCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 150px;
`;
export const With = styled.div`
  font-size: 30px;
`;
export const SmallTitle = styled.h2`
  font-size: 20px;
  position: absolute;
  top: 100px;
`;
export const SmallOverView = styled.div`
  font-size: 5px;
  padding: 10px;
`;
export const SlideButton = styled(motion.button)`
  position: relative;
  right: 0;
  color: white;
  background-color: ${(props) => props.theme.black.darker};
`;
export const SliderTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
  margin: 10px;
`;
