import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <div>
            <h1>this is detail</h1>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default Detail;