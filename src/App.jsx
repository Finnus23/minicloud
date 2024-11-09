import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import { createGlobalStyle } from 'styled-components';
import Login from "./pages/Login";


const GlobalStyle = createGlobalStyle`
  
  ::selection {
    background-color: #ffffff; /* Change to your desired highlight color */
    color: #000000; /* Change to your desired text color */
  }

  /* For Firefox */
  ::-moz-selection {
    background-color: #ffffff; /* Change to your desired highlight color */
    color: #000000; /* Change to your desired text color */
  }
  font-family: 'Exo 2', sans-serif;
`;


function App() {
  return (
   
      
    <BrowserRouter>
    <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;

