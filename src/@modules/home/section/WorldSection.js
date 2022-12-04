import React from 'react';
import PortaitCard from '../../../@shared/components/PortaitCard';
import RactangleCard from '../../../@shared/components/RactangleCard';
import SectionHeader from '../../../@shared/components/SectionHeader';

const WorldSection = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'WorldSection'} link={'/world'}/>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className='custom-border'>
                    <PortaitCard/>
                    <RactangleCard/>
                </div>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                </div>
                <div className='custom-border'>
                    <PortaitCard/>
                    <RactangleCard/>
                </div>
            </div>
        </div>
        </>
    );
};

export default WorldSection;