import React, { useEffect, useState } from 'react';
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
            <EntertainmentSection/>
            <LifeStyleSection/>
            <WorldSection/>
            <BusinessSection/>
            <CatagorieSection/>
        </div>
    );
};

export default HomeRoute;