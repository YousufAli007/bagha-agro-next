import { motion } from "framer-motion";
import { FaUserCheck, FaHandshake, FaUserTie, FaCheckCircle } from "react-icons/fa";

const Achievement = () => {
  // card data
  const stats = [
    {
      id: 1,
      icon: <FaUserCheck className="text-lime-400 text-3xl sm:text-4xl md:text-5xl" />,
      title: "নিবন্ধিত কৃষক",
      desc: "৫,০০০+ নিবন্ধিত কৃষক। সরাসরি আমাদের সাথে যুক্ত থেকে উপকৃত হচ্ছে।",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-lime-400 text-3xl sm:text-4xl md:text-5xl" />,
      title: "সেবা প্রদান",
      desc: "১২,৫০০+ সফল পরামর্শ ও সমাধান প্রদান করা হয়েছে।",
    },
    {
      id: 3,
      icon: <FaHandshake className="text-lime-400 text-3xl sm:text-4xl md:text-5xl" />,
      title: "কৃষি পার্টনার",
      desc: "বাঘা অঞ্চলের ৫০+ পাইকারি খামারি আমাদের সাথে যুক্ত।",
    },
    {
      id: 4,
      icon: <FaUserTie className="text-lime-400 text-3xl sm:text-4xl md:text-5xl" />,
      title: "কৃষি বিশেষজ্ঞ",
      desc: "২০+ কৃষি বিশেষজ্ঞ লাইভ চ্যাট ও সঠিক গাইডলাইন প্রদানের জন্য উপলব্ধ।",
    },
  ];

  // parent connent animaion

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // single card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    
    <section className="relative bg-[#01160c] py-16 md:py-24 overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-bangla">
            আমাদের ক্ষুদ্র প্রয়াস ও <span className="text-lime-400">অর্জিত সাফল্য</span>
          </h2>
          <div className="h-1 w-12 bg-lime-500 mx-auto mb-4 rounded-full" />
          <p className="text-sm sm:text-base md:text-lg text-emerald-100/70 font-medium font-bangla">
            এই অর্জিত সাফল্যগুলো বাঘা ও আশেপাশের এলাকার কৃষকদের জন্য উৎসর্গীকৃত।
          </p>
        </div>

        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0px 15px 35px rgba(165, 243, 252, 0.05)",
                borderColor: "rgba(163, 230, 53, 0.4)", 
                transition: { duration: 0.2 } 
              }} 
               
              className="bg-green-950/20 backdrop-blur-md border border-emerald-500/20 p-6 py-10 rounded-[24px] flex flex-col items-center text-center shadow-xl transition-all relative overflow-hidden"
            >
              {/* icon  */}
              <div className="mb-6 flex items-center justify-center">
                {stat.icon}
              </div>

              
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 font-bangla">
                {stat.title}
              </h3>

              
              <p className="text-xs sm:text-sm text-emerald-100/80 font-medium leading-relaxed px-2 font-bangla">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievement;