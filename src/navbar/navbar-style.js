import styled from "styled-components";

export const NavbarStyle = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 50px;
    background: #111827;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .logo {
    font-size: 24px;
    font-weight: 700;
    color: #facc15;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
    margin-left: auto;
  }

  .nav-links li a {
    text-decoration: none;
    font-size: 16px;
    color: #e5e7eb;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    position: relative;
    padding: 6px 10px;
    border-radius: 6px;
  }

  .nav-links li a:hover {
    background: #2563eb;
    color: #fff;
    box-shadow: 0 2px 8px rgba(37,99,235,0.4);
  }
`;