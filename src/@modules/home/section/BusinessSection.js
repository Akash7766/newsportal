import React from 'react';
import PortaitCard from '../../../@shared/components/PortaitCard';
import RactangleCard from '../../../@shared/components/RactangleCard';
import SectionHeader from '../../../@shared/components/SectionHeader';

const BusinessSection = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'BusinessSection'} link={'/business'}/>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='custom-border'>
                    <PortaitCard/>
                </div>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                </div>
            </div>
        </div>
        </>
    );
};

export default BusinessSection;