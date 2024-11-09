import styled from "styled-components";
import IconImage from "./newiconpng-Photoroom-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px; /* Adds space between buttons */
`;

const Headline = styled.h1`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Ensures the headline takes up the available space */
  margin: 0;
  font-family: 'Exo 2', sans-serif;
`;

const Icon = styled.img`
  width: 50px; /* Adjust icon size */
  height: auto;
  margin-right: 20px; /* Space between the icon and buttons */
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: transparent;
  font-size: large;
  color: #5bd4ef;
  border: none;
  &:hover {
    color: #3ca1b8;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const nav = useNavigate();

  const gotohome = () => {
    nav("/home");
  };

  const gotologin = () => {
    nav("/login");
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon src={IconImage} alt="Icon" onClick={gotohome} />
        <Buttons>
          <Button>Home</Button>
          <Button>Files</Button>
          <Button>Chat</Button>
        </Buttons>
      </div>
      <Headline>NanoNest</Headline>
      <Buttons>
        <Button onClick={gotologin}>Login</Button>
        <Button>Register</Button>
      </Buttons>
    </Container>
  );
};

export default Navbar;