import React, { useState, useEffect } from 'react';
import Navber from '../components/Navber';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../components/Loading'; // লোডিং কম্পোনেন্ট

// গ্লোবাল ভেরিয়েবল সাইটটি প্রথমবার লোড হচ্ছে কি না ট্র্যাক করার জন্য
let isFirstMount = true;

const Layout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation(); // লিংক চেঞ্জ ট্র্যাক করার জন্য

    useEffect(() => {
        // প্রথমবার ২ সেকেন্ড, পরেরবার (লিংক চেঞ্জ হলে) ৫০০ মিলিসেকেন্ড
        const loadingTime = isFirstMount ? 2000 : 500;

        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
            if (isFirstMount) {
                isFirstMount = false; 
            }
        }, loadingTime);

        return () => clearTimeout(timer);
    }, [location.pathname]); 

    // --- এখানে পরিবর্তন করা হয়েছে ---
    // যদি isLoading true হয়, তবে নিচের পুরো লেআউট স্কিপ করে শুধুমাত্র ফুল স্ক্রিন লোডার দেখাবে
    if (isLoading) {
        return <Loading />;
    }

    // লোডিং শেষ হলে মূল ওয়েবসাইট/লেআউট দেখাবে
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navber />
            </header>
            
            {/* Main Content */}
            <main className='flex-1 pt-20'>
                <Outlet />
            </main>
            
            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;