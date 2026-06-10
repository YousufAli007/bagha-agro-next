import React from 'react';
import LivestockHero from './LivestockHero';
import CowWeightCalculator from './CowWeightCalculator';
import LivestockStats from './LivestockStats';
import LivestockCategories from './LivestockCategories';
import LivestockServices from './LivestockServices';
import LivestockAppointment from './LivestockAppointment';
// import LivestockCategories from './LivestockCategories';

const Livestock = () => {
    return (
        <div>
            <LivestockHero/>
            <CowWeightCalculator/>
             <LivestockCategories/>
             <LivestockServices/>
             <LivestockAppointment/>
            <LivestockStats/>
        </div>
    );
};

export default Livestock;