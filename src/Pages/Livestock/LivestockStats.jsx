import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaWarehouse, FaCow, FaEgg, FaUsers } from 'react-icons/fa6';

const LivestockStats = () => {
    // স্ক্রোল ট্র্যাক করার জন্য মেইন সেকশনের রেফারেন্স
    const containerRef = useRef(null);

    // useScroll দিয়ে এই সেকশনের স্ক্রোল পজিশন ট্র্যাক করা হচ্ছে
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // স্ক্রিনের নিচে আসার পর থেকে স্ক্রিনের ওপরে যাওয়া পর্যন্ত
    });

    // স্ক্রোলের ওপর ভিত্তি করে ডাইনামিক ভ্যালু তৈরি (অ্যাডভান্সড ইফেক্ট)
    const scaleEffect = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.85, 1, 1, 0.85]);
    const opacityEffect = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);
    const yEffect = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

    // টাইটেলের জন্য আলাদা ট্র্যান্সফর্ম (প্যারাল্যাক্স ফিল দেওয়ার জন্য)
    const titleYEffect = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [50, 0, 0, -50]);

    const statsData = [
      {
        id: 1,
        title: "মোট নিবন্ধিত খামার",
        subtitle: "Total Farms",
        value: "১২,৫০০+",
        icon: <FaWarehouse size={26} />,
        color: "from-emerald-500/20 to-teal-500/5",
        iconColor: "text-emerald-400"
      },
      {
        id: 2,
        title: "মোট গবাদি পশু",
        subtitle: "Cow, Goat & Poultry",
        value: "৪,৮৫,০০০+",
        icon: <FaCow size={26} />,
        color: "from-amber-500/20 to-orange-500/5",
        iconColor: "text-amber-400"
      },
      {
        id: 3,
        title: "দৈনিক উৎপাদন",
        subtitle: "Milk & Eggs Daily",
        value: "৯২,০০০+ লি.",
        icon: <FaEgg size={26} />,
        color: "from-cyan-500/20 to-blue-500/5",
        iconColor: "text-cyan-400"
      },
      {
        id: 4,
        title: "সেবা গ্রহীতা খামারি",
        subtitle: "Happy Farmers",
        value: "৩৫,২০০+",
        icon: <FaUsers size={26} />,
        color: "from-purple-500/20 to-indigo-500/5",
        iconColor: "text-purple-400"
      }
    ];

    return (
        <div 
            ref={containerRef} 
            className="bg-[#01160c] py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40 overflow-hidden relative"
        >
            {/* ব্যাকগ্রাউন্ডে একটি মৃদু গ্লো ইফেক্ট যা স্ক্রোলের সাথে সরবে */}
            <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" 
            />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* --- ফিক্সড সেকশন হেডার/টাইটেল --- */}
                <motion.div 
                    style={{ y: titleYEffect, opacity: opacityEffect }}
                    className="text-center mb-16 md:mb-20 space-y-4"
                >
                    {/* ব্যাজের কালার একদম ব্রাইট এবং ক্লিয়ার করা হয়েছে */}
                    <span className="inline-block text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-sm shadow-sm">
                        লাইভ পরিসংখ্যান
                    </span>
                    
                    {/* ওভারল্যাপ প্রবলেম ফিক্স করার জন্য py-2 এবং inline-block ব্যবহার করা হয়েছে */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-snug">
                        আমাদের অর্জিত{' '}
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 py-2 px-1">
                            সাফল্যের চিত্র
                        </span>
                    </h2>
                    
                    {/* ডেসক্রিপশন টেক্সটের ভিজিবিলিটি বাড়ানো হয়েছে */}
                    <p className="text-emerald-100/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
                        সমগ্র দেশজুড়ে প্রান্তিক খামারিদের আধুনিক প্রযুক্তির আওতায় এনে প্রাণিসম্পদ উৎপাদন ও অর্থনৈতিক সমৃদ্ধি অর্জনে আমরা অবিরাম কাজ করে যাচ্ছি।
                    </p>
                </motion.div>

                {/* মেইন মোশন কন্টেইনার: যা স্ক্রোলের সাথে রিয়েল-টাইমে সাইজ ও পজিশন চেঞ্জ করবে */}
                <motion.div 
                    style={{ 
                        scale: scaleEffect, 
                        opacity: opacityEffect,
                        y: yEffect
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {statsData.map((stat) => (
                        <motion.div
                            key={stat.id}
                            // মাউস হোভার করলে স্মুথলি রিঅ্যাক্ট করবে
                            whileHover={{ 
                                y: -10, 
                                scale: 1.02,
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderColor: "rgba(16, 185, 129, 0.3)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative overflow-hidden bg-white/[0.01] border border-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between group cursor-pointer shadow-xl"
                        >
                            {/* নিয়ন গ্লো */}
                            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="flex justify-between items-start z-10">
                                <div>
                                    <h3 className="text-sm font-semibold text-emerald-300/80 tracking-wide">
                                        {stat.title}
                                    </h3>
                                    <p className="text-[11px] text-white/30 tracking-wider uppercase mt-0.5">
                                        {stat.subtitle}
                                    </p>
                                </div>

                                {/* গ্লাসমরফিক আইকন বক্স */}
                                <div className={`p-3 bg-white/5 rounded-xl border border-white/10 ${stat.iconColor} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                            </div>

                            {/* ভ্যালু ডিসপ্লে */}
                            <div className="mt-8 z-10">
                                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-300 transition-all duration-300">
                                    {stat.value}
                                </span>
                            </div>

                            {/* নিচ দিয়ে একটি সুন্দর বর্ডার লাইন এনিমেশন */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-emerald-500/60 group-hover:to-transparent transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default LivestockStats;