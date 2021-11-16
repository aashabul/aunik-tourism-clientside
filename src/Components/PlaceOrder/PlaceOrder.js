import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {
        fetch('https://immense-badlands-80197.herokuapp.com/offerings')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        if (details.length > 0) {
            const compareData = details.find(detail => detail.id == id)
            setItemDetails(compareData);
        }
    }, [details])
    return (
        <div className="mx-5 my-5 d-flex flex-wrap gap-5 align-items-center justify-content-center">
            <div className="col-md-3 col-sm-10 col-xs-12">
                <h2>Selected Offer</h2>
                <Card >
                    <Card.Img variant="top" src={itemDetails.img} />
                    <Card.Body className="bg-light" >
                        <Card.Title> Place Name: {itemDetails.name}</Card.Title>
                        <Card.Text >
                            Total Cost: {itemDetails.price}$
                        </Card.Text>
                        <Card.Text>
                            Description: {itemDetails.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-6 col-sm-10 col-xs-12">
                <h2>Place Order</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className="d-flex text-start">Name</Form.Label>
                        <Form.Control type="text" value={user.displayName} />

                        <Form.Label className="d-flex text-start">Email address</Form.Label>
                        <Form.Control type="email" value={user.email} />

                        <Form.Label className="d-flex text-start">Phone</Form.Label>
                        <Form.Control type="text" placeholder="Your phone number" />

                        <Form.Label className="d-flex text-start">Spot Name</Form.Label>
                        <Form.Control type="text" value={itemDetails.name} />

                        <Form.Label className="d-flex text-start">Tour Cost</Form.Label>
                        <Form.Control type="text" value={itemDetails.price} />

                        <Form.Label className="d-flex text-start">Deails</Form.Label>
                        <Form.Control type="text" value={itemDetails.description} />

                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </div>

    );
};

export default PlaceOrder;