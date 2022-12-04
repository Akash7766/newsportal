import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../section/Footer';

const Layout = () => {
    const location = useLocation()
    const removeFooterPaths = location.pathname === '/login'
    return (
        <div className='container mx-auto'>
            <div>This is header</div>
                <Outlet/>
            {
                removeFooterPaths || <Footer />
            }
        </div>
    );
};

export default Layout;