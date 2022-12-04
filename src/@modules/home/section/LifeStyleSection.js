import React from 'react';
import PortaitCard from '../../../@shared/components/PortaitCard';
import SectionHeader from '../../../@shared/components/SectionHeader';

const LifeStyleSection = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'LifeStyleSection'} link={'/life-style'}/>
            <div className='grid md:grid-cols-4 gap-5'>
                <PortaitCard link='/ok'/>
                <PortaitCard/>
                <PortaitCard/>
                <PortaitCard/>
            </div>
        </div>
        </>
    );
};

export default LifeStyleSection;