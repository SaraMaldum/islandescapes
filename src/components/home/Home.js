import React from 'react';
import Header from '../layout/headings/Heading1';
import Info from './Info';
import Carousel from './Carousel';
import SubHeading from '../layout/headings/SubHeading';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <>
            <Carousel />
            <Container>
                <Header>Welcome to January Island Escapes</Header>
                <SubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</SubHeading>
                <Info />
            </Container>
        </>
    )
}

export default Home;