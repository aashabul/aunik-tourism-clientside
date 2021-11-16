import React from 'react';
import { Carousel } from 'react-bootstrap';

const Review = () => {
    return (
        <div id="review" className="d-flex my-5 px-5 pt-5">
            <div className="bg-warning p-5 text-start">
                <h3>Customer Review</h3>
                <p>We pride ourselves on providing our customers with the highest level of customer service. If you made a purchase, had service work performed, or bought parts and accessories from us, we want to hear what you think.
                    Please fill out the customer satisfaction survey below and let us know how we’re doing.</p>
            </div>
            <div>
                <Carousel className="text-dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/QCRGLtj/pexels-photo-8972292.png"
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>First Customer</h3>
                            <p>We think this is the best place to invest your money.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/10031264/pexels-photo-10031264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second Customer</h3>
                            <p>I have a good moment with Aunik Tourism.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/8353151/pexels-photo-8353151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Customer</h3>
                            <p>I would recomend their service!!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Review;