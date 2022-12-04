import React from 'react';
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
        </div>
    );
};

export default HomeRoute;