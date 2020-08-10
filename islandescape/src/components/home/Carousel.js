import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';

function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Sunset at the beach"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Bridge over the sea to a beach"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Beach with a food truck"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;