import styled from "styled-components";

const Container = styled.div`
height: 100vh;
background-color: black;
font-family: sans-serif;
`

const Headline = styled.h1`
color: white;
display: flex;
justify-content: center;
align-items: center;
`


const Home = () => {
    return (
        <Container>
            <Headline>Reza ist soooo coool</Headline>
        </Container>
    );
}


export default Home;