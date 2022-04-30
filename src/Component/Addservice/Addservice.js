import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/offer`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

        console.log(data)
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Enter name' {...register("name")} />
                <textarea className='mb-2' placeholder='Enter description' {...register("description")} />
                <input className='mb-2' placeholder='Enter price' {...register("price")} />
                <input className='mb-2' placeholder='Enter photoUrl' {...register("img")} />

                <input className='btn-success' type="submit" value='add product' />
            </form>
        </div>
    );
};

export default Addservice;
