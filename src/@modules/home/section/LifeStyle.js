import React from 'react';
import PortaitCard from '../../../@shared/components/PortaitCard';
import SectionHeader from '../../../@shared/components/SectionHeader';

const LifeStyle = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'LifeStyle'} link={'/life-style'}/>
            <div className='grid md:grid-cols-4 gap-5'>
                <PortaitCard/>
                <PortaitCard/>
                <PortaitCard/>
                <PortaitCard/>
            </div>
        </div>
        </>
    );
};

export default LifeStyle;