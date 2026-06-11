import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router'; 
import useAuth from '../Hooks/useAuth';

const Loging = () => {
    const { singInUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [firebaseError, setFirebaseError] = useState(""); // Firebase এরর স্টেটের জন্য
    const [loading, setLoading] = useState(false); // সাবমিট লোডিং স্টেট
    const navigate = useNavigate(); 
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setFirebaseError(""); // নতুন সাবমিটে আগের এরর ক্লিয়ার করা
        setLoading(true);

        singInUser(data.email, data.password)
            .then(result => {
                console.log("লগইন সফল হয়েছে:", result.user);
                setLoading(false);
                navigate("/"); 
            })
            .catch(error => {
                console.error("লগইন এরর:", error);
                setLoading(false);
                
                // Firebase এরর মেসেজ বাংলায় হ্যান্ডেল করা
                if (error.code === 'auth/too-many-requests') {
                    setFirebaseError("খুব বেশি চেষ্টা করা হয়েছে! নিরাপত্তার জন্য এই অ্যাকাউন্টটি সাময়িকভাবে ব্লক করা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।");
                } else if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                    setFirebaseError("ভুল ইমেইল অথবা পাসওয়ার্ড দেওয়া হয়েছে। আবার চেষ্টা করুন।");
                } else {
                    setFirebaseError("লগইন করতে সমস্যা হচ্ছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#01160c] px-4">
            <div className="bg-[#022e1a] p-10 rounded-3xl shadow-2xl max-w-md w-full border border-gray-700">
                <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight">
                    স্বাগতম!
                </h2>
                <p className="text-base text-center text-gray-300 mb-10">
                    আপনার অ্যাকাউন্টে লগইন করতে নিচের তথ্যগুলো দিন
                </p>

                {/* Firebase এরর স্ক্রিনে দেখানোর জন্য */}
                {firebaseError && (
                    <div className="mb-6 bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm text-center">
                        {firebaseError}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* ইমেইল ইনপুট */}
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder=" "
                            className={`w-full px-5 py-3.5 rounded-xl border-2 text-white bg-transparent focus:outline-none focus:ring-0 transition duration-300 peer ${
                                errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-600 focus:border-lime-400'
                            }`}
                            {...register("email", { 
                                required: "ইমেইল দেওয়া বাধ্যতামূলক", 
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "সঠিক ইমেইল অ্যাড্রেস লিখুন"
                                }
                            })}
                        />
                        <label className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#022e1a] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 pointer-events-none ${
                            errors.email ? 'text-red-500' : 'text-gray-400 peer-focus:text-lime-400'
                        }`}>
                            ইমেইল অ্যাড্রেস
                        </label>
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-2">{errors.email.message}</p>
                        )}
                    </div>

                    {/* পাসওয়ার্ড ইনপুট */}
                    <div className="relative group pt-2">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder=" "
                                className={`w-full px-5 py-3.5 rounded-xl border-2 text-white bg-transparent focus:outline-none focus:ring-0 transition duration-300 peer ${
                                    errors.password ? 'border-red-500 focus:border-red-600' : 'border-gray-600 focus:border-lime-400'
                                }`}
                                {...register("password", { 
                                    required: "পাসওয়ার্ড দেওয়া বাধ্যতামূলক",
                                    minLength: {
                                        value: 6,
                                        message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"
                                    }
                                })}
                            />
                             <label className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#022e1a] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 pointer-events-none ${
                                errors.password ? 'text-red-500' : 'text-gray-400 peer-focus:text-lime-400'
                            }`}>
                                পাসওয়ার্ড
                            </label>
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none transition-colors z-20"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-2">{errors.password.message}</p>
                        )}
                    </div>

                    {/* শুধুমাত্র ফরগট পাসওয়ার্ড লিংক (ডান পাশে সাজানো) */}
                    <div className="flex justify-end text-sm pt-1">
                        <a href="#" className="text-lime-400 hover:text-lime-300 hover:underline font-medium transition-colors">
                            পাসওয়ার্ড ভুলে গেছেন?
                        </a>
                    </div>

                    {/* সাবমিট বাটন (লোডিং অবস্থায় ডিজেবল থাকবে) */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#a3e635] hover:bg-[#bbf7d0] text-[#01160c] font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-lime-950 mt-2 active:scale-95 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                        {loading ? "লোডিং হচ্ছে..." : "লগইন করুন"}
                    </button>
                </form>

                {/* সাইন আপ লিংক */}
                <p className="text-base text-center text-gray-400 mt-10">
                    নতুন অ্যাকাউন্ট তৈরি করতে চান?{' '}
                    <Link to="/register" className="text-lime-400 hover:text-lime-300 hover:underline font-semibold transition-colors">
                        রেজিস্ট্রেশন করুন
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Loging;