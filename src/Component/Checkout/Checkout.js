import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';


const Checkout = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const Handlename = e => {
        setName(e.target.value)
    }

    const Handlephone = e => {
        setPhone(e.target.value)
    }

    const Handleaddress = e => {
        setAddress(e.target.value)
    }

    const Handlecheckout = (e) => {
        e.preventDefault()
        const shipping = { name, phone, address }
        console.log(shipping)

    }


    return (
        <div>
            <h1 className='text-center'>Please check out your booking</h1>
            <div className='container w-50 mx-auto mt-5'>
                <Form onSubmit={Handlecheckout}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={Handlename} type="text" placeholder="enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onBlur={Handlephone} type="text" placeholder="enter your phone" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onBlur={Handleaddress} as="textarea" rows={3} />
                    </Form.Group>
                    <button className='btn btn-dark'>Submit</button>
                </Form>

                <h1>Your info</h1>
                <p>Name:{name}</p>
                <p>Phone:{phone}</p>
                <p>Address:{address}</p>


            </div>

        </div>
    );
};

export default Checkout;