import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className='flex flex-col h-screen'>
           <header>
            <Navber/>
           </header>
           {/* Main */}
           <main className='flex-1'>
            <Outlet/>
           </main>
           {/* Foother */}
           <section>
            <Footer/>
           </section>
        </div>
    );
};

export default Layout;