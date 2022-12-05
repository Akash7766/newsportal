import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../constant/Menu';

const Navigation = () => {
    const menu = Menu()
    return (
        <div className='py-10 border-b-2 flex flex-wrap gap-5'>
           {
            menu?.map((item)=> <Link to={`/category/${item.name}`} key={item?.id}>{item?.name}</Link>)
           }
        </div>
    );
};

export default Navigation;