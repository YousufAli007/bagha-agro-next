import { motion } from "framer-motion";
import { FaArrowRight, FaRobot } from "react-icons/fa6";

const Hero = () => {
  // text animation
  const fadeInTarget = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-emerald-950">
      {/* ১. backgrond img and drak color */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop')`, // file img
        }}
      />
      {/* image drak over let becuse text see the clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-emerald-950/75 to-emerald-950" />

      {/* 2. মূল কন্টেন্ট এরিয়া */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
        
       
        <motion.span
          variants={fadeInTarget}
          initial="hidden"
          animate="visible"
          custom={1}
          className="inline-block px-4 py-1.5 bg-lime-500/20 border border-lime-400/30 text-lime-400 text-sm font-semibold rounded-full tracking-wide uppercase shadow-inner"
        >
           বাঘা এগ্রো ডিজিটাল প্ল্যাটফর্ম
        </motion.span>

        
        <motion.h1
          variants={fadeInTarget}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-bangla"
        >
          ডিজিটাল প্রযুক্তিতে আধুনিক <br />
          <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            কৃষি সেবা
          </span> এখন আপনার হাতের মুঠোয়।
        </motion.h1>

        
        <motion.p
          variants={fadeInTarget}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          সঠিক সময়ে সঠিক পরামর্শ, উন্নত জাতের বীজ-চারা এবং সরাসরি পাইকারি বাজারের সুবিধা নিয়ে 
          আমরা আছি সর্বদা কৃষকদের পাশে। আজই যুক্ত হোন আধুনিক কৃষি বিপ্লবে।
        </motion.p>

        {/* button  */}
        <motion.div
          variants={fadeInTarget}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          {/*sevice btn */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(163, 230, 53, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-gradient-to-r from-lime-500 to-lime-600 text-green-950 font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-all text-base w-full sm:w-auto justify-center"
          >
            সেবা সমূহ দেখুন
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.button>

          {/* ai btn*/}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-3.5 rounded-2xl border border-white/20 backdrop-blur-sm transition-colors text-base w-full sm:w-auto justify-center"
          >
            <FaRobot className="text-cyan-400 text-lg animate-pulse" />
            AI সহকারীর সাথে কথা বলুন
          </motion.button>
        </motion.div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;