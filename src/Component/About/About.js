import React from 'react';
import pic from '../../Googleimg/propic.jpg'

const About = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-md-12">
                        <h1 className='text-center'>Myself sadik</h1>
                        <img style={{ height: '400px', width: '170px' }} className='img-fluid w-25 ' src={pic} alt="" />
                        <h3>There are many goals that a web developer may have, but some of the most common ones include creating visually appealing and user-friendly websites, developing sites that are optimized for search engine ranking, and ensuring that websites are properly coded and functional. In addition, web developers may also be responsible for maintaining and updating existing websites, as well as troubleshooting any technical issues that may arise.</h3>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;