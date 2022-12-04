import React from 'react';
import { FaCopy, FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';
import MixCard from '../../../@shared/components/MixCard';
import RactangleCard from '../../../@shared/components/RactangleCard';
import SectionHeader from '../../../@shared/components/SectionHeader';
import PostDetails from '../components/PostDetails';

const PostDetailsRoute = () => {
    const location =useLocation()
    const categorie = location.pathname.split("/")[1]
    const params = useParams()
    return (
        <div className='my-5'>
            <div className='flex justify-center my-5'>
                <img src='https://tpc.googlesyndication.com/simgad/3217729136485671980' alt='ad images'/>
            </div>
            {/* post details */}
            <div className='grid md:flex gap-10 border-t-2'>
                <div className='post-details w-full'>
                    <div className='py-5'>
                        <SectionHeader title={categorie} link={`/${categorie}`}/>
                        <div>
                            <h1 className='text-4xl text-black font-semibold'>যেভাবে ‘সাংবাদিক’ হয়েছিলেন ক্যাটরিনা</h1>
                            <div className='mt-8 flex justify-between items-center'>
                                <div>
                                    <p className='text-xs'>প্রকাশ: ০৪ ডিসেম্বর ২০২২, ২০: ০০</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Link className='text-3xl hover:scale-105 transition-all text-blue-600'><FaFacebookSquare/></Link>
                                    <Link className='text-3xl hover:scale-105 transition-all text-blue-400'><FaTwitterSquare/></Link>
                                    <Link className='text-3xl hover:scale-105 transition-all text-orange-400'><FaWhatsappSquare/></Link>
                                    <Link className='text-3xl hover:scale-105 transition-all text-blue-600'><FaCopy/></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <PostDetails/>
                </div>
                <div className='md:w-96 custom-border'>
                    <div className='grid gap-5 my-5'>
                        <img src='https://tpc.googlesyndication.com/simgad/6035381064038992771' alt=''/>
                        <img src='https://tpc.googlesyndication.com/simgad/6035381064038992771' alt=''/>
                    </div>
                   <MixCard/>
                   <MixCard/>
                   <MixCard/>
                   <MixCard/>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsRoute;