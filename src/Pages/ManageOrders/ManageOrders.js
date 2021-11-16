import React, { useEffect, useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://immense-badlands-80197.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h2 className="my-4">Manage All Orders</h2>
            <Row xs={1} md={2} lg={3} className="g-5 mx-5 mb-5">
                {
                    orders.map(order =>
                        <Card key={order._id}>
                            <Card.Img variant="top" src={order.productUrl} />
                            <Card.Body className="bg-light" >
                                <Card.Title> Place Name: {order.productName}</Card.Title>
                                <Card.Text >
                                    Total Cost: {order.productPrice}$
                                </Card.Text>
                                <Card.Text>
                                    Description: {order.productDescription} <br />
                                    <span className="text-success"> Customer Name : {user.displayName}</span> <br />
                                    <span className="text-success"> Customer Email : {user.email}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </Row>
        </div>
    );
};

export default ManageOrders;