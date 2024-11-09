import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(164deg, rgba(27, 7, 56, 1) 32%, rgba(111, 84, 153, 1) 92%);
`;

const MainLoginDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
  padding: 20px;
  /* Border with gradient */
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) 1;
  border-radius: 55px;
  gap: 10px; /* Set grid gap to adjust spacing between input fields and labels */
`;

const Email = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px; /* Reduce the space between input fields and labels */
  font-size: 16px;
  transform: translate(0,-80%);
  border-radius: 5px;
  border: 3px solid #3ca1b8;
  outline: none;
  background-color: transparent;
  color: white;
  &:hover {
    border: 3px solid #9d1168;
  }
  &:focus {
    border: 3px solid #9d1168;
  }
`;

const Password = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  transform: translate(0,-80%);
  font-size: 16px;
  border-radius: 5px;
  border: 3px solid #3ca1b8;
  outline: none;
  color: white;
  background-color: transparent;
  &:hover {
    border: 3px solid #9d1168;
  }
  &:focus {
    border: 3px solid #9d1168;
  }
`;

const Span = styled.span`
  color: white;
  font-size: 16px;
  
  font-family: 'Exo 2', sans-serif;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Exo 2', sans-serif;
  font-size: 24px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    font-weight: 800;
    padding: 20px;
    width: 115%;
    border-radius: 15px;
    background-color: transparent;
    border: 3px solid #3ca1b8;
    color: #3ca1b8;
    &:hover {
        background-color: #3ca1b8;
        color: white;
    }
`

const Login = () => {

    const [emailvalue, setemailvalue] = useState('');
    const [passwordvalue, setpasswordvalue] = useState('');

    const onemailchange = (e) => {
        setemailvalue(e.target.value);
    }
    const onpasswordchange = (e) => {
        setpasswordvalue(e.target.value);
    }

   

  return (
    <Container>
      <Navbar />
      <MainLoginDiv>
        <Headline>Login</Headline>
        <Span>Email</Span>
        <Email 
        onChange={onemailchange}
        value={emailvalue}
        type="email"
        />
        <Span>Password</Span>
        <Password 
        onChange={onpasswordchange}
        value={passwordvalue}
        type="password"
        />
        <Button>Login</Button>

      </MainLoginDiv>
    </Container>
  );
};

export default Login;