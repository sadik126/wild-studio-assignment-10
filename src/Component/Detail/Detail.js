import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    const { serviceID } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/offer/${serviceID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>this is detail : {service.name}</h1>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default Detail;