import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import { createGlobalStyle } from 'styled-components';


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
`;


function App() {
  return (
   
      
    <BrowserRouter>
    <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;

