import styled from "styled-components";

export const SymbolStyle = styled.div`
  width: 80%;
  margin: auto;
  padding: 40px 0;
  text-align: center;

  .heading {
    font-size: 32px;
    font-weight: 700;
    font-family: "Work-sans", sans-serif;
    width:520*75.2px
  }

  .sub__heading {
    width: 70%;
    margin: 15px auto 40px;
    color: #555;
    line-height: 1.6;
  }

  .vision-mission-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
  }

  .vision-box,
  .mission-box {
    width: 40%;
    text-align: left;
  }

  .vision-title {
    color: #f39c12;
    font-size: 20px;
    font-weight: 600;
  }

  .mission-title {
    color: #00aaff;
    font-size: 20px;
    font-weight: 600;
  }

  .divider {
    width: 2px;
    background: #ddd;
    height: 160px;
  }

  @media (max-width: 768px) {
    .vision-mission-wrapper {
      flex-direction: column;
      gap: 20px;
    }

    .vision-box,
    .mission-box {
      width: 100%;
    }

    .divider {
      display: none;
    }

    .sub__heading {
      width: 100%;
    }
  }
`;
