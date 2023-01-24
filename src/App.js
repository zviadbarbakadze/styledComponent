import "./App.css";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntroShape = styled.div`
  ${Shape};
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
`;

const FeatureShape = styled.div`
  ${Shape};
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
`;

const ServiceShape = styled.div`
  ${Shape};
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const PriceShape = styled.div`
  ${Shape};
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
`;
