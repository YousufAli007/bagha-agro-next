import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router'; // রাউটিং ও রিডাইরেকশনের জন্য
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { registerUser, updateUserProfile } = useAuth();
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [firebaseError, setFirebaseError] = useState(""); // Firebase এরর দেখানোর জন্য
    const [loading, setLoading] = useState(false); // সাবমিট লোডিং স্টেট
    const navigate = useNavigate(); 
    
    // React Hook Form সেটআপ
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch("password", "");

    const onSubmit = (data) => {
        setFirebaseError(""); // আগের এরর রিসেট
        setLoading(true);
        
        console.log("রেজিস্ট্রেশন ডাটা (Form):", data);
        
        registerUser(data.email, data.password)
            .then(result => {
                console.log('User registered successfully:', result.user);
                
                // Firebase-এ ইউজারের নাম (displayName) আপডেট করা
                updateUserProfile(data.name)
                    .then(() => {
                        console.log('Firebase user profile updated with displayName:', data.name);
                        
                        // সার্ভারে নাম এবং ইমেইল সেভ করা
                        const newUser = {
                            name: data.name,
                            email: data.email
                        };
                        
                        fetch('https://bagha-agro-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                        .then(res => res.json())
                        .then(serverData => {
                            console.log('User saved to backend database successfully:', serverData);
                            setLoading(false);
                            navigate("/");
                        })
                        .catch(err => {
                            console.error('Error saving user to backend database:', err);
                            // সার্ভারে সেভ ব্যর্থ হলেও রেজিস্ট্রেশন হয়েছে তাই রিডাইরেক্ট করা হবে
                            setLoading(false);
                            navigate("/");
                        });
                    })
                    .catch(profileError => {
                        console.error('Error updating Firebase user profile:', profileError);
                        setLoading(false);
                        navigate("/");
                    });
            })
            .catch(error => {
                console.error('Registration error:', error);
                setLoading(false);
                
                // Firebase এরর মেসেজ বাংলায় রূপান্তর
                if (error.code === 'auth/email-already-in-use') {
                    setFirebaseError("এই ইমেইলটি দিয়ে ইতিমধ্যে অ্যাকাউন্ট তৈরি করা আছে।");
                } else if (error.code === 'auth/invalid-email') {
                    setFirebaseError("অনুগ্রহ করে একটি সঠিক ইমেইল প্রদান করুন।");
                } else if (error.code === 'auth/weak-password') {
                    setFirebaseError("পাসওয়ার্ডটি বেশ দুর্বল। কমপক্ষে ৬ অক্ষরের বা আরও শক্তিশালী পাসওয়ার্ড দিন।");
                } else if (error.code === 'auth/too-many-requests') {
                    setFirebaseError("খুব বেশি চেষ্টা করা হয়েছে। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।");
                } else {
                    setFirebaseError("অ্যাকাউন্ট তৈরি করতে সমস্যা হচ্ছে। আবার চেষ্টা করুন।");
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#01160c] px-4 py-10">
            <div className="bg-[#022e1a] p-10 rounded-3xl shadow-2xl max-w-md w-full border border-gray-700">
                
                {/* টাইটেল */}
                <h2 className="text-4xl font-extrabold text-center text-white mb-2 tracking-tight">
                    অ্যাকাউন্ট তৈরি করুন
                </h2>
                <p className="text-sm text-center text-gray-300 mb-8">
                    আজই যুক্ত হোন আমাদের সাথে! নিচের তথ্যগুলো পূরণ করুন
                </p>

                {/* Firebase এরর স্ক্রিনে দেখানোর জন্য */}
                {firebaseError && (
                    <div className="mb-6 bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm text-center">
                        {firebaseError}
                    </div>
                )}

                {/* ফর্ম সাবমিট ট্রিগার */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* নাম ইনপুট */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder=" " 
                            className={`w-full px-5 py-3.5 rounded-xl border-2 text-white bg-transparent focus:outline-none focus:ring-0 transition duration-300 peer ${
                                errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-600 focus:border-lime-400'
                            }`}
                            {...register("name", { required: "আপনার নাম দেওয়া বাধ্যতামূলক" })}
                        />
                        <label className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#022e1a] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 pointer-events-none ${
                            errors.name ? 'text-red-500' : 'text-gray-400 peer-focus:text-lime-400'
                        }`}>
                            সম্পূর্ণ নাম
                        </label>
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-2">{errors.name.message}</p>
                        )}
                    </div>

                    {/* ইমেইল ইনপুট */}
                    <div className="relative group pt-2">
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

                    {/* কনফার্ম পাসওয়ার্ড ইনপুট */}
                    <div className="relative group pt-2">
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder=" " 
                                className={`w-full px-5 py-3.5 rounded-xl border-2 text-white bg-transparent focus:outline-none focus:ring-0 transition duration-300 peer ${
                                    errors.confirmPassword ? 'border-red-500 focus:border-red-600' : 'border-gray-600 focus:border-lime-400'
                                }`}
                                {...register("confirmPassword", { 
                                    required: "পাসওয়ার্ডটি নিশ্চিত করুন",
                                    validate: value => value === password || "পাসওয়ার্ড দুটি মেলেনি"
                                })}
                            />
                             <label className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#022e1a] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 pointer-events-none ${
                                errors.confirmPassword ? 'text-red-500' : 'text-gray-400 peer-focus:text-lime-400'
                            }`}>
                                কনফার্ম পাসওয়ার্ড
                            </label>
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none transition-colors z-20"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-2">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* শর্তাবলী গ্রহণ */}
                    <div className="flex flex-col pt-2">
                        <label className="flex items-center text-gray-300 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                className="rounded border-gray-600 bg-transparent text-lime-400 focus:ring-lime-400 mr-2.5 transition"
                                {...register("terms", { required: "শর্তাবলী মেনে নেওয়া বাধ্যতামূলক" })}
                            />
                            <span className="group-hover:text-white text-sm">আমি সব শর্ত মেনে নিচ্ছি</span>
                        </label>
                        {errors.terms && (
                            <p className="text-red-500 text-xs mt-1 pl-1">{errors.terms.message}</p>
                        )}
                    </div>

                    {/* রেজিস্ট্রেশন বাটন */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#a3e635] hover:bg-[#bbf7d0] text-[#01160c] font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-lime-950 mt-4 active:scale-95 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                        {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "রেজিস্ট্রেশন করুন"}
                    </button>
                </form>

                {/* লগইন লিংক */}
                <p className="text-base text-center text-gray-400 mt-10">
                    ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                    <Link to="/login" className="text-lime-400 hover:text-lime-300 hover:underline font-semibold transition-colors">
                        লগইন করুন
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;