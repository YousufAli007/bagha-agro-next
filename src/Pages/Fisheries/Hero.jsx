import React from 'react';
import { FaFish, FaPhoneAlt, FaFileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section 
      className="relative w-full min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden pt-16 pb-24 md:py-32"
      style={{ 
        backgroundImage: `url('https://i.ibb.co.com/tMKxL17V/fish-production-20190703202449.jpg')` 
      }}
    >
      {/* Left-to-Right Dark Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent z-10"></div>

      {/* Bottom Soft White Fade Dynamic Curve */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Top Small Tag */}
          <div className="inline-flex items-center gap-2 bg-emerald-800/60 backdrop-blur-sm text-emerald-300 px-4 py-1.5 rounded-full text-xs font-medium border border-emerald-700/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            স্মার্ট খামার, সমৃদ্ধ দেশ
          </div>
          
          {/* Main Typography */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-[1.2]">
            আধুনিক মৎস্য <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300">
              মৎস্য সম্পদ ব্যবস্থাপনা
            </span> <br />
            & খামারি সেবা
          </h1>
          
          {/* Subtitle Paragraph */}
          <p className="text-gray-200 text-base sm:text-lg max-w-xl leading-relaxed">
            প্রযুক্তির সঠিক ব্যবহারে আপনার খামারকে করুন আরও লাভজনক। আধুনিক ট্র্যাকিং, সঠিক সময়ে পরামর্শ এবং অভিজ্ঞ মৎস্য কর্মকর্তাদের দিকনির্দেশনা নিন এক ক্লিকেই।
          </p>
          
          {/* CTA Buttons Layout */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Primary Action Button */}
            <button className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-emerald-900/40 transition duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base">
              <FaFileAlt className="text-emerald-200" /> খামার নিবন্ধন করুন →
            </button>
            
            {/* Secondary Action Button */}
            <button className="flex items-center gap-2.5 bg-white/10 hover:bg-white/25 text-white font-semibold px-6 py-3.5 rounded-lg border border-white/20 backdrop-blur-md transition duration-300 text-sm sm:text-base">
              <FaPhoneAlt className="text-emerald-400" /> পরামর্শ নিন
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;