import React from "react";
import styled from "styled-components";

export default function Minicard() {
  return (
    <Container>
      <Image src="https://raw.githubusercontent.com/safak/youtube/react-website/src/img/search.png" />
      <Text>Lorem ipsum dolor sit amet .</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.46);
  -webkit-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.46);
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;
