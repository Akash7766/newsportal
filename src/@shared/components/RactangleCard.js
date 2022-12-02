import React from 'react';
import { Link } from 'react-router-dom';

const RactangleCard = ({link='/',border='border-b-2'}) => {

    return (
        <>
            <Link to={link}>
            <div className={`flex justify-between border-b-2 pb-5 mb-5 ${border}`}>
                <div className="w-full">
                    <h2 className="text-xl font-semibold">শোয়েব মালিকের সঙ্গে সম্পর্ক নিয়ে মুখ খুললেন সেই পাকিস্তানি অভিনেত্রী</h2>
                    <div className="footer mt-4 text-gray-500">
                    <p>2 hours ago</p>
                    </div>
                </div>
                <figure className='w-48'>
                    <img className='w-full' src="https://images.prothomalo.com/prothomalo-bangla%2F2022-11%2F696d812a-ddd2-43a6-b212-9f07d06f87b0%2Funknown_161439941_3840196849427903_131099263249821720_n.jpg?rect=0%2C0%2C1062%2C708&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0" alt="Movie"/>
                </figure>
            </div>
            </Link>
        </>
    );
};

export default RactangleCard;