// import React from 'react';
import { FaEnvelope, FaFacebookF, FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-green-900 to-emerald-950 text-gray-200 pt-12 pb-6 border-t-4 border-lime-500">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* ১. লোগো ও বর্ণনা */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-white">
                        <FaLeaf className="text-lime-400 text-3xl" />
                        <span className="text-2xl font-bold tracking-wide">এগ্রো<span className="text-lime-400">সেবা</span></span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        কৃষকদের মুখে হাসি ফোটাতে এবং আধুনিক কৃষি সেবা সবার দোড়গোড়ায় পৌঁছে দিতে আমাদের এই ক্ষুদ্র প্রয়াস। আগর চাষ ও সঠিক পরামর্শের নির্ভরযোগ্য মাধ্যম।
                    </p>
                  
                    <div className="flex space-x-4 pt-2">
                        <a href="#" className="p-2 bg-green-800 hover:bg-lime-500 hover:text-green-950 rounded-full transition-all duration-300">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="p-2 bg-green-800 hover:bg-lime-500 hover:text-green-950 rounded-full transition-all duration-300">
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>

                {/* service */}
                <div>
                    <h3 className="text-lg font-semibold text-lime-400 mb-4 border-b border-green-700 pb-2">আমাদের সেবাসমূহ</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">মাটি পরীক্ষা ও সার পরামর্শ</a></li>
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">উন্নত জাতের আগর চারা বিতরণ</a></li>
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">কৃষি বিশেষজ্ঞ লাইভ চ্যাট</a></li>
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">সরাসরি পাইকারি বাজার</a></li>
                    </ul>
                </div>

                {/* importent link */}
                <div>
                    <h3 className="text-lg font-semibold text-lime-400 mb-4 border-b border-green-700 pb-2">গুরুত্বপূর্ণ লিংক</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">আমাদের সম্পর্কে</a></li>
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">সচরাচর জিজ্ঞাসা (FAQ)</a></li>
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">কৃষক নিবন্ধন ফরম</a></li>
                        <li><a href="#" className="hover:text-lime-400 hover:underline transition">যোগাযোগ করুন</a></li>
                    </ul>
                </div>

                {/* helpe line*/}
                <div>
                    <h3 className="text-lg font-semibold text-lime-400 mb-4 border-b border-green-700 pb-2">যোগাযোগ ও হেল্পলাইন</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start space-x-3">
                            <FaPhoneAlt className="text-lime-400 mt-1" />
                            <div>
                                <p className="font-semibold text-white">১৬১২৩ (কৃষি কল সেন্টার)</p>
                                <p className="text-xs text-gray-400">সকাল ৯টা - বিকাল ৫টা (ফ্রি)</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaEnvelope className="text-lime-400" />
                            <span>support@agroseba.com</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="text-lime-400 mt-1" />
                            <span>রাজশাহী, বাংলাদেশ</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* copy writing*/}
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-green-800 text-center text-xs text-gray-400">
                <p>© {new Date().getFullYear()} এগ্রোসেবা প্ল্যাটফর্ম। সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
        </footer>
    );
};

export default Footer;