import React from 'react';
import Entertainment from '../section/Entertainment';
import LifeStyle from '../section/LifeStyle';


const HomeRoute = () => {
    return (
        <div className='container mx-auto'>
            HomeRoute page
            <Entertainment/>
            <LifeStyle/>
        </div>
    );
};

export default HomeRoute;