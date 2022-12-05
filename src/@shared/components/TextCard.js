import React from 'react';
import { Link } from 'react-router-dom';

const TextCard = ({link='/category/football/id'}) => {
    return (
        <div className='mb-3 pb-3 custom-card custom-border-bottom'>
                <Link to={link}>
                    <h2 className="text-md lg:text-xl transition-all">শোয়েব মালিকের সঙ্গে সম্পর্ক নিয়ে মুখ খুললেন সেই পাকিস্তানি অভিনেত্রী</h2>
                </Link>
            </div>
    );
};

export default TextCard;