import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// এখানে Gi (Game Icons) এবং Fa এর নিরাপদ আইকনগুলো আলাদা করে ইম্পোর্ট করা হয়েছে যা ক্র্যাশ করবে না
import { FaCow, FaEgg, FaFish, FaChevronDown } from 'react-icons/fa6'; 
import { GiGoat } from 'react-icons/gi'; 

const LivestockCategories = () => {
    // বর্তমানে কোন ক্যাটাগরি একটিভ আছে তা ট্র্যাক করার স্টেট
    const [activeId, setActiveId] = useState(null);

    // স্ক্রোল অ্যানিমেশনের জন্য সেকশন রেফারেন্স
    const sectionRef = useRef(null);

    // useScroll দিয়ে এই সেকশনের স্ক্রোল প্রগতি ট্র্যাক করা
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // স্ক্রোলের ওপর ভিত্তি করে টাইটেল ও কার্ড গ্রিডের জন্য স্মুথ অ্যানিমেশন ভ্যালু
    const opacityEffect = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scaleEffect = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.9, 1, 1, 0.9]);
    const yEffect = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [70, 0, 0, -70]);

    const categories = [
        {
            id: 'dairy',
            title: "ডেইরি (Dairy Unit)",
            subtitle: "গাভী পালন ও দুধ উৎপাদন",
            icon: <FaCow size={26} />,
            glowColor: "from-emerald-500/20 to-transparent",
            details: [
                "উন্নত জাতের গাভী নির্বাচন (যেমন: ফ্রিজিয়ান, শাহিওয়াল)।",
                "আধুনিক ডেইরি শেড বা খামার ঘর ব্যবস্থাপনা।",
                "উচ্চ উৎপাদনশীল ঘাস চাষ এবং সুষম দানাদার খাদ্য তৈরি।",
                "দুধ দোয়ানোর স্বয়ংক্রিয় বা হাইজেনিক পদ্ধতি ও সংরক্ষণ।"
            ]
        },
        {
            id: 'poultry',
            title: "পোল্ট্রি (Poultry Unit)",
            subtitle: "ব্রয়লার, লেয়ার, সোনালী ও হাঁস",
            icon: <FaEgg size={24} />,
            glowColor: "from-amber-500/20 to-transparent",
            details: [
                "মাংসের জন্য ব্রয়লার ও সোনালী মুরগি পালন পদ্ধতি।",
                "ডিম উৎপাদনের জন্য লেয়ার মুরগির বিশেষ যত্ন ও আলো-ব্যবস্থাপনা।",
                "লাভজনক উপায়ে উন্নত জাতের হাঁস পালন ও খামার তৈরি।",
                "পোল্ট্রি খামারের সাধারণ রোগবালাই ও বায়োসিকিউরিটি গাইড।"
            ]
        },
        {
            id: 'caprine',
            title: "ছাগল ও ভেড়া (Caprine/Ovine)",
            subtitle: "ব্ল্যাক বেঙ্গল ছাগল ও ভেড়া পালন",
            icon: <GiGoat size={28} />, // ফিক্সড আইকন যা ক্র্যাশ করবে না
            glowColor: "from-cyan-500/20 to-transparent",
            details: [
                "বাংলাদেশের সম্পদ 'ব্ল্যাক বেঙ্গল' ছাগল পালনের সঠিক নিয়ম।",
                "মাচা পদ্ধতিতে ছাগল ও ভেড়ার ঘর তৈরি করে রোগ প্রতিরোধ।",
                "ছাগলের পিপিআর (PPR) রোগ ও অন্যান্য জরুরি প্রতিষেধক টিকা।",
                "কম খরচে ভেড়া পালন ও পশম/মাংসের বাজারজাতকরণ।"
            ]
        },
        {
            id: 'others',
            title: "অন্যান্য (Others Unit)",
            subtitle: "কোয়েল, টার্কি ও সমন্বিত মৎস্য",
            icon: <FaFish size={26} />,
            glowColor: "from-purple-500/20 to-transparent",
            details: [
                "বাণিজ্যিক ভিত্তিতে কোয়েল পাখির ডিম ও মাংস উৎপাদন।",
                "টার্কি মুরগি পালনের আধুনিক চারণভূমি ও খাদ্য তালিকা।",
                "খামারের সাথে সমন্বিত মৎস্য চাষ (পুকুর ও খামার একসঙ্গে)।",
                "বিকল্প পশুপালন ও নতুন খামারিদের জন্য স্টার্টআপ পরামর্শ।"
            ]
        }
    ];

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div 
            ref={sectionRef}
            className="bg-[#01160c] py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40 overflow-hidden relative"
        >
            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট যা স্ক্রোলের সাথে আলতো করে নড়বে */}
            <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
                className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" 
            />

            {/* মেইন অ্যানিমেটেড কন্টেইনার: যা স্ক্রোল করার সময় স্মুথলি পপ-আপ হবে */}
            <motion.div 
                style={{ opacity: opacityEffect, scale: scaleEffect, y: yEffect }}
                className="max-w-6xl mx-auto relative z-10"
            >
                
                {/* সেকশন হেডার */}
                <div className="text-center mb-16 md:mb-20 space-y-4">
                    <span className="inline-block text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                        খামার ক্যাটাগরি
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-snug">
                        প্রাণিসম্পদের <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 py-2 px-1">প্রধান খাতসমূহ</span>
                    </h2>
                    <p className="text-emerald-100/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-4">
                        নির্দিষ্ট ক্যাটাগরির ওপর ক্লিক করে আপনার পছন্দের প্রাণিসম্পদ পালন ও ব্যবস্থাপনার বিস্তারিত গাইডলাইন দেখে নিন।
                    </p>
                </div>

                {/* ক্যাটাগরি গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {categories.map((cat) => {
                        const isOpen = activeId === cat.id;
                        return (
                            <div key={cat.id} className="flex flex-col">
                                {/* মেইন CARD বাটন */}
                                <motion.div
                                    onClick={() => toggleAccordion(cat.id)}
                                    whileHover={{ 
                                        y: -5,
                                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                                        borderColor: "rgba(16, 185, 129, 0.25)"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                    className={`relative overflow-hidden bg-white/[0.01] border ${isOpen ? 'border-emerald-500/40 bg-white/[0.04]' : 'border-white/5'} backdrop-blur-md rounded-2xl p-6 flex items-center justify-between group cursor-pointer shadow-xl transition-all duration-350 select-none`}
                                >
                                    {/* নিয়ন গ্লো ব্যাকগ্রাউন্ড */}
                                    <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${cat.glowColor} rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    <div className="flex items-center gap-5 z-10">
                                        {/* গ্লাসমরফিক আইকন বক্স */}
                                        <div className={`p-3.5 bg-white/5 rounded-xl border border-white/10 text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${isOpen ? 'text-amber-400 border-amber-500/30 bg-amber-500/10' : ''}`}>
                                            {cat.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                                                {cat.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-emerald-300/60 mt-0.5">
                                                {cat.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* অ্যারো ডাউন আইকন এনিমেশন */}
                                    <motion.div 
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`text-white/40 group-hover:text-white z-10 pr-1 ${isOpen ? 'text-amber-400' : ''}`}
                                    >
                                        <FaChevronDown size={16} />
                                    </motion.div>

                                    {/* বটম হোভার বর্ডার লাইন */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-emerald-500/40 group-hover:to-transparent transition-all duration-500" />
                                </motion.div>

                                {/* বিস্তারিত ড্রপডাউন ডেসক্রিপশন (Framer Motion Accordion) */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden bg-black/20 border-x border-b border-emerald-500/20 rounded-b-2xl mx-3 -mt-2 shadow-inner"
                                        >
                                            <div className="p-5 pt-7 space-y-3">
                                                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 border-b border-white/5 pb-1.5">
                                                    মূল ব্যবস্থাপনাসমূহ:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {cat.details.map((detail, idx) => (
                                                        <motion.li 
                                                            initial={{ x: -10, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: idx * 0.04 }}
                                                            key={idx} 
                                                            className="text-xs sm:text-sm text-emerald-100/80 flex items-start gap-2 leading-relaxed"
                                                        >
                                                            <span className="text-emerald-400 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 block" />
                                                            {detail}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </motion.div>
        </div>
    );
};

export default LivestockCategories;