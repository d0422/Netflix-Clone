import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.div)`
  display: flex;
`;
export const ContentBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
`;
export const Cont = styled(motion.div)``;
export const ImgBox = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  margin: 10px;
  width: 100%;
  position: relative;
`;
export const Result = styled.div`
  margin-top: 100px;
`;
