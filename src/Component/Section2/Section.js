import React from 'react';
import img2 from './Images/pic2.jpg'
// import './Section.css'

const Section = () => {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 img2">
                        <img src={img2} className="img-fluid rounded-circle" alt="" />
                        {/* <h1>why this is important?</h1> */}
                    </div>
                    <div className="col-md-6 img2">

                        <h1 className='text-center text-info'>Why Wildlife Is Important</h1>
                        <p>Every living thing is connected. If even just one organism becomes threatened or extinct, it has a domino effect on an entire ecosystem. It disrupts the food chain, sending shockwaves through the environment. It’s also important to know that threats to species rarely happen in isolation. The things that threaten, say, honeybees also threaten other pollinators. For ecosystems to thrive, all wildlife must be protected.</p>

                        <p>When discussing wildlife, you’ll often hear the term “biodiversity.” This refers to the number of species in an ecosystem. Healthy ecosystems have a lot of diversity. Why is this important? Consider plants. A wide variety of plants means greater productivity and better health. If there are fewer plant species, a disease that affects them spreads faster and more effectively. More variety means better resistance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;