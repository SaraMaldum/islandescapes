import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import newBanner1 from './images/newBanner1.jpg';
import newBanner2 from './images/newBanner2.jpg';
import newBanner3 from './images/newBanner3.jpg';

function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={newBanner1}
                    alt="Sunset at the beach"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={newBanner2}
                    alt="Bridge over the sea to a beach"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={newBanner3}
                    alt="Beach with a food truck"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;