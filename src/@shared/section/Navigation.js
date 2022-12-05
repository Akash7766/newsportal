import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '../constant/Menu';
import logo from "../../assests/Prothom-Alo-logo.jpg"
import { FaSearch } from 'react-icons/fa';

const Navigation = () => {
    const navigate = useNavigate()
    const menu = Menu()
    return (
        <div className='w-full h-44 px-5'>
            <div className='flex justify-between items-center'>
                <div className='w-1/3'>
                    <div className='flex gap-3 items-center mb-3'>
                        <input className='input input-xs bg-transparent input-secondary rounded-none focus:outline-none'/>
                        <FaSearch className='text-xl cursor-pointer'/>
                    </div>
                    <h5 className='text-xs'>মঙ্গলবার, ০৬ ডিসেম্বর ২০২২</h5>
                </div>
                <div className='w-1/3 flex justify-center items-center h-full'>
                    <Link to={'/'}>
                        <img className='w-48' src={logo} alt=''/>
                    </Link>
                </div>
                <div className='w-1/3 text-right'>
                    <button onClick={()=>navigate('/user/login')} className='btn btn-sm rounded-none border bg-transparent text-blue-500'>Login</button>
                </div>
            </div>
                <div className='py-3 border-t-2 flex flex-wrap gap-5 justify-center shadow-xl'>
                {
                    menu?.map((item)=> <Link to={`/category/${item.name}`} key={item?.id}>{item?.name}</Link>)  
                }
            </div>
        </div>
        
    );
};

export default Navigation;