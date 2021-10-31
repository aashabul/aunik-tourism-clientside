import { signInWithPopup } from '@firebase/auth';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../Hooks/useFirebase';
import useAuth from './../../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
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