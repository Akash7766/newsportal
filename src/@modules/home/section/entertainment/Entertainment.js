import React from 'react';
import { Link } from 'react-router-dom';
import RactangleCard from '../../../../@shared/components/RactangleCard';
import SectionHeader from '../../../../@shared/components/SectionHeader';

const Entertainment = () => {
    const news = "আসছে ব্রুস লির বায়োপিক, লি চরিত্রে অভিনয় করবেন আরেক লিমার্শাল আর্টের সবচেয়ে বড় বিজ্ঞাপন ব্রুস লি। মার্শাল আর্টকে তিনিই সারা দুনিয়ায় জনপ্রিয় করে তুলেছিলেন। সারা বিশ্বেই ছড়িয়ে-ছিটিয়ে ছিল তাঁর তরুণ ভক্তদল। যুগে যুগে পশ্চিমা ও প্রাচ্যের সংস্কৃতি বা বিনোদন দুনিয়ার মধ্যে যোগসূত্র তৈরি করেছিলেন যাঁরা, তাঁদের অন্যতম ব্রুস লি। জন্ম হয়েছিল যুক্তরাষ্ট্রের সান ফ্রান্সিসকোর চায়না টাউনে, ১৯৪০ সালের ২৭ নভেম্বর। মৃত্যু ১৯৭৩ সালের ২০ জুলাই। মৃত্যুর পর এত বছর পেরিয়ে গেলেও ব্রুস লি নানাভাবে নানা প্রসঙ্গে উঠে আসেন। এবার তাঁর বায়োপিকের ঘোষণা দিলেন অস্কারজয়ী নির্মাতা অ্যাং লি।"
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'Entertainment'} link={'/entertainment'}/>
            <div className='grid grid-cols-3 gap-5'>
                <div>
                    <RactangleCard/>
                    <RactangleCard link='/akash'/>
                    <RactangleCard border='border-none'/>
                </div>
                <div>
                <Link to='/'>
                <div className="">
                    <figure className='w-full'>
                        <img className='w-full' src="https://images.prothomalo.com/prothomalo-bangla%2F2022-11%2F696d812a-ddd2-43a6-b212-9f07d06f87b0%2Funknown_161439941_3840196849427903_131099263249821720_n.jpg?rect=0%2C0%2C1062%2C708&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0" alt="Movie"/>
                    </figure>
                    <div className="">
                        <h2 className="text-2xl font-semibold my-3">আসছে ব্রুস লির বায়োপিক, লি চরিত্রে অভিনয় করবেন আরেক লি</h2>
                        <p >
                            {news.slice(0,150)}...
                        </p>
                        <div className="footer mt-3 text-gray-500">
                        <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
                </Link>
                </div>
                <div>
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