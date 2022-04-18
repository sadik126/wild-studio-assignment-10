import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);
    const nevigate = useNavigate()
    const Navigateregister = () => {
        nevigate('/signin')
    }

    const handleemail = async (e) => {
        setEmail(e.target.value)

    }

    const handlename = async (e) => {
        setName(e.target.value)
    }

    const Handlepass = async (e) => {
        setPassword(e.target.value)
    }

    const Handleusesignup = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        nevigate('/')

    }

    if (user) {
        console.log('user', user)
    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1>Please register here</h1>
            <Form onSubmit={Handleusesignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handlename} type="text" placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={Handlepass} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>New to wild studio?</p> <Link to="/signin" className='text-danger pe-auto text-decoration-none' onClick={Navigateregister}>Go to login form</Link>
        </div>
    );
};

export default Signup;