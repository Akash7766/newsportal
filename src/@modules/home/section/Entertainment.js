import React from 'react';
import PortaitCard from '../../../@shared/components/PortaitCard';
import RactangleCard from '../../../@shared/components/RactangleCard';
import SectionHeader from '../../../@shared/components/SectionHeader';

const Entertainment = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'Entertainment'} link={'/entertainment'}/>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard link='/akash'/>
                    <RactangleCard border='border-none'/>
                </div>
                <div>
                    <PortaitCard/>
                </div>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard border='border-none'/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Entertainment;