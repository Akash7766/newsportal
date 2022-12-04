import React from 'react';
import BusinessSection from '../section/BusinessSection';
import CatagorieSection from '../section/CatagorieSection';
import EntertainmentSection from '../section/EntertainmentSection';
import LifeStyleSection from '../section/LifeStyleSection';
import WorldSection from '../section/WorldSection';


const HomeRoute = () => {
    return (
        <div className='container mx-auto'>
            HomeRoute page
            <EntertainmentSection/>
            <LifeStyleSection/>
            <WorldSection/>
            <BusinessSection/>
            <CatagorieSection/>
        </div>
    );
};

export default HomeRoute;