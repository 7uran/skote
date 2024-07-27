import React, { useState, useEffect } from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Sidebar from '../../components/sidebar/Sidebar';
import Spinner from '../../components/spinner/spinner';

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
       
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }, []);

    return (
        <>
            {loading ? (
                <div className='flex justify-center items-center min-h-screen  bg-elementsColor'>
                    <Spinner />
                </div>
            ) : (
                <div className="flex">
                    <Sidebar isOpen={isSidebarOpen} />
                    <div className={`flex-1 ${isSidebarOpen ? 'ml-[250px]' : ''} transition-all duration-300`}>
                        <Header toggleSidebar={toggleSidebar} />
                        <main className='bg-bodyColor'>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
};

export default Layout;
