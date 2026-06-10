import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSyringe, FaCalculator, FaFileInvoiceDollar } from 'react-icons/fa6';
import { GiDna2 } from 'react-icons/gi'; // কৃত্রিম প্রজননের (DNA/Seed) জন্য পারফেক্ট আইকন

const LivestockServices = () => {
    // স্ক্রোল অ্যানিমেশনের জন্য সেকশন রেফারেন্স
    const containerRef = useRef(null);

    // useScroll দিয়ে স্ক্রোল ট্র্যাকিং
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // স্ক্রোলের সাথে পুরো সেকশনের স্মুথ ফেইড ও স্কেল ইফেক্ট
    const opacityEffect = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scaleEffect = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.93, 1, 1, 0.93]);
    const yEffect = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

    const services = [
        {
            id: 1,
            title: "টিকা ও চিকিৎসা",
            engTitle: "Vaccination & Medical Care",
            desc: "গবাদি পশুর মারাত্মক রোগবালাই প্রতিরোধে নিয়মিত টিকাদান কর্মসূচির সময়সূচি, ভ্যাকসিন বুকিং এবং জরুরি ভেটেরিনারি ক্যাম্পের তথ্য।",
            icon: <FaSyringe size={24} />,
            badge: "ফ্রি শিডিউল",
            glow: "from-red-500/10 to-transparent",
            iconColor: "text-red-400 bg-red-500/10 border-red-500/20",
            hoverBorder: "group-hover:border-red-500/30"
        },
        {
            id: 2,
            title: "কৃত্রিম প্রজনন",
            engTitle: "Artificial Insemination",
            desc: "স্থানীয় জাতের গরুর গুণগত মান ও দুধ উৎপাদন ক্ষমতা বৃদ্ধিতে উন্নত জাতের (যেমন: ফ্রিজিয়ান, ব্রাউন সুইস) বীজ সংক্রান্ত লাইভ তথ্য ও বুকিং।",
            icon: <GiDna2 size={26} />,
            badge: "উন্নত জাত",
            glow: "from-teal-500/10 to-transparent",
            iconColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
            hoverBorder: "group-hover:border-teal-500/30"
        },
        {
            id: 3,
            title: "খাদ্য ও পুষ্টি",
            engTitle: "Feed & Nutrition",
            desc: "কম খরচে মাংস ও দুধের সর্বোচ্চ উৎপাদন পেতে কাঁচা ঘাস, খড় এবং দানাদার খাদ্যের সঠিক অনুপাত বের করার আধুনিক সুষম খাদ্য ফর্মুলা।",
            icon: <FaCalculator size={22} />,
            badge: "ক্যালকুলেটর",
            glow: "from-amber-500/10 to-transparent",
            iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
            hoverBorder: "group-hover:border-amber-500/30"
        },
        {
            id: 4,
            title: "ঋণ ও অনুদান",
            engTitle: "Loans & Subsidies",
            desc: "নতুন খামার স্থাপন বা সম্প্রসারণের জন্য সরকারি ও বেসরকারি সহজ শর্তের খামার ঋণ, অনুদান পাওয়ার যোগ্যতা এবং অনলাইনে আবেদনের গাইডলাইন।",
            icon: <FaFileInvoiceDollar size={24} />,
            badge: "সরকারি সুবিধা",
            glow: "from-purple-500/10 to-transparent",
            iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
            hoverBorder: "group-hover:border-purple-500/30"
        }
    ];

    return (
        <div 
            ref={containerRef}
            className="bg-[#01160c] py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40 overflow-hidden relative"
        >
            {/* ব্যাকগ্রাউন্ড লাইটিং ইফেক্ট */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />

            {/* স্ক্রোল এনিমেটেড মেইন কন্টেইনার */}
            <motion.div 
                style={{ opacity: opacityEffect, scale: scaleEffect, y: yEffect }}
                className="max-w-7xl mx-auto relative z-10"
            >
                
                {/* সেকশন হেডার */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <span className="inline-block text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                        সেবা ও সুযোগ-সুবিধা
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-snug">
                        খামারিদের জন্য <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 py-2 px-1">ডিজিটাল সেবাসমূহ</span>
                    </h2>
                    <p className="text-emerald-100/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
                        প্রান্তিক খামারিদের দোরগোড়ায় আধুনিক চিকিৎসা, প্রজনন এবং আর্থিক সহায়তা পৌঁছে দিতে আমাদের এই সমন্বিত অনলাইন সেবা প্ল্যাটফর্ম।
                    </p>
                </div>

                {/* সেবাসমূহের ৪-কলাম গ্রিড (বড় স্ক্রিনে ৪টি, ট্যাবে ২টি, মোবাইলে ১টি) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ 
                                y: -8,
                                backgroundColor: "rgba(255, 255, 255, 0.03)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className={`relative overflow-hidden bg-white/[0.01] border border-white/5 backdrop-blur-md rounded-2xl p-6 md:p-7 flex flex-col justify-between group cursor-pointer shadow-2xl transition-colors duration-300 ${service.hoverBorder}`}
                        >
                            {/* প্রতিটি কার্ডের নিজস্ব ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
                            <div className={`absolute -right-12 -top-12 w-36 h-36 bg-gradient-to-br ${service.glow} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div>
                                {/* টপ কার্ড রো: আইকন এবং ব্যাজ */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.iconColor}`}>
                                        {service.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-emerald-300/80 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md tracking-wide">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* টাইটেল ও সাবটাইটেল */}
                                <div className="space-y-1 mb-4">
                                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-[11px] font-medium text-white/30 tracking-wide uppercase">
                                        {service.engTitle}
                                    </p>
                                </div>

                                {/* ডেসক্রিপশন টেক্সট */}
                                <p className="text-xs sm:text-sm text-emerald-100/60 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>

                            {/* নিচে একটি সুন্দর "বিস্তারিত জানুন" ইন্ডিকেটর যা হোভার করলে ভেসে উঠবে */}
                            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity">
                                <span>বিস্তারিত দেখুন</span>
                                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>

                            {/* বটম হোভার আন্ডারলাইন অ্যানিমেশন */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-emerald-400 group-hover:to-transparent transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default LivestockServices;