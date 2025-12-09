import React from "react";
import styled from "styled-components";
import reviews from "./data";
import Testimonials from "./components/testimonials";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e197ebff, #a789d9ff); 
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.35rem; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff; 
  font-weight: 700;
  margin-bottom: 0.5rem;
`;


const Divider = styled.div`
  background:linear-gradient(90deg, #f66e5cff, #fa8ba5ff); 
  height: 4px;
  width: 20%;
  margin-top: 0.25rem;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <AppContainer>
      <ContentWrapper>
        <Title>Our Testimonials</Title>
        <Divider />
        <Testimonials reviews={reviews} />
      </ContentWrapper>
    </AppContainer>
  );
};

export default App;