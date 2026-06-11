import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiLayers, FiCpu } from 'react-icons/fi';
import { BsCalculator } from 'react-icons/bs';

const SmartTools = () => {
  const [fishCount, setFishCount] = useState('');
  const [avgWeight, setAvgWeight] = useState('');
  const [feedResult, setFeedResult] = useState(null);

  const [totalCost, setTotalCost] = useState('');
  const [expectedSale, setExpectedSale] = useState('');
  const [profitResult, setProfitResult] = useState(null);

  const handleCalculateFeed = (e) => {
    e.preventDefault();
    if (!fishCount || !avgWeight) return;
    const totalBiomassKg = (parseFloat(fishCount) * parseFloat(avgWeight)) / 1000;
    setFeedResult((totalBiomassKg * 0.03).toFixed(2));
  };

  const handleCalculateProfit = (e) => {
    e.preventDefault();
    if (!totalCost || !expectedSale) return;
    setProfitResult(parseFloat(expectedSale) - parseFloat(totalCost));
  };

  return (
    <section className="bg-[#01160c] min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden flex items-center justify-center">
      
      {/* ব্যাকগ্রাউন্ড লাইট গ্লো ইফেক্ট */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-[150px] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600 rounded-full filter blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl w-full relative z-10 space-y-12">
        
        {/* সেকশন হেডার */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-900/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider shadow-inner">
            <FiCpu className="animate-spin [animation-duration:5s] text-sm" /> SMART FARMING TOOLS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 tracking-wide leading-tight">
            স্মার্ট <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-400">ক্যালকুলেটর ও টুলস</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
            সহজ কিছু তথ্য ইনপুট দিয়ে আপনার খামারের প্রতিদিনের সঠিক খাবারের পরিমাণ এবং আনুমানিক লাভ-ক্ষতি মুহূর্তেই হিসাব করে নিন।
          </p>
        </div>

        {/* মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-start">
          
          {/* ১. খাদ্য পরিমাপক ক্যালকুলেটর */}
          <div className="bg-[#021c12]/40 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-emerald-900/40 shadow-2xl flex flex-col justify-between min-h-[350px]">
            <div>
              {/* হেডার */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/50 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <FiLayers className="text-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-100">খাদ্য পরিমাপক ক্যালকুলেটর</h3>
              </div>

              {/* ফর্ম */}
              <form onSubmit={handleCalculateFeed} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* ইনপুট ১ */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-300 font-medium text-xs sm:text-sm tracking-wide leading-snug">
                      پুকুরে মোট মাছের সংখ্যা (টি)
                    </label>
                    <input 
                      type="number" 
                      placeholder="যেমন: ৫০০০"
                      value={fishCount}
                      onChange={(e) => setFishCount(e.target.value)}
                      className="w-full bg-[#01160c]/60 border border-emerald-900/60 focus:border-emerald-500 text-gray-200 text-sm rounded-xl px-4 py-3.5 focus:outline-none transition-all placeholder-emerald-900 shadow-inner"
                      required
                    />
                  </div>

                  {/* ইনপুট ২ */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-300 font-medium text-xs sm:text-sm tracking-wide leading-snug">
                      মাছের গড় ওজন (গ্রাম)
                    </label>
                    <input 
                      type="number" 
                      placeholder="যেমন: ২০০"
                      value={avgWeight}
                      onChange={(e) => setAvgWeight(e.target.value)}
                      className="w-full bg-[#01160c]/60 border border-emerald-900/60 focus:border-emerald-500 text-gray-200 text-sm rounded-xl px-4 py-3.5 focus:outline-none transition-all placeholder-emerald-900 shadow-inner"
                      required
                    />
                  </div>
                </div>

                {/* বাটন */}
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg active:scale-[0.99] mt-2"
                >
                  <BsCalculator />
                  <span>খাবারের পরিমাণ হিসাব করুন</span>
                </button>
              </form>
            </div>

            {/* রেজাল্ট */}
            {feedResult !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 p-4 bg-emerald-950/30 border border-emerald-900/35 rounded-xl text-center">
                <p className="text-xs text-emerald-400 font-medium">দৈনিক খাবার লাগবে: <span className="text-lg font-black text-white ml-1">{feedResult} কেজি</span></p>
              </motion.div>
            )}
          </div>

          {/* ২. লাভ-ক্ষতি হিসাবকারী */}
          <div className="bg-[#021c12]/40 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-emerald-900/40 shadow-2xl flex flex-col justify-between min-h-[350px]">
            <div>
              {/* হেডার */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/50 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <FiTrendingUp className="text-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-100">লাভ-ক্ষতি হিসাবকারী</h3>
              </div>

              {/* ফর্ম */}
              <form onSubmit={handleCalculateProfit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* ইনপুট ১ */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-300 font-medium text-xs sm:text-sm tracking-wide leading-snug">
                      মোট খরচ (টাকা)
                    </label>
                    <input 
                      type="number" 
                      placeholder="পোনা, খাবার ও অন্যান্য"
                      value={totalCost}
                      onChange={(e) => setTotalCost(e.target.value)}
                      className="w-full bg-[#01160c]/60 border border-emerald-900/60 focus:border-emerald-500 text-gray-200 text-sm rounded-xl px-4 py-3.5 focus:outline-none transition-all placeholder-emerald-900 shadow-inner"
                      required
                    />
                  </div>

                  {/* ইনপুট ২ */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-300 font-medium text-xs sm:text-sm tracking-wide leading-snug">
                      সম্ভাব্য বিক্রয়মূল্য (টাকা)
                    </label>
                    <input 
                      type="number" 
                      placeholder="মোট বিক্রির আনুমানিক"
                      value={expectedSale}
                      onChange={(e) => setExpectedSale(e.target.value)}
                      className="w-full bg-[#01160c]/60 border border-emerald-900/60 focus:border-emerald-500 text-gray-200 text-sm rounded-xl px-4 py-3.5 focus:outline-none transition-all placeholder-emerald-900 shadow-inner"
                      required
                    />
                  </div>
                </div>

                {/* বাটন */}
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg active:scale-[0.99] mt-2"
                >
                  <BsCalculator />
                  <span>লাভ/ক্ষতি হিসাব করুন</span>
                </button>
              </form>
            </div>

            {/* রেজাল্ট */}
            {profitResult !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-5 p-4 border rounded-xl text-center ${profitResult >= 0 ? 'bg-emerald-950/30 border-emerald-900/35' : 'bg-rose-950/20 border-rose-900/30'}`}>
                <p className="text-xs text-gray-400 font-medium">{profitResult >= 0 ? 'সম্ভাব্য নীট লাভ:' : 'সম্ভাব্য লোকসান:'} <span className={`text-lg font-black ml-1 ${profitResult >= 0 ? 'text-green-400' : 'text-rose-400'}`}>{Math.abs(profitResult).toLocaleString()} টাকা</span></p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartTools;