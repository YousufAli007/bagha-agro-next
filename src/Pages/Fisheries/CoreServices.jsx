import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFish, FaWater, FaMedkit, FaLeaf, FaChevronDown } from 'react-icons/fa';

const CoreServices = () => {
  // কোন ড্রপডাউনটি ওপেন আছে তা ট্র্যাক করার জন্য স্টেট (null মানে সব বন্ধ)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // আপডেট হওয়া ৪টি মৎস্য সেবা ডাটা স্ট্রাকচার
  const services = [
    {
      title: "মাছ চাষের নির্দেশিকা",
      subtitle: "রুই, কাতলা, পাঙাশ, তেলাপিয়া, চিংড়ি বা শিং-মাগুর",
      icon: <FaFish className="text-xl text-emerald-400" />,
      details: "আধুনিক ও বৈজ্ঞানিক পদ্ধতিতে মাছ চাষের সম্পূর্ণ গাইডলাইন। সঠিক পোনা নির্বাচন, নিয়মিত খাবার ব্যবস্থাপনা এবং দ্রুত বৃদ্ধির জন্য উন্নত কৌশল সমূহ এখানে পাবেন।"
    },
    {
      title: "পুকুর প্রস্তুতি ও ব্যবস্থাপনা",
      subtitle: "নতুন পুকুর খনন, চুন ও সার প্রয়োগ, এবং পানির গুণাগুণ",
      icon: <FaWater className="text-xl text-emerald-400" />,
      details: "মাছ ছাড়ার পূর্বে পুকুর শুকানো, রাক্ষুসে মাছ দূরীকরণ, চুন ও সার প্রয়োগের সঠিক নিয়ম। এছাড়া পানির pH এবং অক্সিজেনের মাত্রা ঠিক রাখার বৈজ্ঞানিক উপায়।"
    },
    {
      title: "রোগ বালাই ও প্রতিকার",
      subtitle: "মাছের প্রচলিত রোগ এবং সেগুলোর সঠিক ওষুধ ও চিকিৎসা",
      icon: <FaMedkit className="text-xl text-emerald-400" />,
      details: "শীতকালীন ক্ষত রোগ, লেজ পচা, পাখনা পচা এবং বিভিন্ন পরজীবীজনিত রোগের লক্ষণ। আক্রান্ত পুকুরে সঠিক মাত্রায় ওষুধ ও চুন ব্যবহারের নিখুঁত গাইডলাইন।"
    },
    {
      title: "মাছের খাবার তথ্য",
      subtitle: "সম্পূরক খাবার তৈরি, এফসিআর (FCR) ও প্রয়োগের নিয়ম",
      icon: <FaLeaf className="text-xl text-emerald-400" />,
      details: "মাছের দ্রুত বৃদ্ধির জন্য প্রতিদিনের প্রয়োজনীয় প্রোটিন সমৃদ্ধ বাণিজ্যিক খাবার ও খামারে তৈরি সম্পূরক খাদ্যের অনুপাত। পানির তাপমাত্রা ও মাছের মোট ওজনের ওপর ভিত্তি করে এফসিআর (Feed Conversion Ratio) হিসাব করে সঠিক মাত্রায় ফিড প্রদানের নিখুঁত নির্দেশিকা।"
    }
  ];

  return (
    <section className="bg-[#02140F] text-white py-20 px-6 relative min-h-screen flex items-center">
      {/* হালকা গ্লো ইফেক্ট (ব্যাকগ্রাউন্ড ডেকোরেশন) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-900/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* সেকশন হেডার (হুবহু ইমেজের মতো টেক্সট) */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
            মৎস্য সম্পদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300">প্রধান সেবাসমূহ</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            নির্দিষ্ট ক্যাটাগরির ওপর ক্লিক করে আপনার পছন্দের মৎস্য পালন ও <br className="hidden sm:inline" /> 
            ব্যবস্থাপনার বিস্তারিত গাইডলাইন দেখে নিন।
          </p>
        </div>

        {/* ড্রপডাউন/অ্যাকর্ডিয়ন লিস্ট (২ কলাম গ্রিড লেআউট) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className="h-fit bg-[#041C16]/60 border border-emerald-950/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-800/40"
              >
                {/* ক্লিকেবল হেডার অংশ */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    {/* আইকন বক্স */}
                    <div className="w-12 h-12 rounded-xl bg-[#03251D] border border-emerald-900/30 flex items-center justify-center shadow-inner">
                      {service.icon}
                    </div>
                    {/* টেক্সট সমূহ */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-100">
                        {service.title}
                      </h3>
                      <p className="text-xs text-emerald-500/80 mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* ডাউন অ্যারো আইকন অ্যানিমেশন */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500 text-sm pr-2"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                {/* বিস্তারিত গাইডলাইন (ফ্রেমার মোশন স্মুথ ড্রপডাউন অ্যানিমেশন) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-2 border-t border-emerald-950/40 text-sm text-gray-400 leading-relaxed bg-[#031813]/40">
                        {service.details}
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

export default CoreServices;