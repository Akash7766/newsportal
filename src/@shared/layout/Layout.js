import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../section/Footer';
import Navigation from '../section/Navigation';

const Layout = () => {
    const location = useLocation()
    const removeFooterPaths = location.pathname === "/user/login" || location.pathname === "/user/signup" || location.pathname === "/user/reset" 
    return (
        <div className='container mx-auto px-3 sm:px-0'>
            {
                removeFooterPaths || <Navigation/>
            }
                <Outlet/>
            {
                removeFooterPaths || <Footer />
            }
        </div>
    );
};

export default Layout;