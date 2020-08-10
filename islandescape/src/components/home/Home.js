import React from 'react';
import Header from '../layout/header/Header';
import Info from './Info';
import Carousel from './Carousel';

function Home() {
    return (
        <>
            <Header title="Find your escape!" />
            <Carousel />
            <Info />
        </>
    )
}

export default Home;