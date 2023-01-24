import React from "react";
import styled from "styled-components";

export default function AnimatedShapes() {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
}

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: skyblue;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(90vw, 90vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: orange;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(90vw, -90vh);
    }
  }
`;

const Rect = styled.div`
  width: 100px;
  height: 50px;

  background-color: purple;
  opacity: 0.7;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rect 25s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(90vw, -50vh);
    }
  }
`;
