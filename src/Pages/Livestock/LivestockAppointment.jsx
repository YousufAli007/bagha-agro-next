import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaPhoneVolume, FaUserDoctor, FaCalendarCheck, FaCircleCheck } from 'react-icons/fa6';

const LivestockAppointment = () => {
    const containerRef = useRef(null);
    
    // ফর্ম স্টেটসমূহ
    const [formData, setFormData] = useState({ name: '', phone: '', animal: '', date: '' });
    const [showToast, setShowToast] = useState(false);
    const [serialNumber, setSerialNumber] = useState('');

    // স্ক্রোল অ্যানিমেশন ট্র্যাকিং
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacityEffect = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scaleEffect = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.95]);
    const yEffect = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

    // ফর্ম সাবমিট হ্যান্ডলার
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // ১০০ থেকে ৯৯৯ এর মধ্যে একটি র্যান্ডম সিরিয়াল নম্বর জেনারেট করা
        const randomSL = Math.floor(100 + Math.random() * 900);
        setSerialNumber(`SL-${randomSL}`);
        
        // টোস্ট মেসেজ অ্যাক্টিভ করা
        setShowToast(true);
        
        // ফর্ম রিসেট
        setFormData({ name: '', phone: '', animal: '', date: '' });

        // ৪ সেকেন্ড পর টোস্টটি নিজে নিজেই গায়েব হয়ে যাবে
        setTimeout(() => {
            setShowToast(false);
        }, 4000);
    };

    return (
        <div 
            ref={containerRef}
            className="bg-[#01160c] py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40 overflow-hidden relative"
        >
            {/* কাস্টম টোস্ট নোটিফিকেশন (ফিক্সড ও হাই-কন্ট্রাস্ট টেক্সট) */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: -70, scale: 0.9, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: -30, scale: 0.9, x: "-50%" }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="fixed top-10 left-1/2 z-[9999] bg-gradient-to-r from-emerald-900 to-emerald-950 border-2 border-emerald-400/60 px-6 py-4 rounded-2xl shadow-[0_15px_50px_rgba(16,185,129,0.45)] flex items-center gap-4 min-w-[320px] max-w-md backdrop-blur-md"
                    >
                        {/* সবুজ টিক চিহ্ন আইকন বক্স */}
                        <div className="text-emerald-400 p-1.5 bg-emerald-500/20 rounded-full shrink-0 ring-4 ring-emerald-500/10">
                            <FaCircleCheck size={26} />
                        </div>
                        
                        {/* টেক্সট কন্টেন্ট এরিয়া */}
                        <div className="flex-1">
                            <h3 className="text-base font-black text-white tracking-wide">
                                অ্যাপয়েন্টমেন্ট সফল হয়েছে!
                            </h3>
                            <p className="text-xs font-medium text-emerald-200 mt-0.5 leading-relaxed">
                                ডাক্তার আপনার সাথে ফোনে যোগাযোগ করবেন।
                            </p>
                            <div className="mt-2 flex items-center gap-1.5">
                                <span className="text-[11px] text-emerald-300/80 font-medium">সিরিয়াল নম্বর:</span>
                                <span className="text-sm font-black text-amber-300 tracking-wider bg-amber-500/20 px-2 py-0.5 rounded-lg border border-amber-400/40">
                                    {serialNumber}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* স্ক্রোল অ্যানিমেটেড মেইন এরিয়া */}
            <motion.div 
                style={{ opacity: opacityEffect, scale: scaleEffect, y: yEffect }}
                className="max-w-6xl mx-auto relative z-10"
            >
                
                {/* গ্রিড লেআউট: বামে হেল্পライン কার্ড, ডানে অ্যাপয়েন্টমেন্ট ফর্ম */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* বাম পাশ: হেল্পলাইন ইনফরমেশন (৫ কলাম) */}
                    <div className="lg:col-span-5 space-y-6">
                        <span className="inline-block text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
                            হেল্পলাইন ও পরামর্শ
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                            জরুরি প্রয়োজনে <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">অভিজ্ঞ ডাক্তারের</span> পরামর্শ নিন
                        </h2>
                        <p className="text-emerald-100/60 text-sm leading-relaxed">
                            আপনার খামারের যেকোনো পশুর হঠাৎ রোগবালাই বা জরুরি অবস্থায় সরাসরি সরকারি ভেটেরিনারি সার্জনদের সাথে যোগাযোগ করুন অথবা নিচের ফর্মটি পূরণ করে সিরিয়াল বুক করুন।
                        </p>

                        {/* জরুরি হেল্পলাইন বক্সসমূহ */}
                        <div className="space-y-4 pt-2">
                            {/* ১৬৩৫৮ প্রাণিসম্পদ হেল্পলাইন */}
                            <div className="relative overflow-hidden bg-gradient-to-r from-red-950/40 to-transparent border border-red-500/20 rounded-2xl p-5 flex items-center gap-5 group shadow-xl">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.03] rounded-full blur-xl pointer-events-none" />
                                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                    <FaPhoneVolume size={24} className="animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">প্রাণিসম্পদ হটলাইন</h4>
                                    <p className="text-2xl font-black text-white tracking-wide mt-0.5 group-hover:text-red-300 transition-colors">১৬৩৫৮</p>
                                    <p className="text-[11px] text-red-200/50 mt-0.5">সরকারি যেকোনো পরামর্শের জন্য (টোল ফ্রি)</p>
                                </div>
                            </div>

                            {/* ৩৩৩ জাতীয় তথ্যসেবা */}
                            <div className="relative overflow-hidden bg-white/[0.01] border border-white/5 rounded-2xl p-5 flex items-center gap-5 group shadow-xl">
                                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                    <FaUserDoctor size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">জাতীয় তথ্য ও সেবা</h4>
                                    <p className="text-2xl font-black text-white tracking-wide mt-0.5 group-hover:text-emerald-300 transition-colors">৩৩৩</p>
                                    <p className="text-[11px] text-red-200/50 mt-0.5">কৃষি ও প্রাণিসম্পদ সেবা পেতে ৫ চাপুন</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ডান পাশ: ডাইরেক্ট অ্যাপয়েন্টমেন্ট ফর্ম (৭ কলাম) */}
                    <div className="lg:col-span-7">
                        <div className="relative bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl">
                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                            
                            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                                <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
                                    <FaCalendarCheck size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">ই-সেবা ও সরাসরি অ্যাপয়েন্টমেন্ট</h3>
                                    <p className="text-xs text-white/40">তথ্য প্রদান করে স্থানীয় অফিসারের সিরিয়াল নিশ্চিত করুন</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* খামারির নাম */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-300/80 tracking-wide">খামারির নাম</label>
                                        <input 
                                            type="text" 
                                            required
                                            placeholder="উদা: মোঃ আব্দুর রহমান" 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                                        />
                                    </div>

                                    {/* মোবাইল নম্বর */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-300/80 tracking-wide">মোবাইল নম্বর</label>
                                        <input 
                                            type="tel" 
                                            required
                                            placeholder="উদা: 017XXXXXXXX" 
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* পশুর ধরন */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-300/80 tracking-wide">পশুর ধরন/ক্যাটাগরি</label>
                                        <select 
                                            required
                                            value={formData.animal}
                                            onChange={(e) => setFormData({...formData, animal: e.target.value})}
                                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all cursor-pointer [&>option]:bg-[#01160c] [&>option]:text-white"
                                        >
                                            <option value="" disabled hidden>নির্বাচন করুন</option>
                                            <option value="cow">গাভী/ষাঁড় (ডেইরি)</option>
                                            <option value="goat">ছাগল/ভেড়া</option>
                                            <option value="poultry">মুরগি/হাঁস (পোল্ট্রি)</option>
                                            <option value="fish">মৎস্য/অন্যান্য</option>
                                        </select>
                                    </div>

                                    {/* অ্যাপয়েন্টমেন্টের তারিখ */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-300/80 tracking-wide">পছন্দের তারিখ</label>
                                        <input 
                                            type="date" 
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all cursor-pointer invert-[0.9] hue-rotate-180"
                                        />
                                    </div>
                                </div>

                                {/* সাবমিট বাটন */}
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#10b981' }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full mt-4 bg-emerald-600 border border-emerald-500/20 text-white font-bold text-sm py-3.5 rounded-xl shadow-xl shadow-emerald-950/50 cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <span>বুকিং সাবমিট করুন</span>
                                    <span>→</span>
                                </motion.button>
                            </form>
                        </div>
                    </div>

                </div>

            </motion.div>
        </div>
    );
};

export default LivestockAppointment;