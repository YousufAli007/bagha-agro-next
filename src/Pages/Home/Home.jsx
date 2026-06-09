import React from 'react';
import Hero from './Hero';
import Achievement from './Achievement';
import Farmingprocess from './Farmingprocess';
import Weather from './Weather';
import FarmarReview from './FarmarReview';

const Home = () => {
    return (
        <div className='bg-[#01160c]'>
            <Hero/>
            <Weather/>
            <Farmingprocess/>
            <Achievement/>
            {/* <Weather/> */}
            <FarmarReview/>
        </div>
    );
};

export default Home;