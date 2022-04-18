import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const nevigate = useNavigate()
    const Navigateregister = () => {
        nevigate('/signin')
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1>Please register here</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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