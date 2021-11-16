import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddNew = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const imgUrlRef = useRef();
    const priceRef = useRef();
    const idRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgUrlRef.current.value;
        const price = priceRef.current.value;
        const id = idRef.current.value;
        const newOffer = { name, description, img, price, id };


        fetch('https://immense-badlands-80197.herokuapp.com/offerings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOffer)
        })
        e.preventDefault();
        alert('New Offer Added Successfully!')
    }
    return (
        <div className="pt-5">
            <h2>Add a New Plan</h2>
            <Form className="col-md-6 m-auto pb-5" onSubmit={handleAddUser}>
                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Spot Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Spot Name" ref={nameRef} required />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Description</Form.Label>
                    <Form.Control type="text" placeholder="Details" ref={descriptionRef} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Image URL</Form.Label>
                    <Form.Control type="text" placeholder="URL" ref={imgUrlRef} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Price</Form.Label>
                    <Form.Control type="text" placeholder="Tour Cost" ref={priceRef} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">ID</Form.Label>
                    <Form.Control type="text" placeholder="Add an ID" ref={idRef} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Plan
                </Button>
            </Form>
        </div>
    );
};

export default AddNew;