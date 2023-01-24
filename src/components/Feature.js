import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

export default function Feature() {
  return (
    <Container>
      <Left>
        <Image src="https://random.imagecdn.app/500/500" />
      </Left>
      <Right>
        <Title>
          <b>Good</b> design <br />
          <b>Good</b> business <br />
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste
          repellat harum.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  display: flex;
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 75%;
  border-radius: 10px;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
`;
const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  font-size: 16px;
  border-radius: 20px;
  padding: 15px 20px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  margin-top: 20px;
`;
