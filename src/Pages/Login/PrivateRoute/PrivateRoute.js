import React from 'react';
import { Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <div>
            <Route
                {...rest}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;