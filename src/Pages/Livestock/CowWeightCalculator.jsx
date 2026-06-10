import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWeight, FaRulerHorizontal, FaCalculator, FaInfoCircle } from 'react-icons/fa';

const CowWeightCalculator = () => {
    const [girth, setGirth] = useState(65); // বুকের বেড় (ইঞ্চি)
    const [length, setLength] = useState(55); // শরীরের দৈর্ঘ্য (ইঞ্চি)
    const [weightKg, setWeightKg] = useState(0);
    const [meatKg, setMeatKg] = useState(0);

    // বৈজ্ঞানিক সূত্র (Shaeffer's Formula) অনুযায়ী ওজন গণনা
    useEffect(() => {
        if (girth >= 30 && length >= 30) {
            const weightInLbs = (girth * girth * length) / 300;
            const weightInKg = Math.round(weightInLbs / 2.20462);
            const estimatedMeat = Math.round(weightInKg * 0.55); // সর্বনিম্ন ৫৫% মাংসের হার ধরা হয়েছে

            setWeightKg(weightInKg);
            setMeatKg(estimatedMeat);
        } else {
            setWeightKg(0);
            setMeatKg(0);
        }
    }, [girth, length]);

    return (
        <div className="bg-[#01160c] py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-emerald-900/40">
            <div className="max-w-5xl mx-auto">
                
                {/* সেকশন হেডার */}
                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        স্মার্ট এগ্রো টুলস
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                        ডিজিটাল গরুর ওজন পরিমাপক
                    </h2>
                    <p className="text-emerald-300/70 text-sm sm:text-base mt-2 max-w-xl mx-auto leading-relaxed">
                        কোনো ওজন মাপার মেশিন ছাড়াই ফিতা দিয়ে সঠিক মাপ ইনপুট দিয়ে লাইভ ও আনুমানিক মাংসের পরিমাণ জেনে নিন।
                    </p>
                </div>

                {/* মেইন ক্যালকুলেটর গ্রিড */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* বাম পাশ: ইনপুট কন্ট্রোল (৭ কলাম) */}
                    <div className="lg:col-span-7 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
                        
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-white flex items-center gap-2 border-b border-white/5 pb-3">
                                <FaCalculator className="text-emerald-400" /> মাপের বিবরণ দিন (ইঞ্চিতে)
                            </h3>

                            {/* ১. বুকের বেড় ইনপুট */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-emerald-100 flex items-center gap-2">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">১</span>
                                        বুকের বেড় (Heart Girth)
                                    </label>
                                    <input 
                                        type="number" 
                                        min="30" max="120"
                                        value={girth}
                                        onChange={(e) => setGirth(Math.min(120, Number(e.target.value)))}
                                        className="w-20 bg-emerald-950/50 border border-emerald-500/30 text-center font-bold text-emerald-300 rounded-lg py-1 px-2 focus:outline-none focus:border-emerald-400 text-sm"
                                    />
                                </div>
                                <input 
                                    type="range" min="30" max="120" value={girth} 
                                    onChange={(e) => setGirth(Number(e.target.value))}
                                    className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 transition-all"
                                />
                                <p className="text-xs text-emerald-400/50 flex items-center gap-1">
                                    <FaInfoCircle className="shrink-0" /> সামনের দু’পায়ের ঠিক পিছন দিয়ে বুকের চারপাশ ফিতা দিয়ে গোল করে মাপুন।
                                </p>
                            </div>

                            {/* ২. শরীরের দৈর্ঘ্য ইনপুট */}
                            <div className="space-y-3 pt-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-emerald-100 flex items-center gap-2">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">২</span>
                                         দৈর্ঘ্য (Body Length)
                                    </label>
                                    <input 
                                        type="number" 
                                        min="30" max="120"
                                        value={length}
                                        onChange={(e) => setLength(Math.min(120, Number(e.target.value)))}
                                        className="w-20 bg-emerald-950/50 border border-emerald-500/30 text-center font-bold text-emerald-300 rounded-lg py-1 px-2 focus:outline-none focus:border-emerald-400 text-sm"
                                    />
                                </div>
                                <input 
                                    type="range" min="30" max="120" value={length} 
                                    onChange={(e) => setLength(Number(e.target.value))}
                                    className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 transition-all"
                                />
                                <p className="text-xs text-emerald-400/50 flex items-center gap-1">
                                    <FaInfoCircle className="shrink-0" /> পশুর কাঁধের জয়েন্ট থেকে পেছনের লেজের গোড়ার হাড় (Pin bone) পর্যন্ত সোজা মাপুন।
                                </p>
                            </div>
                        </div>

                        {/* ফুটনোট বা সতর্কতা */}
                        <div className="pt-4 border-t border-white/5 text-xs text-emerald-300/40 italic">
                            * দ্রষ্টব্য: এই গণনাটি আন্তর্জাতিকভাবে স্বীকৃত Shaeffer’s ফর্মুলা অনুযায়ী তৈরি। পশু গর্ভবতী হলে ফলাফলে কিছুটা কম-বেশি হতে পারে।
                        </div>
                    </div>

                    {/* ডান পাশ: রিয়েল-টাইম অ্যাডভান্সড রেজাল্ট ডিসপ্লে (৫ কলাম) */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-6 shadow-2xl relative overflow-hidden border border-emerald-500/10">
                        
                        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
                        <div className="absolute -right-20 -top-20 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
                        
                        <h3 className="text-lg font-semibold text-emerald-300 flex items-center gap-2 border-b border-emerald-800/60 pb-3 z-10">
                            <FaWeight className="text-amber-400" /> লাইভ হিসাব ফলাফল
                        </h3>

                        {/* লাইভ টোটাল ওজন কার্ড */}
                        <div className="bg-black/20 border border-white/5 p-5 rounded-2xl relative group z-10">
                            <p className="text-xs font-bold text-emerald-400 tracking-wider uppercase">মোট জীবন্ত ওজন (Live Weight)</p>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={weightKg}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -15, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl sm:text-5xl font-black text-white mt-2 flex items-baseline gap-2"
                                >
                                    {weightKg} <span className="text-lg font-medium text-emerald-300/60">কেজি</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* আনুমানিক মাংসের পরিমাণ কার্ড */}
                        <div className="bg-black/20 border border-white/5 p-5 rounded-2xl relative z-10">
                            <div className="flex justify-between items-center">
                                <p className="text-xs font-bold text-amber-400 tracking-wider uppercase">নিট মাংসের পরিমাণ (~৫৫%)</p>
                                <span className="text-[10px] bg-amber-400/10 text-amber-300 border border-amber-400/20 px-2 py-0.5 rounded-md font-medium">আনুমানিক</span>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={meatKg}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -15, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.05 }}
                                    className="text-3xl sm:text-4xl font-black text-amber-400 mt-2 flex items-baseline gap-2"
                                >
                                    {meatKg} <span className="text-lg font-medium text-amber-400/60">কেজি</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CowWeightCalculator;