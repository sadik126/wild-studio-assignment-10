import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nevigate = useNavigate()

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    let errorElement;




    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        nevigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>

    }



    // if (user) {
    //     nevigate('/')
    // }


    const handleemail = (e) => {
        setEmail(e.target.value)

    }

    const Handlepass = (e) => {
        setPassword(e.target.value)
    }

    const Handleusesignin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)

    }

    const Navigateregister = () => {
        nevigate('/signup')
    }

    const Resetpassword = async () => {
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-center'>Please Login  here</h1>
            <Form onSubmit={Handleusesignin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={Handlepass} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mx-auto d-block w-50'>
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to wild studio?</p> <Link to="/signup" className='text-success pe-auto text-decoration-none' onClick={Navigateregister}>Please register</Link>
            <div className='d-flex p-3 justify-content-center'>
                <p className='mx-3'>Forget password?</p> <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={Resetpassword}>Reset password</Link>

            </div>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signin;