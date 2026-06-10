import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiCpu, FiTrendingUp, FiFeather } from 'react-icons/fi';

const AgriculturalTechnology = () => {
    // ফ্রেমার মোশন অ্যানিমেশন ভেরিয়েন্ট (সহজে কোড মেইনটেইন করার জন্য)
    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="bg-[#01160c] min-h-[85vh] flex items-center justify-center py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">
            
            {/* ব্যাকগ্রাউন্ড নিয়ন গ্লো ইফেক্ট */}
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500 rounded-full filter blur-[130px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-green-600 rounded-full filter blur-[130px] opacity-10 animate-pulse"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                
                {/* লেফট সাইড: কৃষি প্রযুক্তি ইমেজ (স্ক্রোল অ্যানিমেশন সহ) */}
                <motion.div 
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative group w-full max-w-lg mx-auto lg:max-w-none"
                >
                    {/* ইমেজের পেছনে একটি সুন্দর গ্লো বর্ডার */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="relative bg-emerald-950/20 border border-emerald-500/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <img 
                            src="https://i.ibb.co.com/0jr4FHpR/IMG-20260119-WA0004.jpg" 
                            alt="Modern Agricultural Technology" 
                            className="w-full h-[350px] sm:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* ইমেজের ওপর ডার্ক ওভারলে গ্রেডিয়েন্ট */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#01160c] via-transparent to-transparent opacity-60"></div>
                    </div>
                </motion.div>

                {/* রাইট সাইড: টেক্সট এবং সুবিধা (স্ক্রোল অ্যানিমেশন সহ) */}
                <motion.div 
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-6 sm:space-y-8"
                >
                    {/* ছোট ট্যাগ */}
                    <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                        <FiCpu className="animate-pulse" /> আধুনিক কৃষি বিপ্লব
                    </div>

                    {/* মেইন হেডিং */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 tracking-wide leading-tight">
                        স্মার্ট প্রযুক্তি ব্যবহারে <br />
                        <span className="text-emerald-500 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">কৃষিতে আসবে ব্যাপক সাফল্য</span>
                    </h2>

                    {/* বিবরণী */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        সনাতন পদ্ধতি ছেড়ে আধুনিক কৃষি প্রযুক্তি ব্যবহার করলে শ্রম ও খরচ দুটোই অর্ধেক কমে যায়। সঠিক সময়ে মাটির আর্দ্রতা, সারের অনুপাত এবং আবহাওয়ার পূর্বাভাস জানার মাধ্যমে ফসলের উৎপাদন বৃদ্ধি পায় বহুগুণ।
                    </p>

                    {/* সুবিধাগুলোর লিস্ট */}
                    <div className="space-y-4 pt-2">
                        
                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 bg-emerald-900/50 p-2 rounded-xl border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                <FiTrendingUp className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-gray-200 font-bold text-base sm:text-lg tracking-wide">১০০% পর্যন্ত ফলন বৃদ্ধি</h4>
                                <p className="text-gray-400 text-sm mt-0.5">সঠিক ডেটা ও প্রযুক্তির মাপজোখে চাষ করায় অপচয় রোধ হয় এবং ফসলের গুণগত মান বাড়ে।</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 bg-emerald-900/50 p-2 rounded-xl border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                <FiFeather className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-gray-200 font-bold text-base sm:text-lg tracking-wide">সময় ও সারের সঠিক সাশ্রয়</h4>
                                <p className="text-gray-400 text-sm mt-0.5">ডিজিটাল মিটারের সাহায্যে জমির নিখুঁত পরিমাপ অনুযায়ী সার ও কীটনাশক প্রয়োগ করা যায়।</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 bg-emerald-900/50 p-2 rounded-xl border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                <FiCheckCircle className="text-lg" />
                            </div>
                            <div>
                                <h4 className="text-gray-200 font-bold text-base sm:text-lg tracking-wide">ঝুঁকি ও রোগবালাই নিয়ন্ত্রণ</h4>
                                <p className="text-gray-400 text-sm mt-0.5">প্রযুক্তির আগাম সতর্কবার্তার মাধ্যমে খরা, বন্যা কিংবা পোকার আক্রমণ থেকে ফসল রক্ষা করা সহজ হয়।</p>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AgriculturalTechnology;