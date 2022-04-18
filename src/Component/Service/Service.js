import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, img, description } = props.service;
    return (
        <div className='col-md-4 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} height="318" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 150)}
                    </Card.Text>
                    <h4 className='text-danger fw-bold'>Price :{price}৳</h4>
                    <Button variant="primary">Explore now</Button>
                </Card.Body>
            </Card>

        </div>




    );
};

export default Service;