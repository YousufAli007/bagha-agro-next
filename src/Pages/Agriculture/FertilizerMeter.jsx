import React, { useState } from 'react';
import { motion } from 'framer-motion'; // ফ্রেমার মোশন ইম্পোর্ট করা হলো
import { FiRefreshCw, FiPlusCircle } from 'react-icons/fi';
import { BsCalculator, BsConeStriped } from 'react-icons/bs';

const FertilizerMeter = () => {
    // স্টেট ম্যানেজমেন্ট
    const [crop, setCrop] = useState('');
    const [fertilizer, setFertilizer] = useState('');
    const [landAmount, setLandAmount] = useState('');
    const [result, setResult] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    // ফসলের ডেটাবেজ (১ শতক জমির জন্য সারের হার কেজিতে)
    const database = {
        dhan: { name: 'ধান (Rice)', urea: 0.78, tsp: 0.36, mop: 0.45, gypsum: 0.30, zinc: 0.05 },
        gom: { name: 'গম (Wheat)', urea: 0.60, tsp: 0.42, mop: 0.36, gypsum: 0.24, zinc: 0.03 },
        alu: { name: 'আলু (Potato)', urea: 1.06, tsp: 0.66, mop: 0.84, gypsum: 0.36, zinc: 0.06 },
        vutta: { name: 'ভুট্টা (Maize)', urea: 0.90, tsp: 0.54, mop: 0.48, gypsum: 0.30, zinc: 0.05 },
        shorisha: { name: 'সরিষা (Mustard)', urea: 0.54, tsp: 0.45, mop: 0.30, gypsum: 0.42, zinc: 0.03 }
    };

    // সারের নাম ম্যাপিং
    const fertilizerNames = {
        urea: 'ইউরিয়া (Urea)',
        tsp: 'টিএসপি (TSP)',
        mop: 'এমওপি (MOP)',
        gypsum: 'জিপসাম (Gypsum)',
        zinc: 'দস্তা (Zinc)'
    };

    // হিসাব করার লজিক
    const handleCalculate = (e) => {
        e.preventDefault();
        
        if (!crop || !fertilizer || !landAmount || landAmount <= 0) {
            alert('অনুগ্রহ করে ফসল, সার এবং সঠিক জমির পরিমাণ সিলেক্ট করুন।');
            return;
        }

        setIsCalculating(true);
        setResult(null);

        setTimeout(() => {
            const ratePerShotok = database[crop][fertilizer];
            const totalAmount = (ratePerShotok * parseFloat(landAmount)).toFixed(2);

            setResult({
                cropName: database[crop].name,
                fertilizerName: fertilizerNames[fertilizer],
                total: totalAmount,
                shotok: landAmount
            });
            setIsCalculating(false);
        }, 400);
    };

    // রিসেট ফাংশন
    const handleReset = () => {
        setCrop('');
        setFertilizer('');
        setLandAmount('');
        setResult(null);
    };

    return (
        <section className="bg-[#01160c] min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 md:px-16 relative overflow-hidden">
            
            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600 rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>

            {/* মূল কার্ড - Framer Motion স্ক্রোল অ্যানিমেশন সহ */}
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full bg-emerald-950/20 backdrop-blur-xl p-6 sm:p-10 md:p-14 rounded-[2.5rem] border border-emerald-500/10 shadow-2xl relative z-10"
            >
                
                {/* হেডার সেকশন */}
                <div className="text-center space-y-4 mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                        <FiPlusCircle className="animate-spin [animation-duration:3s]" /> স্মার্ট এগ্রি মিটার
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 tracking-wide leading-tight">
                        ডিজিটাল <span className="text-emerald-500 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">সার পরিমাপক</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                        ফসল ও সারের ধরন নির্বাচন করে আপনার কাঙ্ক্ষিত জমির জন্য সঠিক সারের অনুপাত এক ক্লিকেই বের করুন।
                    </p>
                </div>

                {/* ইনপুট ফর্ম */}
                <form onSubmit={handleCalculate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* ১. ফসলের ড্রপডাউন */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-300 font-semibold text-sm tracking-wide flex items-center gap-2">
                                <BsConeStriped className="text-emerald-500" /> ফসলের নাম
                            </label>
                            <select
                                value={crop}
                                onChange={(e) => setCrop(e.target.value)}
                                className="bg-emerald-900/20 border border-emerald-800/60 focus:border-emerald-500 text-gray-200 rounded-2xl px-4 py-4 focus:outline-none transition-all duration-300 cursor-pointer appearance-none shadow-inner hover:bg-emerald-900/30"
                                required
                            >
                                <option value="" className="bg-[#01160c]">ফসল নির্বাচন করুন</option>
                                <option value="dhan" className="bg-[#01160c]">ধান (Rice)</option>
                                <option value="gom" className="bg-[#01160c]">গম (Wheat)</option>
                                <option value="alu" className="bg-[#01160c]">আলু (Potato)</option>
                                <option value="vutta" className="bg-[#01160c]">ভুট্টা (Maize)</option>
                                <option value="shorisha" className="bg-[#01160c]">সরিষা (Mustard)</option>
                            </select>
                        </div>

                        {/* ২. সারের ড্রপডাউন */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-300 font-semibold text-sm tracking-wide flex items-center gap-2">
                                <BsConeStriped className="text-emerald-500" /> সারের নাম
                            </label>
                            <select
                                value={fertilizer}
                                onChange={(e) => setFertilizer(e.target.value)}
                                className="bg-emerald-900/20 border border-emerald-800/60 focus:border-emerald-500 text-gray-200 rounded-2xl px-4 py-4 focus:outline-none transition-all duration-300 cursor-pointer appearance-none shadow-inner hover:bg-emerald-900/30"
                                required
                            >
                                <option value="" className="bg-[#01160c]">সার নির্বাচন করুন</option>
                                <option value="urea" className="bg-[#01160c]">ইউরিয়া (Urea)</option>
                                <option value="tsp" className="bg-[#01160c]">টিএসপি (TSP)</option>
                                <option value="mop" className="bg-[#01160c]">এমওপি (MOP)</option>
                                <option value="gypsum" className="bg-[#01160c]">জিপসাম (Gypsum)</option>
                                <option value="zinc" className="bg-[#01160c]">দস্তা (Zinc)</option>
                            </select>
                        </div>

                        {/* ৩. জমির পরিমাণ ইনপুট */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-300 font-semibold text-sm tracking-wide flex items-center gap-2">
                                <BsCalculator className="text-emerald-500" /> জমির পরিমাণ (শতক)
                            </label>
                            <input
                                type="number"
                                step="any"
                                value={landAmount}
                                onChange={(e) => setLandAmount(e.target.value)}
                                placeholder="যেমন: ১০"
                                className="bg-emerald-900/20 border border-emerald-800/60 focus:border-emerald-500 text-gray-200 rounded-2xl px-4 py-4 focus:outline-none transition-all duration-300 placeholder-emerald-800 shadow-inner hover:bg-emerald-900/30"
                                required
                            />
                        </div>
                    </div>

                    {/* অ্যাকশন বাটন্স */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={isCalculating}
                            className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-950/50 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <BsCalculator className={`text-xl ${isCalculating ? 'animate-spin' : ''}`} />
                            <span>{isCalculating ? 'হিসাব করা হচ্ছে...' : 'হিসাব করুন'}</span>
                        </button>
                        
                        {result && (
                            <button
                                type="button"
                                onClick={handleReset}
                                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-800/60 hover:border-emerald-500 text-gray-400 hover:text-emerald-300 font-medium px-6 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                            >
                                <FiRefreshCw className="hover:rotate-180 transition-transform duration-500" />
                                <span>মুছে ফেলুন</span>
                            </button>
                        )}
                    </div>
                </form>

                {/* রেজাল্ট কার্ড - এটিও ফ্রেমার মোশন দিয়ে বাউন্স ইনপুট করা হয়েছে */}
                {result && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 12 }}
                        className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-emerald-900/30 to-green-950/20 border border-emerald-500/20 rounded-[2rem] shadow-inner relative overflow-hidden group"
                    >
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full filter blur-xl"></div>
                        
                        <div className="flex flex-col items-center text-center space-y-4">
                            <p className="text-emerald-400 font-medium text-xs sm:text-sm uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/40 px-4 py-1 rounded-full animate-pulse">
                                ফলাফল বিবরণী
                            </p>
                            <h4 className="text-gray-300 text-base sm:text-lg">
                                আপনার <span className="text-gray-100 font-bold underline decoration-emerald-500 decoration-2">{result.shotok} শতক</span> জমিতে <span className="text-emerald-400 font-bold">{result.cropName}</span> চাষের জন্য:
                            </h4>
                            <div className="text-gray-400 text-sm sm:text-base">
                                প্রয়োজনীয় <span className="text-gray-100 font-semibold">{result.fertilizerName}</span> এর পরিমাণ হলো:
                            </div>
                            
                            <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-10 py-4 rounded-2xl shadow-2xl border border-emerald-400/20 relative group-hover:scale-105 transition-transform duration-300">
                                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                                    {result.total} <span className="text-lg sm:text-2xl font-normal text-emerald-100">কেজি</span>
                                </span>
                            </div>

                            <p className="text-[11px] text-gray-500 italic max-w-md pt-2">
                                * বি.প্র: এটি ১ শতক জমির সরকারি কৃষি সম্প্রসারণের প্রমিত পরিমাপের ওপর ভিত্তি করে তৈরি।
                            </p>
                        </div>
                    </motion.div>
                )}

            </motion.div>
        </section>
    );
};

export default FertilizerMeter;