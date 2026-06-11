import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaBagShopping, FaUser, FaPhone, FaMapLocationDot, FaCircleExclamation, FaCalendarDays } from "react-icons/fa6";
import toast from "react-hot-toast";

const OrderedProducts = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    // Fetch orders placed by the current user
    fetch(`http://localhost:3000/orders/buyer/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ordered products:", err);
        setLoading(false);
        toast.error("অর্ডারকৃত পণ্যের তালিকা লোড করা যায়নি।");
      });
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#01160c]">
        <div className="bg-[#022e1a] p-8 rounded-3xl border border-green-800 shadow-2xl max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4">লগইন প্রয়োজন</h2>
          <p className="text-gray-300 mb-6">আপনার অর্ডারকৃত পণ্যের ইতিহাস দেখতে অনুগ্রহ করে লগইন করুন।</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-lime-500 text-green-950 font-bold px-6 py-2.5 rounded-xl hover:bg-lime-400 transition cursor-pointer"
          >
            লগইন পেজে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#01160c] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-green-900/50 rounded-2xl border border-green-700 text-lime-400 mb-3 text-3xl">
            <FaBagShopping />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">আমার অর্ডারকৃত পণ্য</h2>
          <p className="text-gray-300 text-sm md:text-base mt-2">কৃষি বাজার থেকে কেনা আপনার সকল পণ্যের অর্ডার হিস্ট্রি</p>
        </div>

        {/* Orders list */}
        <div>
          {loading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg text-lime-400"></span>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-16 bg-[#022e1a]/40 border border-green-850 rounded-3xl p-8 max-w-lg mx-auto">
              <FaCircleExclamation size={48} className="text-lime-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">কোনো অর্ডার হিস্ট্রি নেই</h3>
              <p className="text-gray-400 mb-6">আপনি এখনও কৃষি বাজার থেকে কোনো পণ্য অর্ডার করেননি।</p>
              <button
                onClick={() => navigate("/agro-market")}
                className="bg-lime-500 text-green-950 font-bold px-5 py-2.5 rounded-xl hover:bg-lime-400 transition cursor-pointer"
              >
                কৃষি বাজারে যান
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={order._id}
                  className="bg-gradient-to-b from-[#022e1a] to-[#012012] border border-green-800/80 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                >
                  {/* Product Details */}
                  <div className="flex items-center gap-4">
                    <img
                      src={order.productImage}
                      alt={order.productName}
                      className="w-20 h-20 rounded-2xl object-cover border border-green-700/60"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-white leading-tight">{order.productName}</h4>
                      <p className="text-lime-400 font-bold text-base mt-1">৳ {order.productPrice}</p>
                      <p className="text-xs text-gray-400 mt-1">বিক্রেতার ইমেইল: {order.sellerEmail}</p>
                    </div>
                  </div>

                  {/* Buyer Shipping Info used for this order */}
                  <div className="flex-1 md:px-6 space-y-2 text-sm text-gray-300 w-full md:border-l border-green-800/40">
                    <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider block mb-1">
                      ডেলিভারি শিপিং ঠিকানা
                    </span>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-lime-500/70 text-xs shrink-0" />
                      <span>নাম: <strong className="text-white">{order.buyerName}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-lime-500/70 text-xs shrink-0" />
                      <span>ফোন: <strong className="text-white">{order.buyerPhone}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapLocationDot className="text-lime-500/70 text-xs shrink-0" />
                      <span className="truncate">ঠিকানা: <strong className="text-white">{order.buyerAddress}</strong></span>
                    </div>
                  </div>

                  {/* Purchase Date */}
                  <div className="text-xs text-gray-400 flex flex-col md:items-end w-full md:w-auto mt-2 md:mt-0 pt-3 md:pt-0 border-t md:border-0 border-green-850">
                    <div className="flex items-center gap-1.5 md:justify-end text-lime-400 mb-1 font-semibold text-sm">
                      <FaCalendarDays />
                      <span>অর্ডার সফল</span>
                    </div>
                    <span>ক্রয়ের তারিখ:</span>
                    <strong className="text-white text-sm font-semibold mt-0.5">
                      {order.orderDate ? new Date(order.orderDate).toLocaleDateString("bn-BD") : "N/A"}
                    </strong>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default OrderedProducts;
