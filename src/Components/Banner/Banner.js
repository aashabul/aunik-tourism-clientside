import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel controls={false} variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/WDmsb8m/glo.png"
                        alt="world tour1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/84q6Xhs/glo-1.png"
                        alt="world tour2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/cQyCgyz/glo-2.png"
                        alt="world tour3"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;