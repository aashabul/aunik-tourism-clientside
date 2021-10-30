import React from 'react';
import { Carousel } from 'react-bootstrap';

const Review = () => {
    return (
        <div id="review" className="d-flex flex-direction-column my-5 px-5">
            <div className="w-50 bg-warning">
                <h3>Customer Review</h3>
            </div>
            <div className="w-50">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/8972292/pexels-photo-8972292.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/10031264/pexels-photo-10031264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/8353151/pexels-photo-8353151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Review;