import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddNew = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const descriptionRef = useRef();
    const imgUrlRef = useRef();
    const priceRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const imgUrl = imgUrlRef.current.value;
        const price = priceRef.current.value;
        const newOffer = { name, description, imgUrl, price };

        fetch('http://localhost:3000/offerings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOffer)
        })
        e.preventDefault();
    }
    return (
        <div className="pt-5">
            {/* <h2>Add a New Plan</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" ref={emailRef} />
                <input type="submit" value="Add" />
            </form> */}
            <h2>Add a New Plan</h2>
            <Form className="col-md-6 m-auto pb-5" onSubmit={handleAddUser}>
                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Spot Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" ref={nameRef} />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Description</Form.Label>
                    <Form.Control type="text" placeholder="Details" ref={descriptionRef} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Image URL</Form.Label>
                    <Form.Control type="text" placeholder="URL" ref={imgUrlRef} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="d-flex text-start">Price</Form.Label>
                    <Form.Control type="text" placeholder="Tour Cost" ref={priceRef} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddNew;