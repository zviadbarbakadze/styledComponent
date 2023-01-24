import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

export default function Intro() {
  return (
    <Container>
      <Left>
        <Title>Adventure in creative age</Title>
        <Descr>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
          consequuntur nesciunt? Minus at nemo rem blanditiis.
        </Descr>
        <Info>
          <Button>Start A Project</Button>
          <Contact>
            <Phone>Call us (123)12345-12345</Phone>
            <ContactTexr>For any question</ContactTexr>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src="https://random.imagecdn.app/500/500" />
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;
const Descr = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: crimson;
  font-weight: bold;
  @media (max-width: 480px) {
    color: orange;
  }
`;
const ContactTexr = styled.span`
  color: grey;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 60%;
  border-radius: 10px;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
`;
