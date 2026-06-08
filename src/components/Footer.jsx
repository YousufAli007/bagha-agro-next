import { FaEnvelope, FaFacebookF, FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const Footer = () => {
    // কলামগুলোর জন্য স্ক্রোল অ্যানিমেশন ভেরিয়েন্ট
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // কন্টেইনারের জন্য প্যারেন্ট ভেরিয়েন্ট
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15 // প্রতিটি কলাম ০.১৫ সেকেন্ড পর পর আসবে
            }
        }
    };

    return (
        <footer className="bg-gradient-to-br from-green-900 to-emerald-950 text-gray-200 pt-12 pb-6 border-t-4 border-lime-500 overflow-hidden">
            {/* মূল গ্রিড কন্টেইনার */}
            <motion.div 
                className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                
                {/* ১. লোগো ও বর্ণনা (গিটজি ১) */}
                <motion.div variants={fadeInUp} className="space-y-4">
                    <div className="flex items-center space-x-2 text-white">
                        <FaLeaf className="text-lime-400 text-3xl animate-pulse" />
                        <span className="text-2xl font-bold tracking-wide">এগ্রো<span className="text-lime-400">সেবা</span></span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        কৃষকদের মুখে হাসি ফোটাতে এবং আধুনিক কৃষি সেবা সবার দোড়গোড়ায় পৌঁছে দিতে আমাদের এই ক্ষুদ্র প্রয়াস। আগর চাষ ও সঠিক পরামর্শের নির্ভরযোগ্য মাধ্যম।
                    </p>
                    
                    {/* focila icon */}
                    <div className="flex space-x-4 pt-2">
  {/* Fa link yousf */}
  <motion.a 
    whileHover={{ scale: 1.15, rotate: 8 }} 
    whileTap={{ scale: 0.9 }}
    href="" // এখানে আপনার ফেসবুক পেজের লিংক বসান
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-green-800 hover:bg-lime-500 hover:text-green-950 rounded-full transition-colors duration-300"
  >
    <FaFacebookF size={18} />
  </motion.a>

  {/* Yt lin*/}
  <motion.a 
    whileHover={{ scale: 1.15, rotate: -8 }} 
    whileTap={{ scale: 0.9 }}
    href="https://www.youtube.com/your-channel-url" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-green-800 hover:bg-lime-500 hover:text-green-950 rounded-full transition-colors duration-300"
  >
    <FaYoutube size={18} />
  </motion.a>
</div>
                </motion.div>

                {/* service  */}
                <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-lime-400 mb-4 border-b border-green-700 pb-2">আমাদের সেবাসমূহ</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["মাটি পরীক্ষা ও সার পরামর্শ", "উন্নত জাতের আগর চারা বিতরণ", "কৃষি বিশেষজ্ঞ লাইভ চ্যাট", "সরাসরি পাইকারি বাজার"].map((item, idx) => (
                            <motion.li key={idx} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                                <a href="#" className="hover:text-lime-400 hover:underline transition-colors block">{item}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* ৩. গুরুত্বপূর্ণ লিংক (গিটজি ৩) */}
                <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-lime-400 mb-4 border-b border-green-700 pb-2">গুরুত্বপূর্ণ লিংক</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["আমাদের সম্পর্কে", "সচরাচর জিজ্ঞাসা (FAQ)", "কৃষক নিবন্ধন ফরম", "যোগাযোগ করুন"].map((item, idx) => (
                            <motion.li key={idx} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                                <a href="#" className="hover:text-lime-400 hover:underline transition-colors block">{item}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* ৪. যোগাযোগ ও হেল্পলাইন (গিটজি ৪) */}
                <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-lime-400 mb-4 border-b border-green-700 pb-2">যোগাযোগ ও হেল্পলাইন</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <motion.li whileHover={{ scale: 1.02 }} className="flex items-start space-x-3 bg-green-950/40 p-2 rounded-lg border border-green-800/50">
                            <FaPhoneAlt className="text-lime-400 mt-1 animate-bounce" />
                            <div>
                                <p className="font-semibold text-white">১৬১২৩ (কৃষি কল সেন্টার)</p>
                                <p className="text-xs text-gray-400">সকাল ৯টা - বিকাল ৫টা (ফ্রি)</p>
                            </div>
                        </motion.li>
                        <li className="flex items-center space-x-3 pl-2">
                            <FaEnvelope className="text-lime-400" />
                            <a href="mailto:support@agroseba.com" className="hover:text-lime-400 transition-colors">support@agroseba.com</a>
                        </li>
                        <li className="flex items-start space-x-3 pl-2">
                            <FaMapMarkerAlt className="text-lime-400 mt-1" />
                            <span>রাজশাহী, বাংলাদেশ</span>
                        </li>
                    </ul>
                </motion.div>

            </motion.div>

            {/* নিচের কপিরাইট অংশ */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-green-800 text-center text-xs text-gray-400"
            >
                <p>© {new Date().getFullYear()} এগ্রোসেবা প্ল্যাটফর্ম। সর্বস্বত্ব সংরক্ষিত।</p>
            </motion.div>
        </footer>
    );
};

export default Footer;