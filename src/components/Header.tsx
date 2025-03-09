import React from "react"; 
import styled from "styled-components";

const Navbar = styled.nav`
  background: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return <Navbar>🌤️ SOLINK Weather Dashboard</Navbar>;
};

export default Header;
