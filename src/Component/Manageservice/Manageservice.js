import React from 'react';
import Useservices from '../hooks/Useservices';

const Manageservice = () => {
    const [services, setServices] = Useservices()
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `http://localhost:5000/offer/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)

                    console.log(data)
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Manage service</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}  <button onClick={() => handleDelete(service._id)}>X</button></h3>

                </div>)
            }
        </div>
    );
};

export default Manageservice;