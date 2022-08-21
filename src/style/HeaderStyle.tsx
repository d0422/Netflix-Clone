import styled from "styled-components";
import { motion } from "framer-motion";
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: black;
  color: white;
  height: 80px;
  font-size: 12px;
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled(motion.svg)`
  margin: 50px;
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
export const Search = styled.span`
  color: white;
  svg {
    height: 25px;
  }
`;
export const Circle = styled.span`
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
