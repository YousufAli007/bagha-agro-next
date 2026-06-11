import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaPlus, FaWheatAwn, FaFileImage, FaTag } from "react-icons/fa6";

const AddProduct = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (!user) {
      toast.error("পণ্য যোগ করতে অনুগ্রহ করে লগইন করুন।");
      return navigate("/login");
    }

    setLoading(true);

    const defaultImage = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=600&auto=format&fit=crop";
    const productInfo = {
      name: data.name,
      price: parseFloat(data.price),
      image: data.image.trim() || defaultImage,
      sellerEmail: user.email,
      sellerName: user.displayName || "কৃষক",
      createdAt: new Date().toISOString()
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(productInfo)
    })
      .then(res => res.json())
      .then(result => {
        setLoading(false);
        if (result.insertedId) {
          toast.success("পণ্যটি সফলভাবে কৃষি বাজারে যোগ করা হয়েছে!");
          reset();
        } else {
          toast.error("পণ্য যোগ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        }
      })
      .catch(err => {
        console.error("Error adding product:", err);
        setLoading(false);
        toast.error("সার্ভার কানেকশন এরর! আবার চেষ্টা করুন।");
      });
  };

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#01160c]">
        <div className="bg-[#022e1a] p-8 rounded-3xl border border-green-800 shadow-2xl max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4">লগইন প্রয়োজন</h2>
          <p className="text-gray-300 mb-6">পণ্য এড করতে অনুগ্রহ করে লগইন করুন।</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-lime-500 text-green-950 font-bold px-6 py-2.5 rounded-xl hover:bg-lime-400 transition"
          >
            লগইন পেজে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#01160c] px-4 py-12 text-white">
      <div className="max-w-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-[#022e1a] to-[#012012] p-8 md:p-10 rounded-3xl shadow-2xl border border-green-800/60"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-green-900/50 rounded-2xl border border-green-700 text-lime-400 mb-3 text-3xl">
              <FaWheatAwn />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">পণ্য এড করুন</h2>
            <p className="text-gray-300 text-sm mt-1">কৃষি বাজারে আপনার পণ্য বিক্রির জন্য তথ্য প্রদান করুন</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Product Name */}
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-lime-400 transition-colors">
                <FaWheatAwn />
              </span>
              <input
                type="text"
                placeholder="পণ্যের নাম"
                className={`w-full pl-12 pr-4 py-3.5 bg-green-950/40 border-2 rounded-xl text-white focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500 focus:border-red-600' : 'border-green-800/80 focus:border-lime-400'
                }`}
                {...register("name", { required: "পণ্যের নাম দেওয়া আবশ্যক" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 pl-1">{errors.name.message}</p>
              )}
            </div>

            {/* Price */}
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-lime-400 transition-colors">
                <FaTag />
              </span>
              <input
                type="number"
                step="0.01"
                placeholder="মূল্য (টাকা)"
                className={`w-full pl-12 pr-4 py-3.5 bg-green-950/40 border-2 rounded-xl text-white focus:outline-none transition-colors ${
                  errors.price ? 'border-red-500 focus:border-red-600' : 'border-green-800/80 focus:border-lime-400'
                }`}
                {...register("price", { 
                  required: "পণ্যের মূল্য দেওয়া আবশ্যক",
                  min: { value: 0.01, message: "মূল্য ০ এর বেশি হতে হবে" }
                })}
              />
              {errors.price && (
                <p className="text-red-500 text-xs mt-1 pl-1">{errors.price.message}</p>
              )}
            </div>

            {/* Image URL */}
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-lime-400 transition-colors">
                <FaFileImage />
              </span>
              <input
                type="url"
                placeholder="ছবির লিংক (ঐচ্ছিক)"
                className="w-full pl-12 pr-4 py-3.5 bg-green-950/40 border-2 border-green-800/80 focus:border-lime-400 rounded-xl text-white focus:outline-none transition-colors"
                {...register("image")}
              />
            </div>

            {/* Readonly Seller Info */}
            <div className="bg-green-950/60 border border-green-800/60 rounded-2xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">বিক্রেতার নাম:</span>
                <span className="font-semibold text-lime-400">{user?.displayName || "ইউজার"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">বিক্রেতার ইমেইল:</span>
                <span className="font-semibold text-lime-400">{user?.email}</span>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-green-950 font-bold py-4 rounded-xl shadow-lg transition duration-300 active:scale-95 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer"
            >
              <FaPlus />
              {loading ? "অ্যাড হচ্ছে..." : "পণ্য অ্যাড করুন"}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddProduct;
