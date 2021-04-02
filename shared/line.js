/** @jsx jsx */

import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

export const LeftLine = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
  border: 0.1rem solid grey;
  padding: 0.1rem;
  max-width: max-content;
  left: 5%;
  top: 30%;
  & div:first-of-type {
      padding-bottom: 0.2rem;
  }
  & div:last-of-type {
      padding-top: 0.2rem;
  }
`

export const LeftItem = styled.div`
  border: 0.01rem solid #16f533;
  /* padding: 0.1rem; */
  height: 2rem;
`

export const styledText = styled.div`
  color: whitesmoke;
  font-size: 0.5rem;
  writing-mode: horizontal-tb;
  text-orientation: mixed;
`

export const BottomLine = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  border: 0.1rem solid grey;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
`

export const Circle = styled.div`
  width: 0.1rem;
  height: 0.1rem;
  padding: 0.1rem;
  border: 0.1rem solid grey;
  background: #000d23;
  filter: drop-shadow(0 0 0.2rem #16f533);
  border-radius: 50%;
`

export const RightLine = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  border: 0.1rem solid grey;
  padding: 0.1rem;
  /* max-width: max-content; */
  right: 5%;
  top: 30%;
`

export const RightItem = styled.div`
  width: 0.15rem;
  height: 0.15rem;
  /* padding: 0.5rem; */
  border: 0.1rem solid #16f533;
  background: #000d23;
  transform: rotate(45deg);
`

export const Square = styled.div`
  width: 0.15rem;
  height: 0.15rem;
  background: #000d23;
  border: 0.1rem solid grey;
  transform: rotate(45deg);
`

export const Line = styled.div`
  position: absolute;
  z-index: -1;
  border: 0.001rem solid grey;
  filter: drop-shadow(0 0 0.5rem grey);
  width: 65vw;
  left: 50%;
  transform: translateX(-50%);
`

export const SocialLine = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`