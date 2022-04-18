import React from 'react';
import Header from '../Header/Header';
import Section from '../Section2/Section';
import Services from '../Service/Services';
import './Home.css'


const Home = () => {
    return (
        <div>

            <div className="container-fluid image">
                <div className="row d-flex justify-content-center  ">
                    <div className="col-md-4 topdiv text-center pt-5 mt-5 ">
                        <h1 className="text-white  ">Wild Life Photography</h1>
                        <h3 className="text-white ">Professional Photographer</h3>
                        <button className="btn btn-info">Learn more</button>

                    </div>

                </div>

            </div>

            <Section></Section>

            <Services></Services>



        </div>
    );
};

export default Home;