import React from 'react';
import Header from '../layout/header/Header';
import Info from './Info';
import Carousel from './Carousel';

function Home() {
    return (
        <>
            <Carousel />
            <Header>Welcome to January Island Escapes</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Info />
        </>
    )
}

export default Home;