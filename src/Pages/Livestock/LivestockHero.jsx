import React, { useState } from 'react';
import { motion } from 'framer-motion'; // স্মুথ অ্যানিমেশনের জন্য
import { FaArrowRight, FaFileContract, FaPhone, FaBullhorn, FaCircleExclamation } from 'react-icons/fa6'; // ফিক্সড ও সম্পূর্ণ সেফ আইকনসমূহ

const LivestockHero = () => {
    // মাউস রাখলে মারকিউ থামানোর জন্য স্টেট
    const [isPaused, setIsPaused] = useState(false);

    // হিরো কন্টেন্টের অ্যানিমেশন ভ্যারিয়েন্ট
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // একটির পর আরেকটি এলিমেন্ট অ্যানিমেট হবে
            }
        }
    };

    return (
        <div className="relative min-h-[85vh] flex flex-col justify-between bg-gray-900 text-white overflow-hidden">
            
            {/* ========================================================================= */}
            {/* ৬. NOTICE BOARD / DISEASE ALERT (ফ্রেমার মোশন দিয়ে ১০০% ফিক্সড মারকিউ) */}
            {/* ========================================================================= */}
            <div className="w-full bg-gradient-to-r from-red-950 via-slate-950 to-red-950 border-b border-red-500/20 relative z-20 flex items-center h-12">
                {/* নোটিশ লেবেল - এটি বামে ফিক্সড থাকবে */}
                <div className="bg-red-600 text-white font-black text-xs sm:text-sm px-4 h-full flex items-center gap-2 shadow-[5px_0_15px_rgba(0,0,0,0.5)] z-30 shrink-0 select-none animate-pulse">
                    <FaBullhorn className="text-white shrink-0" size={14} />
                    <span className="tracking-wide">জরুরি সতর্কবার্তা:</span>
                </div>

                {/* মারকিউ কন্টেইনার */}
                <div className="w-full overflow-hidden relative flex items-center h-full bg-black/40">
                    <motion.div 
                        animate={isPaused ? { x: "-25%" } : { x: ["0%", "-50%"] }}
                        transition={isPaused ? { type: "tween" } : { ease: "linear", duration: 30, repeat: Infinity }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="flex whitespace-nowrap gap-20 cursor-pointer text-red-200 text-xs sm:text-sm font-bold pr-20"
                    >
                        {/* মূল নোটিশ সেট */}
                        <div className="flex items-center gap-2">
                            <FaCircleExclamation className="text-amber-400 shrink-0" size={12} />
                            <span>আপনার এলাকায় <span className="text-amber-300 font-extrabold">"খুরা রোগ (FMD)"</span> প্রতিরোধী সরকারি বিনামূল্যে টিকাদান ক্যাম্পেইন শুরু হয়েছে। দ্রুত নিকটস্থ প্রাণিসম্পদ অফিসে যোগাযোগ করুন।</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCircleExclamation className="text-amber-400 shrink-0" size={12} />
                            <span>মশা ও মাছির উপদ্রব থেকে গরুকে দূরে রাখুন; <span className="text-red-400 font-extrabold">"লাম্পি স্কিন ডিজিজ (LSD)"</span> এর লক্ষণ দেখা দিলে অবিলম্বে খামার আলাদা করুন।</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCircleExclamation className="text-amber-400 shrink-0" size={12} />
                            <span>আসন্ন বর্ষায় গবাদি পশু ও হাঁস-মুরগির ঘর শুকনো রাখুন। ছাগলের পিপিআর (PPR) এবং মুরগির রানীক্ষেত রোগের টিকা সময়মতো নিশ্চিত করুন।</span>
                        </div>

                        {/* ডুপ্লিকেট নোটিশ সেট (যাতে লুপটা স্মুথ হয় এবং ব্রেক না পড়ে) */}
                        <div className="flex items-center gap-2">
                            <FaCircleExclamation className="text-amber-400 shrink-0" size={12} />
                            <span>আপনার এলাকায় <span className="text-amber-300 font-extrabold">"খুরা রোগ (FMD)"</span> প্রতিরোধী সরকারি বিনামূল্যে টিকাদান ক্যাম্পেইন শুরু হয়েছে। দ্রুত নিকটস্থ প্রাণিসম্পদ অফিসে যোগাযোগ করুন।</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCircleExclamation className="text-amber-400 shrink-0" size={12} />
                            <span>মশা ও মাছির উপদ্রব থেকে গরুকে দূরে রাখুন; <span className="text-red-400 font-extrabold">"লাম্পি স্কিন ডিজিজ (LSD)"</span> এর লক্ষণ দেখা দিলে অবিলম্বে খামার আলাদা করুন।</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCircleExclamation className="text-amber-400 shrink-0" size={12} />
                            <span>আসন্ন বর্ষায় গবাদি পশু ও হাঁস-মুরগির ঘর শুকনো রাখুন। ছাগলের পিপিআর (PPR) এবং মুরগির রানীক্ষেত রোগের টিকা সময়মতো নিশ্চিত করুন।</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* ========================================================================= */}


            {/* ব্যাকগ্রাউন্ড ইমেজ এবং ডার্ক ওভারলে */}
            <motion.div 
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920')` 
                }}
            />
            {/* ডার্ক এবং গ্রিনিশ গ্রেডিয়েন্ট ওভারলে */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-slate-900/85 to-transparent" />

            {/* মেইন কন্টেন্ট কন্টেইনার */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 z-10 w-full my-auto">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl space-y-6 md:space-y-8"
                >
                    
                    {/* ছোট ট্যাগলাইন ব্যাজ */}
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        স্মার্ট খামার, সমৃদ্ধ দেশ
                    </motion.div>

                    {/* বোল্ড হেডলাইন */}
                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight md:leading-tight text-white">
                        আধুনিক 
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300 py-1">
                            প্রাণিসম্পদ ব্যবস্থাপনা
                        </span>
                        & খামারি সেবা
                    </motion.h1>

                    {/* বিবরণী টেক্সট */}
                    <motion.p variants={fadeInUp} className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        প্রযুক্তির সঠিক ব্যবহারে আপনার খামারকে করুন আরও লাভজনক। গবাদি পশুর ডিজিটাল ট্র্যাকিং, সঠিক সময়ে টিকাদান এবং অভিজ্ঞ ভেটেরিনারি সার্জনদের পরামর্শ নিন এক ক্লিকেই।
                    </motion.p>

                    {/* Call to Action (CTA) বাটন্স */}
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                        
                        {/* প্রাইমারি বাটন: খামার নিবন্ধন */}
                        <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/45 transition-all group cursor-pointer"
                        >
                            <FaFileContract className="text-emerald-200 group-hover:scale-110 transition-transform" />
                            <span>খামার নিবন্ধন করুন</span>
                            <FaArrowRight className="text-sm ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* সেকেন্ডারি বাটন: পরামর্শ নিন */}
                        <motion.a 
                            href="tel:+8801700000000"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all group"
                        >
                            <FaPhone className="text-amber-400 group-hover:animate-bounce transition-transform" />
                            <span>পরামর্শ নিন</span>
                        </motion.a>
                        
                    </motion.div>

                </motion.div>
            </div>

            {/* নিচের দিকের বক্রতা বা শেপ ডিভাইডার */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            
        </div>
    );
};

export default LivestockHero;