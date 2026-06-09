import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudShowersHeavy, FaSun, FaCloudSun, FaCloud, FaWind, FaDroplet, FaCircleExclamation } from 'react-icons/fa6';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // api key weather baga Rajshahi
  useEffect(() => {
    const fetchWeather = () => {
      
      fetch('https://wttr.in/Bagha,Rajshahi?format=j1')
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          const currentCondition = data.current_condition[0];
          setWeatherData({
            temp: currentCondition.temp_C,
            humidity: currentCondition.humidity,
            windSpeed: currentCondition.windspeedKmph,
            condition: currentCondition.weatherDesc[0].value.toLowerCase()
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error("Weather fetch error: ", err);
        //  net open and update
          setWeatherData({
            temp: "২৯",
            humidity: "৭২",
            windSpeed: "১২",
            condition: "cloudy"
          });
          setLoading(false);
        });
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000); 
    return () => clearInterval(interval);
  }, []);

  // weather dainamick img and text
  const getWeatherDetails = () => {
    if (!weatherData) return {
      icon: <FaCloudSun className="text-lime-400 text-5xl" />,
      text: "আংশিক মেঘলা",
      bgImg: "https://images.unsplash.com/photo-1595107511372-50a2675175df?q=75&w=1200&auto=format&fit=crop",
      alert: "নিয়মিত ক্ষেত পর্যবেক্ষণ করুন এবং সুষম সেচ বজায় রাখুন।"
    };

    const cond = weatherData.condition;

    if (cond.includes('rain') || cond.includes('shower') || cond.includes('thunderstorm') || cond.includes('drizzle')) {
      return {
        icon: <FaCloudShowersHeavy className="text-cyan-400 text-5xl animate-bounce" />,
        text: "ভারী বৃষ্টিপাত",
        bgImg: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=75&w=1200&auto=format&fit=crop",
        alert: "⚠️ সতর্কবার্তা: এলাকায় বৃষ্টির সম্ভাবনা রয়েছে। পাকা ধান বা ফসল থাকলে দ্রুত কেটে নিরাপদ স্থানে ঘরে তুলুন। নিচু জমির আইল বেঁধে রাখুন যেন পানি জমে চারা নষ্ট না হয়।"
      };
    } else if (cond.includes('clear') || cond.includes('sunny')) {
      return {
        icon: <FaSun className="text-amber-400 text-5xl" />,
        text: "রোদেলা আবহাওয়া",
        bgImg: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=75&w=1200&auto=format&fit=crop",
        alert: "☀️ কৃষি পরামর্শ: চমৎকার রোদেলা আবহাওয়া। আজ জমিতে প্রয়োজনীয় কীটনাশক স্প্রে করা এবং ফসল শুকানোর জন্য একদম উপযুক্ত দিন।"
      };
    } else {
      // cloudy, overcase  condiion
      return {
        icon: <FaCloud className="text-gray-300 text-5xl animate-pulse" />,
        text: "মেঘলা আকাশ",
        bgImg: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=75&w=1200&auto=format&fit=crop",
        alert: "☁️ কৃষি পরামর্শ: আকাশে মেঘের আনাগোনা থাকতে পারে। সেচ দেওয়ার আগে মাটির আর্দ্রতা পরীক্ষা করে নিন এবং জমিতে অতিরিক্ত পানি জমতে দেবেন না।"
      };
    }
  };

  const details = getWeatherDetails();

  if (loading) {
    return (
      <div className="bg-[#01160c] py-16 text-center text-white font-bangla">
        <div className="w-10 h-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">লাইভ আবহাওয়া তথ্য লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <section className="relative bg-[#01160c] py-16 md:py-24 overflow-hidden border-b border-green-950">
      
      {/* backgrond img*/}
      <AnimatePresence mode="wait">
        <motion.div 
          key={details.bgImg}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 0.12, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url('${details.bgImg}')` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-[#01160c] via-transparent to-[#01160c] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* sectin header*/}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping mr-1" /> রিয়েল-টাইম আপডেট
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 font-bangla">
            লাইভ আবহাওয়া ও <span className="text-lime-400">কৃষি বার্তা</span>
          </h2>
          <div className="h-1 w-12 bg-lime-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* card layout*/}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/*weather card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-green-950/30 border border-green-900/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md shadow-xl text-center sm:text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 text-[10px] font-bold text-gray-500 font-mono tracking-wider">
              BAGHA, RAJSHAHI
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start mb-4">
                {details.icon}
                <div>
                  <h3 className="text-2xl font-black text-white font-bangla leading-tight">{details.text}</h3>
                  <p className="text-sm text-gray-400 font-medium">বাঘা অঞ্চল, রাজশাহী</p>
                </div>
              </div>

              {/* live Celcies*/}
              <div className="my-2">
                <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tighter inline-block relative font-sans">
                  {weatherData?.temp}<span className="text-lime-400 text-3xl absolute -top-1 -right-6">°C</span>
                </h1>
              </div>
            </div>

            {/* batesh and adrota*/}
            <div className="grid grid-cols-2 gap-4 border-t border-green-900/60 pt-5 mt-5">
              <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                <div className="p-2 bg-green-900/40 rounded-xl text-cyan-400">
                  <FaDroplet className="text-base" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">আর্দ্রতা</p>
                  <p className="text-sm font-bold text-white font-sans">{weatherData?.humidity}%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                <div className="p-2 bg-green-900/40 rounded-xl text-lime-400">
                  <FaWind className="text-base" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">বাতাস</p>
                  <p className="text-sm font-bold text-white font-sans">{weatherData?.windSpeed} km/h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/*kishi proamarsho */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gradient-to-br from-green-950/40 via-[#022513]/50 to-emerald-950/40 border border-green-900/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-center backdrop-blur-md shadow-xl relative overflow-hidden"
          >
            <div className="flex items-start gap-4 flex-col sm:flex-row text-center sm:text-left items-center sm:items-start">
              <div className="p-3 bg-lime-500/10 border border-lime-500/20 rounded-2xl text-lime-400 flex-shrink-0 animate-pulse">
                <FaCircleExclamation className="text-2xl" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-lime-400 font-bangla">আজকের জরুরি কৃষি নোটিশ</h4>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-bangla text-justify">
                  {details.alert}
                </p>
                <p className="text-xs text-gray-400 italic pt-2">
                  *স্থানীয় উপ-সহকারী কৃষি কর্মকর্তার পরামর্শ এবং এই লাইভ ডেটা অনুযায়ী আপনার চাষাবাদের সিদ্ধান্ত নিন।
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Weather;