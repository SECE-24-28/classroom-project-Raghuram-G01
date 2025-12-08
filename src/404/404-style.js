import styled from "styled-components";

export const NotFoundStyle = styled.div`
  .notfound {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    background: #f5f5f7;
  }

  .title {
    font-size: 8vw;
    font-weight: 900;
    color: #1d7fec;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .para {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    color: #6b6b6b;
    margin-bottom: 2.5rem;
    font-weight: 500;
  }

  .link {
    background: #1d7fec;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.875rem 2rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(29, 127, 236, 0.2);
    
    &:hover {
      background: #0d6edc;
      box-shadow: 0 4px 12px rgba(29, 127, 236, 0.3);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .notfound {
      padding: 1rem;
    }
  }
`;