import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
            {/* স্পিনার অ্যানিমেশন */}
            <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 border-8 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                {/* মাঝখানে একটি ছোট পাতার ইমোজি (কৃষি থিম) */}
                <span className="absolute text-2xl animate-pulse"><img className='rounded-4xl' src="https://i.ibb.co.com/Y76n92QR/Whats-App-Image-2026-06-10-at-2-58-22-PM.jpg" alt="" /></span>
            </div>
            
            {/* নিচে টেক্সট */}
            <h2 className="mt-4 text-xl font-bold text-emerald-800 tracking-wide animate-pulse">
                লোডিং হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
            </h2>
        </div>
    );
};

export default Loading;