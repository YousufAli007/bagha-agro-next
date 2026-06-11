import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSlidersH, FaVideo, FaGraduationCap, FaTv, FaChevronDown } from 'react-icons/fa';

const TechnologyTraining = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "বায়োফ্লক ও আরএএস (RAS)",
      subtitle: "আধুনিক পদ্ধতিতে কম জায়গায় অধিক মাছ চাষের গাইডলাইন",
      icon: <FaSlidersH className="text-xl text-emerald-400" />,
      details: "সীমাবদ্ধ জায়গায় বৈজ্ঞানিক উপায়ে বিপুল পরিমাণ মাছ উৎপাদনের আধুনিক কলাকৌশল। ব্যাকটেরিয়ার মাধ্যমে পানি ফিল্টারিং (Biofloc) এবং রিসার্কুলেটিং অ্যাকুয়াকালচার সিস্টেম (RAS) এর ট্যাংক তৈরি ও অ্যামোনিয়া নিয়ন্ত্রণের সম্পূর্ণ গাইড।"
    },
    {
      title: "ভিডিও টিউটোরিয়াল",
      subtitle: "মাছের খাবার তৈরি, পোনা ছাড়া এবং জাল টানার প্রাকটিক্যাল ভিডিও",
      icon: <FaVideo className="text-xl text-emerald-400" />,
      details: "ভিডিওর মাধ্যমে সরাসরি প্রাকটিক্যাল কাজ শিখুন। খামারে কম খরচে পুষ্টিকর খাবার তৈরি, নতুন পোনা অবমুক্ত করার সঠিক নিয়ম এবং মাছের বৃদ্ধি পরীক্ষা করার জন্য জাল টানার বাস্তব অভিজ্ঞতা।"
    },
    {
      title: "প্রশিক্ষণ কর্মসূচি",
      subtitle: "ফ্রি বা পেইড অনলাইন/অফলাইন কোর্স ও সরকারি ট্রেনিংয়ের তথ্য",
      icon: <FaGraduationCap className="text-xl text-emerald-400" />,
      details: "উপজেলা মৎস্য অধিদপ্তর এবং বিভিন্ন অভিজ্ঞ প্রতিষ্ঠান পরিচালিত সরকারি ও বেসরকারি প্রশিক্ষণ কোর্সের সময়সূচী। ঘরে বসে অনলাইনে বা সরাসরি খামারে গিয়ে হাতে-কলমে শেখার সার্টিফিকেট কোর্সের তথ্য।"
    },
    {
      title: "স্মার্ট খামার মনিটরিং",
      subtitle: "আইওটি (IoT) ডিভাইস ও প্রযুক্তির সাহায্যে দূর থেকে খামার নিয়ন্ত্রণ",
      icon: <FaTv className="text-xl text-emerald-400" />,
      details: "মোবাইল অ্যাপের মাধ্যমে পুকুরের তাপমাত্রা, পিএইচ (pH) এবং অক্সিজেনের মাত্রা স্বয়ংক্রিয়ভাবে পরিমাপ করার আধুনিক প্রযুক্তি। পানি নষ্ট বা মাছের কোনো সমস্যা হলে তাৎক্ষণিক অ্যালার্ট পাওয়ার উপায়।"
    }
  ];

  return (
    // py-20 পরিবর্তন করে py-12 করা হয়েছে এবং min-h-screen বাদ দেওয়া হয়েছে
    <section className="bg-[#02140F] text-white py-12 px-6 relative w-full overflow-hidden border-t border-emerald-950/20">
      {/* হালকা গলো ইফেক্ট */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-900/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* সেকশন হেডার - মার্জিন বটম কমানো হয়েছে (mb-8) */}
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
            আধুনিক <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300">প্রযুক্তি ও প্রশিক্ষণ</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            নতুন প্রযুক্তির ব্যবহার শিখুন এবং প্রশিক্ষণের মাধ্যমে আপনার খামারকে ডিজিটাল ও স্মার্ট খামারে রূপান্তর করুন।
          </p>
        </div>

        {/* ড্রপডাউন/অ্যাকর্ডিয়ন লিস্ট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className="h-fit bg-[#041C16]/60 border border-emerald-950/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-800/40"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#03251D] border border-emerald-900/30 flex items-center justify-center shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-xs text-emerald-500/80 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500 text-sm pr-2"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-2 border-t border-emerald-950/40 text-sm text-gray-400 leading-relaxed bg-[#031813]/40">
                        {item.details}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechnologyTraining;