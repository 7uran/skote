import React, { useState } from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Sidebar from '../../components/sidebar/Sidebar'

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <>

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

        </>
    )
}

export default Layout