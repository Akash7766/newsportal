import React from 'react';
import Hero from '../../../@shared/components/Hero';
import { Menu } from '../../../@shared/constant/Menu';
import BusinessSection from '../section/BusinessSection';
import CatagorieSection from '../section/CatagorieSection';
import EntertainmentSection from '../section/EntertainmentSection';
import LifeStyleSection from '../section/LifeStyleSection';
import WorldSection from '../section/WorldSection';


const HomeRoute = () => {
    const menu = Menu()
    console.log(menu);
    
    return (
        <div>
            <Hero/>
            <EntertainmentSection/>
            <LifeStyleSection/>
            <WorldSection/>
            <BusinessSection/>
            <CatagorieSection/>
        </div>
    );
};

export default HomeRoute;