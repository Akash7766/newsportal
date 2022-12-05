import React from 'react';
import MainCard from '../../../@shared/components/MainCard';
import PortaitCard from '../../../@shared/components/PortaitCard';
import RactangleCard from '../../../@shared/components/RactangleCard';
import TextCard from '../../../@shared/components/TextCard';

const CategoriesRoute = () => {
    return (
        <div>
            <div className='flex justify-center my-5'>
                <img src='https://tpc.googlesyndication.com/simgad/3217729136485671980' alt='ad images'/>
            </div>
            {/* news and ad  */}
            <div className='grid  lg:grid-cols-4 gap-5'>
                <div className='lg:col-span-3'>
                    {/* news  */}
                    <div className='grid md:grid-cols-3 gap-5'>
                        <div className='col-span-2'>
                            <MainCard/>
                        </div>
                        <div className='col-span-1'>
                            <PortaitCard/>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-3 gap-5'>
                        <PortaitCard/>
                        <PortaitCard/>
                        <PortaitCard/>
                    </div>
                </div>
                <div className='col-span-1 custom-border'>
                    <div className='mb-5'>
                        <img className='w-full' src='https://tpc.googlesyndication.com/simgad/6035381064038992771' alt=''/>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 custom-border'>
                        <TextCard serial="1"/>
                        <TextCard serial="2"/>
                        <TextCard serial="3"/>
                        <TextCard serial="4"/>
                        <TextCard serial="5 "/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <img src='https://tpc.googlesyndication.com/simgad/17825197492991032054' alt=''/>
            </div>
            <div className='custom-border sm:w-[500px] mx-auto my-10'>
                <RactangleCard/>
                <RactangleCard/>
                <RactangleCard/>
                <RactangleCard/>
                <div className='text-center'>
                    <button className='btn btn-xs'>Load more ...</button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesRoute;