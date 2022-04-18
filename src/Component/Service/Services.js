import React, { useEffect, useState } from 'react';
import Service from './Service';
import Serve from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Services;