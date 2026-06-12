import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaVideo, FaClock, FaUserTie, FaBookOpen, FaStar, FaCirclePlay } from 'react-icons/fa6';

const LearnAgriculture = () => {
  // ডামি ডাটা: প্রফেসর এবং তাদের ক্লাসের তালিকা
  const courses = [
    {
      id: 1,
      title: "আধুনিক ধান চাষ ও রোগ বালাই ব্যবস্থাপনা",
      professor: "ড. আবু বকর সিদ্দিক",
      designation: "প্রধান বৈজ্ঞানিক কর্মকর্তা, BRRI",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400",
      duration: "২ ঘণ্টা ৩০ মিনিট",
      lessons: 12,
      rating: 4.9,
      category: "শস্য বিজ্ঞান"
    },
    {
      id: 2,
      title: "মাটি পরীক্ষা ও সুষম সার প্রয়োগ পদ্ধতি",
      professor: "অধ্যাপক ড. জিনাত রেহানা",
      designation: "মৃত্তিকা বিজ্ঞান বিভাগ, BAU",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
      duration: "১ ঘণ্টা ৪৫ মিনিট",
      lessons: 8,
      rating: 4.8,
      category: "মৃত্তিকা বিজ্ঞান"
    },
    {
      id: 3,
      title: "উন্নত জাতের আম চাষ ও বাণিজ্যিক বাজারজাতকরণ",
      professor: "ড. এম. এ. জামান",
      designation: "ফল গবেষণা কেন্দ্র, রাজশাহী",
      image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=400",
      duration: "৩ ঘণ্টা",
      lessons: 15,
      rating: 5.0,
      category: "উদ্যানতত্ত্ব"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-950 to-emerald-950 pt-28 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section / Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 text-lime-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
          >
            <FaGraduationCap className="text-lg" />
            কৃষি শিক্ষা ও লাইভ ক্লাস
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-lime-400 leading-tight mb-4"
          >
            দেশের সেরা কৃষি বিশেষজ্ঞদের <br />থেকে সরাসরি শিখুন
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg"
          >
            বিশ্ববিদ্যালয়ের স্বনামধন্য প্রফেসর এবং কৃষি বিজ্ঞানীদের স্পেশাল ক্লাসের মাধ্যমে আপনার কৃষি জ্ঞানকে নিয়ে যান পেশাদার পর্যায়ে।
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "অভিজ্ঞ প্রফেসর", count: "২০+" },
            { label: "অনলাইন কোর্স", count: "৫০+" },
            { label: "সফল খামারী", count: "৫,০০০+" },
            { label: "লাইভ ক্লাস", count: "সাপ্তাহিক" }
          ].map((stat, i) => (
            <div key={i} className="bg-green-950/40 border border-green-800/40 p-4 md:p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-lime-400 mb-1">{stat.count}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Course Grid Section */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold border-l-4 border-lime-400 pl-3">চলতি কোর্সসমূহ</h2>
          <span className="text-sm text-lime-400 cursor-pointer hover:underline">সবগুলো দেখুন</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-green-950/60 to-emerald-950 border border-green-800/60 rounded-2xl overflow-hidden shadow-xl flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-green-900/90 text-lime-400 px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm border border-green-700/50">
                  {course.category}
                </div>
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaCirclePlay className="text-5xl text-lime-400 drop-shadow-lg" />
                </div>
              </div>

              {/* Content Box */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-lime-400 transition-colors duration-300 line-clamp-2 mb-4">
                  {course.title}
                </h3>

                {/* Professor Info */}
                <div className="flex items-start gap-3 bg-green-900/20 border border-green-800/40 p-3 rounded-xl mb-4 mt-auto">
                  <div className="p-2.5 bg-lime-500/10 text-lime-400 rounded-xl">
                    <FaUserTie className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-gray-200 truncate">{course.professor}</p>
                    <p className="text-xs text-gray-400 truncate">{course.designation}</p>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-green-900/60 pt-3">
                  <div className="flex items-center gap-1.5">
                    <FaClock className="text-lime-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaBookOpen className="text-lime-400" />
                    <span>{course.lessons}টি ক্লাস</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-amber-400" />
                    <span className="text-gray-200 font-medium">{course.rating}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-5 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-green-950 font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm group-hover:scale-[1.02]">
                  <FaVideo />
ক্লাসে জয়েন করুন
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LearnAgriculture;