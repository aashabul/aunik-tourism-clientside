import { signInWithPopup } from '@firebase/auth';
import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import useAuth from './../../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setUser } = useAuth();

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => setUser(res.user))
            .catch((err) => console.log(err));
        // console.log("clicked")
    }

    return (
        <div className="my-5">
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin}
                className="btn bg-warning" >Google Sign In</button>
        </div>
    );
};

export default Login;