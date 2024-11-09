import styled from "styled-components";
import Navbar from "../components/Navbar";



const Container = styled.div`
height: 100vh;
background: rgb(27,7,56);
background: linear-gradient(164deg, rgba(27,7,56,1) 32%, rgba(111,84,153,1) 92%);
font-family: sans-serif;

 
`



const FirstWords = styled.h1`
    margin-top: 10%;
    display: flex;
    font-size: 5em;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    color: white;
`;
const SecondWords = styled.h2`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    color: white;
`








const Home = () => {

    
    return (
        <Container>
            <Navbar />
            <FirstWords>The easiest Cloud you will ever use</FirstWords>
            <SecondWords>
            Share Files and work with your partners fast<br></br>
            Communicate easy and stay up to date <br></br>
            It was never that easy
            </SecondWords>
        </Container>    
    );
}


export default Home;