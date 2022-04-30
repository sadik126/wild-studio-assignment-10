import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from './Service';
import Serve from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/offer')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>


            <div className='container mt-5'>

                <h1 className='text-center text-decoration-underline'>My <span className='text-info'> SERVICES</span></h1>
                <div className="row mt-5 d-flex align-items-center">

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }

                </div>




            </div>

        </div>
    );
};

export default Services;