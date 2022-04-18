import React from 'react';

const Service = (props) => {
    const { name, price } = props.service;
    return (
        <div>
            <h1>{name}</h1>

        </div>
    );
};

export default Service;