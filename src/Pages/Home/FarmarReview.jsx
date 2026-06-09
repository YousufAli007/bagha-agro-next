import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Swiper improt
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FarmarReview = () => {
//   arrray farmer data
  const reviews = [
    { id: 1, name: "মোঃ রফিকুল ইসলাম", location: "বাঘা, রাজশাহী", text: "এই প্ল্যাটফর্মের সঠিক পরামর্শ মেনে এবার আমার আমের ফলন ২৫% বেশি হয়েছে। বিশেষ করে পোকা দমনের সঠিক সময়টা আগে বুঝতাম না।", img: "https://images.unsplash.com/photo-1566947167151-196f1f0ddf4a?q=80&w=150&h=150&fit=crop" },
    { id: 2, name: "আব্দুর রাজ্জাক", location: "আড়ানী, বাঘা", text: "লাইভ আবহাওয়া আপডেট দেখে গত সপ্তাহে বৃষ্টির আগেই ধান কেটে ঘরে তুলতে পেরেছি। আমার বড় লোকসান থেকে বেঁচে গেছি!", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=150&h=150&fit=crop" },
    { id: 3, name: "মোসাঃ পারভীন বেগম", location: "মনিগ্রাম, রাজশাহী", text: "বিশেষজ্ঞদের সাথে সরাসরি চ্যাট করে আমি আমার বাড়ির সবজি বাগানের রোগবালাই দূর করতে পেরেছি। নারীদের জন্য এটি দারুণ সুবিধা।", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&fit=crop" },
    { id: 4, name: "মোঃ আলতাফ হোসেন", location: "পাঁচপাড়া, বাঘা", text: "মাটির আর্দ্রতা মেপে সেচ দেওয়ার আইডিয়াটা আমার খরচ অনেক কমিয়ে দিয়েছে। আগে শুধু আন্দাজে পানি দিতাম ও টাকা নষ্ট হতো।", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop" },
    { id: 5, name: "সুমন কুমার সরকার", location: "বানেশ্বর, রাজশাহী", text: "ডিজিটাল পদ্ধতিতে চাষাবাদের এত সুন্দর গাইডলাইন এর আগে কোথাও পাইনি। বাঘা অঞ্চলের সব কৃষকের এই অ্যাপটি ব্যবহার করা উচিত।", img: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=150&h=150&fit=crop" },
    { id: 6, name: "মোঃ কামরুল হাসান", location: "চকরাজাপুর, বাঘা", text: "পদ্মার চরে তরমুজ চাষ নিয়ে খুব চিন্তায় ছিলাম। বিশেষজ্ঞদের দেওয়া সঠিক সারের ডোজ প্রয়োগ করায় এবার বাম্পার ফলন পেয়েছি।", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop" },
    { id: 7, name: "মোঃ জয়নাল আবেদীন", location: "গড়গড়ি, বাঘা", text: "লিচু চাষে হরমোন স্প্রে করার সঠিক নিয়ম ও পরিমাণ এখান থেকে জানতে পারি। এবার লিচুর সাইজ ও কালার দুটোই অসাধারণ হয়েছে।", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop" },
    { id: 8, name: "মোঃ শাহিন আলম", location: "বাউসা, রাজশাহী", text: "আগে দালালের খপ্পরে পড়ে কম দামে ফসল বেচতে হতো। এখন বাজার দর লাইভ দেখতে পাওয়ায় সঠিক দামে পাইকারি খামারিদের কাছে বেচতে পারছি।", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&fit=crop" },
    { id: 9, name: "মোসাঃ রহিমা খাতুন", location: "নারায়ণপুর, বাঘা", text: "হাঁস-মুরগি পালন নিয়ে যে গাইডলাইন দেওয়া আছে, তা অত্যন্ত কার্যকরী। ঘরে বসেই এখন খামারের সব সমস্যার সমাধান পেয়ে যাই।", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&fit=crop" },
    { id: 10, name: "হাজী মোঃ ইউনুস আলী", location: "পাকুড়িয়া, রাজশাহী", text: "আমার দীর্ঘ ৪০ বছরের কৃষক জীবনে এই ডিজিটাল বিপ্লব এক আশীর্বাদ। নতুন প্রজন্মের এই উদ্যোগকে আমি সাধুবাদ জানাই।", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&h=150&fit=crop" }
  ];

  return (
  
    <section className="relative bg-[#01160c] py-16 md:py-24 overflow-hidden select-none border-b border-green-950/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* header section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20 font-bangla">
            মতামত ও ভালোবাসা
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-3 font-bangla">
            আমাদের প্রতি <span className="text-lime-400">কৃষকদের আস্থা</span>
          </h2>
          <div className="h-1 w-12 bg-lime-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Swiper slider conent */}
        <div className="w-full py-4 px-2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="review-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="pb-14">
                {/* card style */}
                <div className="bg-green-950/20 backdrop-blur-md border border-emerald-500/20 p-6 sm:p-8 rounded-[24px] h-full flex flex-col justify-between shadow-xl min-h-[300px] relative transition-all duration-300 hover:border-lime-500/40 group">
                  
                  {/* কোটেশন আইকন ও রেটিং */}
                  <div className="flex justify-between items-center mb-6">
                    <FaQuoteLeft className="text-lime-500/30 text-4xl group-hover:text-lime-500/50 transition-colors" />
                    <div className="flex gap-1 text-amber-400 text-xs sm:text-sm">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>

                  {/* review test */}
                  <p className="text-sm sm:text-base text-emerald-100/80 font-medium leading-relaxed font-bangla flex-grow mb-6 text-justify">
                    "{review.text}"
                  </p>

                  {/* profile info */}
                  <div className="flex items-center gap-4 border-t border-emerald-500/10 pt-4">
                    <img 
                      src={review.img} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-lime-400"
                    />
                    <div className="text-left">
                      <h4 className="text-base font-bold text-white font-bangla leading-tight">
                        {review.name}
                      </h4>
                      <p className="text-xs text-lime-400 font-medium font-bangla mt-1">
                        {review.location}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Swiper navitae btn color*/}
      <style>{`
        .review-swiper .swiper-button-next,
        .review-swiper .swiper-button-prev {
          color: #a3e635 !important;
          transform: scale(0.6);
          background: rgba(1, 22, 12, 0.6);
          padding: 30px;
          border-radius: 50%;
          border: 1px solid rgba(16, 185, 129, 0.2);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .review-swiper .swiper-button-next:hover,
        .review-swiper .swiper-button-prev:hover {
          background: #a3e635;
          color: #01160c !important;
        }
        @media (max-width: 640px) {
          .review-swiper .swiper-button-next,
          .review-swiper .swiper-button-prev {
            display: none !important;
          }
        }
        .review-swiper .swiper-pagination-bullet-active {
          background: #a3e635 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
        .review-swiper .swiper-pagination-bullet {
          background: #34d399;
        }
      `}</style>

    </section>
  );
};

export default FarmarReview;