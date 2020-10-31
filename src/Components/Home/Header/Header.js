import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
import slide1 from "../../../images/carousel-pic/carousel-1.jpg";
import slide2 from "../../../images/carousel-pic/carousel-2.jpg";
import slide3 from "../../../images/carousel-pic/carousel-3.jpg";

const Header = () => {
    return (
        <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src={slide1} alt="Third slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src={slide2} alt="Third slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src={slide3} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;