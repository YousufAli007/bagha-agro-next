import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaBoxesStacked, FaTruckFast, FaPhone, FaMapLocationDot, FaUser, FaCircleExclamation, FaWheatAwn } from "react-icons/fa6";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [activeTab, setActiveTab] = useState("products"); // "products" or "orders"

  useEffect(() => {
    if (!user) return;

    // Fetch user's uploaded products
    fetch(`https://bagha-agro-server.vercel.app/products/seller/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch((err) => {
        console.error("Error fetching my products:", err);
        setLoadingProducts(false);
        toast.error("পণ্য লোড করতে সমস্যা হয়েছে।");
      });

    // Fetch orders received for user's products
    fetch(`https://bagha-agro-server.vercel.app/orders/seller/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoadingOrders(false);
      })
      .catch((err) => {
        console.error("Error fetching seller orders:", err);
        setLoadingOrders(false);
        toast.error("অর্ডারসমূহ লোড করতে সমস্যা হয়েছে।");
      });
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#01160c]">
        <div className="bg-[#022e1a] p-8 rounded-3xl border border-green-800 shadow-2xl max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4">লগইন প্রয়োজন</h2>
          <p className="text-gray-300 mb-6">আমার পণ্য দেখতে অনুগ্রহ করে লগইন করুন।</p>
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
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">আমার বিক্রেতা ড্যাশবোর্ড</h2>
          <p className="text-gray-300 text-sm md:text-base mt-2">আপনার আপলোড করা পণ্য এবং ক্রেতাদের অর্ডারের বিস্তারিত তথ্য</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 cursor-pointer border ${
              activeTab === "products"
                ? "bg-lime-500 text-green-950 border-lime-400 shadow-lg shadow-lime-950/40"
                : "bg-green-900/40 text-gray-300 border-green-800 hover:bg-green-900/60"
            }`}
          >
            <FaBoxesStacked />
            আমার পণ্য তালিকা ({products.length})
          </button>
          
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 cursor-pointer border ${
              activeTab === "orders"
                ? "bg-lime-500 text-green-950 border-lime-400 shadow-lg shadow-lime-950/40"
                : "bg-green-900/40 text-gray-300 border-green-800 hover:bg-green-900/60"
            }`}
          >
            <FaTruckFast />
            প্রাপ্ত অর্ডারসমূহ ({orders.length})
          </button>
        </div>

        {/* Tab Contents */}
        <div>
          <AnimatePresence mode="wait">
            {activeTab === "products" ? (
              <motion.div
                key="products-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {loadingProducts ? (
                  <div className="flex justify-center py-12">
                    <span className="loading loading-spinner loading-lg text-lime-400"></span>
                  </div>
                ) : products.length === 0 ? (
                  <div className="text-center py-16 bg-[#022e1a]/40 border border-green-850 rounded-3xl p-8 max-w-lg mx-auto">
                    <FaCircleExclamation size={48} className="text-lime-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">কোনো পণ্য পাওয়া যায়নি</h3>
                    <p className="text-gray-400 mb-6">আপনি এখনো কৃষি বাজারে বিক্রির জন্য কোনো পণ্য আপলোড করেননি।</p>
                    <button
                      onClick={() => navigate("/dashboard/add-product")}
                      className="bg-lime-500 text-green-950 font-bold px-5 py-2.5 rounded-xl hover:bg-lime-400 transition cursor-pointer"
                    >
                      নতুন পণ্য যোগ করুন
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <motion.div
                        whileHover={{ y: -5 }}
                        key={product._id}
                        className="bg-gradient-to-b from-[#022e1a] to-[#012012] border border-green-800/60 rounded-3xl p-5 shadow-xl flex flex-col justify-between"
                      >
                        <div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-44 object-cover rounded-2xl border border-green-800/40 mb-4"
                          />
                          <h4 className="text-xl font-bold text-white mb-1">{product.name}</h4>
                          <p className="text-lime-400 font-bold text-lg mb-2">৳ {product.price}</p>
                        </div>
                        <div className="border-t border-green-850 pt-3 mt-2 text-xs text-gray-400 flex justify-between items-center">
                          <span>যোগ করা হয়েছে:</span>
                          <span>{product.createdAt ? new Date(product.createdAt).toLocaleDateString("bn-BD") : "N/A"}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="orders-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {loadingOrders ? (
                  <div className="flex justify-center py-12">
                    <span className="loading loading-spinner loading-lg text-lime-400"></span>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="text-center py-16 bg-[#022e1a]/40 border border-green-850 rounded-3xl p-8 max-w-lg mx-auto">
                    <FaCircleExclamation size={48} className="text-lime-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">কোনো অর্ডার নেই</h3>
                    <p className="text-gray-400">ক্রেতারা এখনো আপনার কোনো পণ্য অর্ডার করেনি।</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div
                        key={order._id}
                        className="bg-gradient-to-b from-[#022e1a] to-[#012012] border border-green-800/80 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                      >
                        {/* Product info details */}
                        <div className="flex items-center gap-4">
                          <img
                            src={order.productImage}
                            alt={order.productName}
                            className="w-16 h-16 rounded-xl object-cover border border-green-700/60"
                          />
                          <div>
                            <span className="bg-lime-900/30 text-lime-400 text-xs px-2.5 py-0.5 rounded-full border border-lime-800/60 font-semibold mb-1.5 inline-block">
                              অর্ডারকৃত পণ্য
                            </span>
                            <h4 className="text-lg font-bold text-white leading-tight">{order.productName}</h4>
                            <p className="text-lime-400 font-bold text-sm mt-0.5">
                              মোট মূল্য: ৳ {order.totalPrice || order.productPrice || order.unitPrice} <span className="text-xs text-gray-400 font-normal">({order.quantity || "১ কেজি"})</span>
                            </p>
                            {order.unitPrice && (
                              <p className="text-xs text-gray-400 mt-0.5">একক মূল্য: ৳ {order.unitPrice} / কেজি</p>
                            )}
                          </div>
                        </div>

                        {/* Customer Information (buyer details) */}
                        <div className="flex-1 md:px-6 space-y-2 text-sm text-gray-300 w-full md:border-l md:border-r border-green-800/40">
                          <div className="flex items-center gap-2">
                            <FaUser className="text-lime-400 text-xs shrink-0" />
                            <span>ক্রেতার নাম: <strong className="text-white">{order.buyerName}</strong></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-lime-400 text-xs shrink-0" />
                            <span>মোবাইল: <strong className="text-white">{order.buyerPhone}</strong></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapLocationDot className="text-lime-400 text-xs shrink-0" />
                            <span className="truncate">ঠিকানা: <strong className="text-white">{order.buyerAddress}</strong></span>
                          </div>
                        </div>

                        {/* Order info date */}
                        <div className="text-xs text-gray-400 flex flex-col md:items-end w-full md:w-auto mt-2 md:mt-0 pt-3 md:pt-0 border-t md:border-0 border-green-850">
                          <span>অর্ডারের তারিখ:</span>
                          <strong className="text-white text-sm font-semibold mt-1">
                            {order.orderDate ? new Date(order.orderDate).toLocaleDateString("bn-BD") : "N/A"}
                          </strong>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default MyProducts;
