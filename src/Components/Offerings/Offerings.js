import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Offering from '../Offering/Offering';


const Offerings = () => {
    const [offerings, setOfferings] = useState([]);
    useEffect(() => {
        fetch('/offerings.json')
            .then(res => res.json())
            .then(data => setOfferings(data));
    }, [])
    return (
        <div className="my-5" id="offerings">
            <h1 className="my-5">Amazing Tours And Fun
                Adventures Waiting For You</h1>
            <h3>Choose The Destination
                Just Right For Your Vacation</h3>
            <Row xs={1} md={2} lg={3} className="g-5 mx-5 my-5">
                {
                    offerings.map(offering => <Offering
                        key={offering.id}
                        offering={offering}
                    ></Offering>)
                }
            </Row>
        </div>
    );
};

export default Offerings;