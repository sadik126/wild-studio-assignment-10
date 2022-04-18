import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import google from '../../Googleimg/google.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const nevigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>

    }

    if (user) {
        nevigate('/');
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>

            </div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-75 d-block mx-auto '>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    Google sign in
                </button>
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;