// hello-world-style.js
import styled from "styled-components";

export const HelloWorldStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full screen height */
  flex-direction: column;
  text-align: center;
  background-color: #ffffffff;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff6a00, #ee0979, #00c6ff, #7b2ff7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 5s infinite alternate;
  }

  p {
    font-size: 1.5rem;
    color: #444;
    margin-top: 1rem;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
`;