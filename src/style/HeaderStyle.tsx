import styled from "styled-components";
import { motion } from "framer-motion";
export const Nav = styled(motion.nav)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  color: white;
  height: 80px;
  font-size: 12px;
  padding: 20px 60px;
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;
export const Items = styled.ul`
  display: flex;
  align-items: center;
`;
export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  position: relative;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;
export const Search = styled.form`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  svg {
    height: 25px;
  }
`;
export const Circle = styled(motion.span)`
  border-radius: 5px;
  position: absolute;
  width: 5px;
  height: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;
export const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  left: -185px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;
