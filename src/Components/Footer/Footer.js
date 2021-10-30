import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />
    return (
        <div>
            <div className="bg-dark text-light py-5 d-flex flex-column flex-wrap">
                <div className="d-flex justify-content-center gap-4 mb-4 fs-3">
                    <div>{facebook} </div>
                    <div>{twitter} </div>
                    <div>{instagram} </div>
                    <div>{youtube}</div>
                </div>
                <div className=" d-flex  justify-content-center gap-5 flex-wrap">

                    <div className="px-5">
                        <h4>About Us</h4>
                        <p>Our Mission &amp; Values</p>
                        <p>Board of Directors</p>
                        <p>Tour Guides</p>
                        <p>History</p>
                    </div>
                    <div className="px-5">
                        <h4>Quick Links</h4>
                        <p>Contact</p>
                        <p>Training</p>
                        <p>Booking</p>
                    </div>
                    <div className="px-5">
                        <h4>General Information</h4>
                        <p>Toll-free 888‑816‑0488</p>
                        <p>24/7 888‑910‑0416</p>
                    </div>
                </div>
                <div className="pt-4">
                    &copy; Khondoker Aashabul Imam All Rights Reserves.
                </div>
            </div>
        </div>
    );
};

export default Footer;