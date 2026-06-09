import React from 'react';
import { motion } from 'framer-motion';
  
import farmingImg from '../../assets/process.jpg'; 
import { FaCompass, FaHandHoldingHeart, FaSeedling, FaTractor } from 'react-icons/fa6';
import { GiProcessor } from 'react-icons/gi';

const Farmingprocess = () => {
  // data arry 
  const steps = [
    {
      id: "০১",
      icon: <FaCompass className="text-emerald-950 text-2xl sm:text-3xl" />,
      title: "জমি পরিকল্পনা",
      desc: "মাটি পরীক্ষা ও সঠিক ফসল নির্বাচনের মাধ্যমে চাষাবাদের প্রাথমিক প্রস্তুতি গ্রহণ।",
    },
    {
      id: "০২",
      icon: <FaSeedling className="text-emerald-950 text-2xl sm:text-3xl" />,
      title: "বীজ ও রোপণ",
      desc: "আধুনিক ও বৈজ্ঞানিক পদ্ধতিতে উন্নত জাতের রোগমুক্ত বীজ ও চারা সঠিক নিয়মে রোপণ।",
    },
    {
      id: "০৩",
      icon: <FaHandHoldingHeart className="text-emerald-950 text-2xl sm:text-3xl" />,
      title: "ফসল পরিচর্যা",
      desc: "সঠিক সময়ে সুষম সার প্রয়োগ, সেচ ব্যবস্থা এবং পরিবেশ-বান্ধব উপায়ে পোকা দমন।",
    },
    {
      id: "০৪",
      icon: <FaTractor className="text-emerald-950 text-2xl sm:text-3xl" />,
      title: "সঠিক উপায়ে কর্তন",
      desc: "ফসল পরিপক্ক হওয়ার পর আধুনিক যন্ত্রপাতির সাহায্যে পুষ্টিগুণ বজায় রেখে ফসল সংগ্রহ।",
    },
  ];

  // animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    
    <section className="relative  py-16 md:py-24 overflow-hidden border-b border-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 md:mb-20">
          
           
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lime-400 uppercase tracking-widest">
            <GiProcessor/>  আমাদের কাজের প্রক্রিয়া
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight font-bangla">
              আমাদের সহজ এবং <br className="hidden sm:inline" />
              <span className="text-lime-400">কার্যকরী চাষাবাদ</span> পদ্ধতি
            </h2>
            <div className="h-1 w-16 bg-lime-500 mx-auto lg:mx-0 mt-2 rounded-full" />
          </div>

          {/* right img */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-green-900/40"
          >
            <img 
              src={farmingImg} 
              alt="Farming Process" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

        </div>

        {/* 4 car process line */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative"
        >
          
          
          <div className="absolute top-[45px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-green-800 hidden lg:block pointer-events-none" />

          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group relative"
            >
               
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">
                ধাপ - [{step.id}]
              </span>

            
              <div className="mb-5 p-4 bg-lime-400 rounded-2xl shadow-lg border border-lime-300 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                {step.icon}
              </div>

               
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 font-bangla group-hover:text-lime-400 transition-colors">
                {step.title}
              </h3>

              
              <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Farmingprocess;