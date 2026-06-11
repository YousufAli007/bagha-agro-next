import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaShop, FaPhone, FaLocationDot, FaUser, FaXmark, FaScaleBalanced } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa"; 
import toast from "react-hot-toast";

const AgriculturalMarket = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderName, setOrderName] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderAddress, setOrderAddress] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1); // ড্রপডাউনের জন্য ডিফল্ট ১ কেজি
  const [submittingOrder, setSubmittingOrder] = useState(false);

  // Fetch products
  const fetchProducts = (search = "") => {
    setLoading(true);
    fetch(`https://bagha-agro-server.vercel.app/products?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
        toast.error("বাজারের পণ্য লোড করতে সমস্যা হয়েছে।");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchProducts(searchQuery);
  };

  // Instant Search on typing
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    fetchProducts(val);
  };

  // Open Order Modal
  const handleOpenOrderModal = (product) => {
    if (!user) {
      toast.error("অর্ডার করতে অনুগ্রহ করে প্রথমে লগইন করুন।");
      navigate("/login");
      return;
    }
    setSelectedProduct(product);
    setOrderName(user.displayName || "");
    setOrderPhone("");
    setOrderAddress("");
    setOrderQuantity(1); // মডাল ওপেন হলে পরিমাণ ১ রিসেট হবে
  };

  // Close Order Modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Submit Order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!orderName.trim() || !orderPhone.trim() || !orderAddress.trim()) {
      toast.error("অনুগ্রহ করে সব তথ্য পূরণ করুন।");
      return;
    }

    setSubmittingOrder(true);

    // পরিমাণ অনুযায়ী মোট মূল্য হিসাব
    const totalAmount = selectedProduct.price * orderQuantity;

    const orderInfo = {
      productId: selectedProduct._id,
      productName: selectedProduct.name,
      unitPrice: selectedProduct.price, // প্রতি কেজির দাম
      totalPrice: totalAmount, // মোট দাম
      quantity: `${orderQuantity} কেজি`, // কতটুকু কিনল তা যুক্ত করা হলো
      productImage: selectedProduct.image,
      sellerEmail: selectedProduct.sellerEmail,
      sellerName: selectedProduct.sellerName,
      buyerName: orderName,
      buyerPhone: orderPhone,
      buyerAddress: orderAddress,
      buyerEmail: user.email,
      orderDate: new Date().toISOString()
    };

    fetch("https://bagha-agro-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(orderInfo)
    })
      .then((res) => res.json())
      .then((result) => {
        setSubmittingOrder(false);
        if (result.insertedId) {
          toast.success("অর্ডার সফল হয়েছে!");
          handleCloseModal();
        } else {
          toast.error("অর্ডার সম্পন্ন করতে সমস্যা হয়েছে।");
        }
      })
      .catch((err) => {
        console.error("Error placing order:", err);
        setSubmittingOrder(false);
        toast.error("সার্ভার কানেকশন এরর! আবার চেষ্টা করুন।");
      });
  };

  return (
    <div className="min-h-screen bg-[#01160c] text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-green-900/50 rounded-2xl border border-green-700 text-lime-400 mb-3 text-3xl">
            <FaShop />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">কৃষি বাজার</h2>
          <p className="text-gray-300 text-sm md:text-base mt-2">তাজা কৃষিপণ্য সরাসরি কৃষকের কাছ থেকে কিনুন</p>
        </div>

        {/* Search Bar Container */}
        <div className="max-w-md mx-auto mb-12">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="text"
              placeholder="পণ্যের নাম লিখে খুঁজুন..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-5 pr-12 py-3.5 bg-green-950/40 border-2 border-green-800/80 rounded-xl text-white focus:outline-none focus:border-lime-400 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-4 text-gray-400 hover:text-lime-400 text-lg transition-colors cursor-pointer"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Products Grid */}
        <div>
          {loading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg text-lime-400"></span>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16 bg-[#022e1a]/30 border border-green-900/40 rounded-3xl p-8 max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-white mb-2">কোনো পণ্য পাওয়া যায়নি</h3>
              <p className="text-gray-400">খুঁজেছেন এমন কোনো পণ্য বর্তমানে বাজারে উপলব্ধ নেই।</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  key={product._id}
                  className="bg-gradient-to-b from-[#022e1a] to-[#012012] border border-green-800/60 rounded-2xl md:rounded-3xl p-3 md:p-5 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 md:h-44 object-cover rounded-xl md:rounded-2xl border border-green-800/40 mb-3 md:mb-4"
                    />
                    {/* Seller details badge */}
                    <span className="text-[10px] md:text-xs text-lime-400 font-semibold bg-green-900/30 border border-green-800/60 px-2.5 py-0.5 rounded-full mb-2 inline-block truncate max-w-full">
                      বিক্রেতা: {product.sellerName}
                    </span>
                    {/* Product Title */}
                    <h4 className="text-base md:text-xl font-bold text-white mb-0.5 md:mb-1 truncate">{product.name}</h4>
                    {/* Price with Per KG info */}
                    <p className="text-lime-400 font-bold text-sm md:text-lg">
                      ৳ {product.price} <span className="text-xs text-gray-400 font-normal">(১ কেজি)</span>
                    </p>
                  </div>

                  {/* Order Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOpenOrderModal(product)}
                    className="w-full flex items-center justify-center gap-1.5 md:gap-2 bg-lime-500 hover:bg-lime-400 text-green-950 text-xs md:text-sm font-bold py-2 md:py-3.5 rounded-xl shadow-md transition duration-200 mt-4 cursor-pointer"
                  >
                    <FaCartPlus />
                    অর্ডার করুন
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Order Modal Component */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[9999] backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-b from-[#022e1a] to-[#011c10] border border-green-800 rounded-3xl p-6 md:p-8 max-w-md w-full text-white shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute right-4 top-4 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <FaXmark size={22} />
              </button>

              {/* Title & Info */}
              <h3 className="text-2xl font-extrabold text-white mb-4">পণ্য অর্ডার নিশ্চিতকরণ</h3>
              
              {/* Product Info Card in Modal */}
              <div className="flex items-center gap-3 bg-green-950/60 p-3 rounded-2xl border border-green-800/40 mb-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-16 h-16 rounded-xl object-cover border border-green-800/40"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-white leading-tight">{selectedProduct.name}</h4>
                  <p className="text-gray-400 text-xs mt-0.5">একক মূল্য: ৳ {selectedProduct.price} / কেজি</p>
                  {/* Total Price real-time updates */}
                  <p className="text-lime-400 font-extrabold text-base mt-1">
                    মোট মূল্য: ৳ {selectedProduct.price * orderQuantity}
                  </p>
                </div>
              </div>

              {/* Order Form */}
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                
                {/* Quantity Dropdown (নতুন যুক্ত করা ড্রপডাউন) */}
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                    <FaScaleBalanced size={15} />
                  </span>
                  <select
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-green-950 border-2 border-green-800/80 rounded-xl text-white focus:outline-none focus:border-lime-400 text-sm cursor-pointer appearance-none relative z-0"
                  >
                    <option value={1} className="bg-green-950">১ কেজি</option>
                    <option value={2} className="bg-green-950">২ কেজি</option>
                    <option value={3} className="bg-green-950">৩ কেজি</option>
                    <option value = {5} className="bg-green-950">৫ কেজি</option>
                    <option value={10} className="bg-green-950">১০ কেজি</option>
                  </select>
                  {/* Custom arrow decoration for dropdown */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>

                {/* Orderer Name Input */}
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser size={15} />
                  </span>
                  <input
                    type="text"
                    placeholder="আপনার নাম"
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-green-950/40 border-2 border-green-800/80 rounded-xl text-white focus:outline-none focus:border-lime-400 text-sm"
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaPhone size={15} />
                  </span>
                  <input
                    type="tel"
                    placeholder="মোবাইল নম্বর"
                    value={orderPhone}
                    onChange={(e) => setOrderPhone(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-green-950/40 border-2 border-green-800/80 rounded-xl text-white focus:outline-none focus:border-lime-400 text-sm"
                  />
                </div>

                {/* Address Input */}
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-gray-400">
                    <FaLocationDot size={15} />
                  </span>
                  <textarea
                    placeholder="ডেলিভারি ঠিকানা"
                    value={orderAddress}
                    onChange={(e) => setOrderAddress(e.target.value)}
                    required
                    rows="3"
                    className="w-full pl-10 pr-4 py-3 bg-green-950/40 border-2 border-green-800/80 rounded-xl text-white focus:outline-none focus:border-lime-400 text-sm resize-none"
                  ></textarea>
                </div>

                {/* Confirm Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 bg-green-900/30 border border-green-800 text-gray-300 hover:text-white py-3 rounded-xl font-bold transition text-sm cursor-pointer"
                  >
                    বাতিল করুন
                  </button>
                  <button
                    type="submit"
                    disabled={submittingOrder}
                    className="flex-1 bg-lime-500 hover:bg-lime-400 text-green-950 py-3 rounded-xl font-bold shadow-md transition text-sm disabled:bg-gray-600 disabled:text-gray-400 cursor-pointer"
                  >
                    {submittingOrder ? "অর্ডার সম্পন্ন হচ্ছে..." : "অর্ডার নিশ্চিত করুন"}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AgriculturalMarket;