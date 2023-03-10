import React, { useState } from "react";
import styled from "styled-components";
import Minicard from "./Minicard";

export default function Service() {
  const [open, setOpen] = useState(false);
  const smalScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image open={open} src="https://random.imagecdn.app/500/500" />
        <Video
          open={open}
          autoplay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            animi dolores nisi praesentium soluta nesciunt eius!
          </Desc>
          <CardContainer>
            <Minicard />
            <Minicard />
            <Minicard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src="https://raw.githubusercontent.com/safak/youtube/react-website/src/img/play.png" />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smalScreen && open && (
        <Modal>
          <Video
            open={open}
            autoplay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
  box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.46);
  -webkit-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.46);
`;
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 15px 20px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  margin-top: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30px;
`;
