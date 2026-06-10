import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneCall } from 'react-icons/fi'; 

const AgriculturalAdvice = () => {
    // স্মুথ স্ক্রল ফাংশন
    const handleScrollToGuide = () => {
        const targetSection = document.getElementById('crop-guide');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#01160c] min-h-[80vh] flex items-center py-16 px-6 md:px-16 overflow-hidden border-b border-emerald-500/5"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                
                {/* বাম পাশ: কৃষি পরামর্শ ও টেক্সট */}
                <div className="space-y-6 text-center md:text-left z-10">
                    <span className="bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
                        কৃষি সেবা
                    </span>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-100 leading-normal md:leading-snug tracking-wide">
                        সঠি <span className="text-emerald-500">কৃষি পরামর্শ</span> <br className="hidden sm:inline" />
                        নিন, ফসলের ফলন বাড়ান
                    </h1>
                    
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                        আধুনিক উপায়ে চাষাবাদ এবং সঠিক সময়ে সঠিক সার ও কীটনাশক ব্যবহারের সঠিক দিকনির্দেশনা পেতে আমাদের অভিজ্ঞ কৃষি কর্মকর্তাদের পরামর্শ নিন।
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                        {/* পরামর্শ নিন বাটন */}
                        <a 
                            href="tel:+8801700000000" 
                            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-900/40 transition duration-300"
                        >
                            <FiPhoneCall className="text-lg" /> 
                            <span>পরামর্শ নিন</span>
                        </a>

                        {/* আরো জানুন বাটন - এখন ক্লিক করলে স্ক্রল হয়ে নিচে যাবে */}
                        <button 
                            onClick={handleScrollToGuide}
                            className="border-2 border-emerald-700/50 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 font-medium px-8 py-3.5 rounded-xl transition duration-300 cursor-pointer"
                        >
                            আরো জানুন
                        </button>
                    </div>
                </div>

                {/* ডান পাশ: ছবি */}
                <div className="flex justify-center items-center relative w-full">
                    <div className="absolute w-72 h-72 bg-emerald-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
                    
                    <img 
                        src="https://i.ibb.co.com/cKRLF815/IMG-20260115-WA0010.jpg" 
                        alt="কৃষি মাঠ" 
                        className="rounded-2xl shadow-2xl relative z-10 w-full max-w-md md:max-w-full object-cover h-[300px] sm:h-[380px] md:h-[450px] border-4 border-emerald-950"
                    />
                </div>

            </div>
        </motion.section>
    );
};

export default AgriculturalAdvice;