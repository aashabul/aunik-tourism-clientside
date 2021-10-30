import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faClipboardCheck, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Showcase = () => {
    const user = <FontAwesomeIcon icon={faUserAlt} />
    const globe = <FontAwesomeIcon icon={faGlobe} />
    const clipboard = <FontAwesomeIcon icon={faClipboardCheck} />
    return (
        <div className="py-5">
            <div className="d-flex justify-content-center gap-5 my-5 flex-wrap">
                <div>
                    <div className="border fs-1 py-3">{user}</div>
                    <h2 className="py-3">150</h2>
                    <h4>TOUR GUIDES</h4>
                </div>
                <div className="border-start border-end  px-5 ">
                    <div className="border fs-1 py-3">{globe}</div>
                    <h2 className="py-3">50+</h2>
                    <h4>BRANCHES</h4>
                </div>
                <div>
                    <div className="border fs-1 py-3">{clipboard}</div>
                    <h2 className="py-3">5000+</h2>
                    <h4>SUCCESSFUL TOUR</h4>
                </div>
            </div>
        </div>
    );
};

export default Showcase;