import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../section/Footer';

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <div>This is header</div>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;