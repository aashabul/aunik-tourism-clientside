import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const [itemDetails, setItemDetails] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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

    const onSubmit = data => {
        fetch('https://immense-badlands-80197.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
        // console.log(data)
    }

    return (
        <div className="mx-5 my-5 d-flex flex-wrap gap-5 align-items-center justify-content-center">
            <div className="col-md-3 col-sm-10 col-xs-12">
                <h3>Selected Offer</h3>
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
                <form onSubmit={handleSubmit(onSubmit)}>


                    <h4>Customer Information</h4>
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={user.displayName} {...register("name")} />
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={user.email} {...register("email")} />
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} placeholder='City' {...register("City", { required: true })} />
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} placeholder='Address' {...register("Address", { required: true })} />
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} placeholder='Phone' {...register("Phone", { required: true })} />
                    <h4>Product Information</h4>
                    <p className="text-danger">Please click all fields before submitting</p>
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={itemDetails.name} {...register("productName")} />

                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={itemDetails.price} {...register("productPrice")} />
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={id} {...register("productId")} />
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={itemDetails.description} {...register("productDescription")} />
                    <input style={{ width: '90%', margin: "5px", padding: "5px" }} defaultValue={itemDetails.img} {...register("productUrl")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input style={{ width: '40%', margin: "5px", padding: "5px" }} type="submit" value="Place Order" />
                </form>

            </div>

        </div>

    );
};

export default PlaceOrder;