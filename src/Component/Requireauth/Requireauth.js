import { ProviderId } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';



const Requireauth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified)
        return <div>
            <h3 className='text-danger text-center'>Your email is not verified</h3>
            <h5 className='text-success'>Please verify your email</h5>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send verification Email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    return children
};

export default Requireauth;