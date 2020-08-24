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
                <SubHeading>Are you looking for the perfect place to rest? Do you love white beach and clear water? We'll help you find the perfect vacation location.</SubHeading>
                <Info />
            </Container>
        </>
    )
}

export default Home;