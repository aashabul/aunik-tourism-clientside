import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {
    const { id } = useParams();
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
        <div className="p-5 my-5">
            <h2 className="mb-5">Place Order</h2>
            <div className="d-flex  flex-wrap">
                <div className="d-flex flex-column col-md-6 w-50 text-start">
                    <h5>ID: {id}</h5>
                    <h5>Destination: {itemDetails?.name}</h5>
                    <h5>Costing: {itemDetails?.price} $</h5>
                    <span className="w-75">Description: {itemDetails?.description}</span>
                </div>

                <div className="col-md-6 col-sm-10">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="d-flex text-start">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="d-flex text-start">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="d-flex gap-3" type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
        </div >
    );
};

export default PlaceOrder;