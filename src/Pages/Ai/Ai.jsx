import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, 
  FaUser, 
  FaPaperPlane, 
  FaWheatAwn, 
  FaFish, 
  FaCow, 
  FaCartShopping, 
  FaPhoneVolume, 
  FaArrowRight 
} from 'react-icons/fa6';

const Ai = () => {
    const [messages, setMessages] = useState([
        { 
            sender: 'assistant', 
            text: 'আসসালামু আলাইকুম! আমি বাঘা এগ্রো AI সহকারী। ফসল উৎপাদন, মাটির স্বাস্থ্য, মাছ চাষ, গবাদি পশু পালন বা কৃষি বাজার দর সংক্রান্ত যেকোনো প্রশ্ন আমাকে জিজ্ঞেস করতে পারেন।',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    // Scroll to bottom whenever messages list changes
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const activeTopics = [
        {
            category: "ফসল ও চাষাবাদ",
            icon: <FaWheatAwn className="text-lime-400" />,
            queries: [
                "ধানের পাতা হলুদ হওয়া ও সমাধান",
                "ধানের ব্লাস্ট রোগ ও প্রতিকার",
                "জৈব সার ও সুষম সার নিয়ম",
                "ছাদ কৃষি ও ড্রিপ ইরিগেশন"
            ]
        },
        {
            category: "মৎস্য চাষ",
            icon: <FaFish className="text-cyan-400" />,
            queries: [
                "পুকুরের অক্সিজেন সংকট সমাধান",
                "মাছের ক্ষত ও লেজ পচা রোগ",
                "শীতে পুকুরের পানির যত্ন"
            ]
        },
        {
            category: "প্রাণিসম্পদ",
            icon: <FaCow className="text-amber-400" />,
            queries: [
                "গবাদি পশুর জরুরি ভ্যাকসিনের তালিকা",
                "উন্নত জাতের গরু মোটাতাজাকরণ",
                "দানাদার খাদ্য ও সাইলেজ তৈরি"
            ]
        },
        {
            category: "বাজার ও ই-কমার্স",
            icon: <FaCartShopping className="text-emerald-400" />,
            queries: [
                "আজকের বাজার দর যাচাই",
                "জরুরি কৃষি হেল্পলাইন"
            ]
        }
    ];

    const quickSuggestions = [
        "ধানের পাতা হলুদ হওয়া",
        "পুকুরে অক্সিজেনের অভাব",
        "গরুর ভ্যাকসিন ক্যালেন্ডার",
        "আজকের বাজার দর"
    ];

    const getAiResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes("ধানের পাতা হলুদ") || lowerQuery.includes("পাতা হলুদ")) {
            return `🌾 **ধানের পাতা হলুদ হওয়া এবং এর প্রতিকার:**

ধানের পাতা হলুদ হওয়ার কয়েকটি প্রধান কারণ ও সমাধান নিচে দেওয়া হলো:

১. **নাইট্রোজেনের অভাব:** পুরো পাতা হালকা সবুজ থেকে হলুদ হয়ে যায়।
   - *প্রতিকার:* জমিতে পর্যাপ্ত পরিমাণে ইউরিয়া সার উপরি প্রয়োগ করুন।

২. **টুংরো রোগ:** পাতা কমলা-হলুদ রং ধারণ করে এবং কুশি গজানো কমে যায়।
   - *প্রতিকার:* রোগাক্রান্ত গাছ তুলে মাটিতে পুঁতে ফেলুন। বাহক পোকা (সবুজ পাতা ফড়িং) দমনের জন্য অনুমোদিত কীটনাশক যেমন- সেভিন বা মিপসিন প্রয়োগ করুন।

৩. **শিকড় পচা ও আয়রনের বিষাক্ততা:** পাতা হলুদ হয়ে উপর থেকে শুকিয়ে আসে এবং শিকড় কালো হয়ে যায়।
   - *প্রতিকার:* জমির জমে থাকা পানি বের করে দিয়ে মাটি শুকিয়ে নিন, পরে আবার নতুন পানি দিন। বিঘাপ্রতি ১ কেজি দস্তা (জিংক) সার প্রয়োগ করুন।`;
        }

        if (lowerQuery.includes("ব্লাস্ট রোগ") || lowerQuery.includes("ব্লাস্ট")) {
            return `🌾 **ধানের ব্লাস্ট রোগ ও প্রতিকার:**

ব্লাস্ট ধানের একটি মারাত্মক ছত্রাকজনিত রোগ। এটি পাতা, গিঁট এবং শীষে আক্রমণ করতে পারে।

**লক্ষণসমূহ:**
- পাতায় চোখের মতো ডিম্বাকৃতির দাগ হয়, যার চারপাশ বাদামী ও মাঝখানটা ছাই রঙের হয়।
- রোগের প্রকোপ বেশি হলে শীষ গোড়া থেকে ভেঙে যায় ও ধান চিটা হয়ে যায়।

**প্রতিকার:**
১. জমিতে সবসময় পর্যাপ্ত পানি ধরে রাখুন।
২. নাইট্রোজেন (ইউরিয়া) সারের অতিরিক্ত ব্যবহার বন্ধ করুন।
৩. আক্রমণ দেখা দিলে প্রতি লিটার পানিতে ট্রাইসাইক্লাজোল (যেমন: ট্রুপার) ০.৭৫ গ্রাম অথবা টেবুকোনাজল+ট্রাইফ্লক্সিস্ট্রবিন (যেমন: নাটিভো) ০.৬ গ্রাম মিশিয়ে জমিতে স্প্রে করুন।`;
        }

        if (lowerQuery.includes("সার") || lowerQuery.includes("মাটি") || lowerQuery.includes("উর্বরতা") || lowerQuery.includes("ph")) {
            return `🌱 **মাটির উর্বরতা, সার ও pH ব্যবস্থাপনা নির্দেশিকা:**

সঠিক উপায়ে সার ও মাটি ব্যবস্থাপনা ভালো ফলনের মূল চাবিকাঠি।

**১. মাটি পরীক্ষা:**
- চাষ শুরুর আগে নিকটস্থ সরকারি মৃত্তিকা সম্পদ উন্নয়ন ইনস্টিটিউট (SRDI) বা উপজেলা কৃষি অফিস থেকে মাটির পুষ্টি উপাদান ও pH পরীক্ষা করে নিন।

**২. মাটির pH ও করণীয়:**
- **অম্লীয় মাটি (pH ৫.৫ এর নিচে):** মাটিতে ডলোমাইট চুন ব্যবহার করুন (বিঘাপ্রতি ৩০-৪০ কেজি)।
- **ক্ষারীয় মাটি (pH ৭.৫ এর উপরে):** পর্যাপ্ত জৈব সার ও জিপসাম সার ব্যবহার করুন।

**৩. সুষম সার প্রয়োগের অনুপাত (সাধারণ):**
- **ইউরিয়া (নাইট্রোজেন):** গাছের দৈহিক বৃদ্ধির জন্য। ৩ কিস্তিতে দিন।
- **টিএসপি/ডিএপি (ফসফরাস):** শিকড় গঠন ও মজবুত করতে। শেষ চাষের সময় দিন।
- **এমওপি (পটাশিয়াম):** রোগ প্রতিরোধ ও দানা পুষ্ট করতে। ২ কিস্তিতে দিন।`;
        }

        if (lowerQuery.includes("অক্সিজেন") || lowerQuery.includes("পুকুর") || lowerQuery.includes("পানি")) {
            return `🐟 **পুকুরের পানি ও অক্সিজেন সংকট সমাধান গাইড:**

মাছ চাষে পানির গুণাগুণ বজায় রাখা অত্যন্ত জরুরি।

**১. অক্সিজেন সংকটের লক্ষণ ও প্রতিকার:**
- **লক্ষণ:** মাছ ভোরে পানির ওপর ভেসে উঠে হা করে বাতাস নেয়।
- **তাত্ক্ষণিক প্রতিকার:**
  - পুকুরে বাঁশ বা সাঁতার কেটে পানি ওলট-পালট করুন।
  - ডাবল ও জিপোরিডিন জাতীয় অক্সিজেন ট্যাবলেট (যেমন: Oxy-Life) ছিটান।
  - পুকুরে ওয়াটার অ্যারেটর (Aerator) চালান।

**২. পানির pH নিয়ন্ত্রণ:**
- পানির আদর্শ pH হওয়া উচিত ৭.৫ - ৮.৫।
- **pH কমে গেলে (অম্লতা বেশি):** প্রতি শতকে ১-২ কেজি চুন গুলিয়ে পানিতে ছিটান।
- **pH বেড়ে গেলে (ক্ষারত্ব বেশি):** প্রতি শতকে ১০০-১৫০ গ্রাম তেঁতুল বা সাজনা পাতা গুলিয়ে দিন।`;
        }

        if (lowerQuery.includes("ক্ষত") || lowerQuery.includes("লেজ পচা") || lowerQuery.includes("রোগ")) {
            return `🐟 **মাছের ক্ষত ও লেজ পচা রোগের প্রতিকার:**

এটি সাধারণত ব্যাকটেরিয়া বা ছত্রাকজনিত সংক্রমণের কারণে হয়ে থাকে, বিশেষ করে শীতকালে।

**লক্ষণ:**
- মাছের গায়ে লালচে দাগ বা ক্ষত দেখা যায়।
- লেজ ও পাখনা পচে খসে পড়ে।

**প্রতিকার:**
১. প্রতি শতকে ১ কেজি চুন ও ১ কেজি লবণ একসাথে পুকুরের পানিতে প্রয়োগ করুন।
২. আক্রান্ত মাছকে আলাদা করে ৫% লবণ পানিতে বা পটাশিয়াম পারম্যাঙ্গানেট মিশ্রিত পানিতে ৫-১০ মিনিট ডুবিয়ে রেখে পুকুরে ছাড়ুন।
৩. পানির জীবাণু দূর করতে প্রতি শতকে ৩-৫ গ্রাম ব্লীচিং পাউডার বা পটাশ প্রয়োগ করতে পারেন।`;
        }

        if (lowerQuery.includes("শীত") || lowerQuery.includes("শীতে")) {
            return `🐟 **শীতকালে পুকুরের মৎস্য ব্যবস্থাপনা:**

শীতকালে মাছের রোগবালাই বাড়ে এবং বৃদ্ধি থমকে যায়। করণীয়:

১. পুকুরে সূর্যালোক পড়ার ব্যবস্থা করুন, চারপাশের গাছের ডালপালা কেটে দিন।
২. শীতকালে খাবারের পরিমাণ ২৫-৫০% কমিয়ে দিন কারণ মাছের হজমশক্তি কমে যায়।
৩. নতুন গভীর নলকূপের উষ্ণ পানি পুকুরে যোগ করুন।
৪. নিয়মিত হররা টেনে তলদেশের গ্যাস বের করে দিন।`;
        }

        if (lowerQuery.includes("ভ্যাকসিন") || lowerQuery.includes("টিকা")) {
            return `🐄 **গবাদি পশুর জরুরি ভ্যাকসিনের তালিকা ও সময়সূচি:**

আপনার খামারের গরুকে সুস্থ রাখতে নিচের ভ্যাকসিনগুলো নিয়মিত সময়মতো দিন:

| রোগের নাম | টিকার বয়স | কার্যকারিতা | পুনরাবৃত্তি |
| :--- | :--- | :--- | :--- |
| **তড়কা (Anthrax)** | ৬ মাস বা তার বেশি | ১ বছর | প্রতি বছর একবার |
| **বাদলা (Black Quarter)** | ৬ মাস বা তার বেশি | ১ বছর | প্রতি বছর একবার |
| **গলাফুলা (Hemorrhagic Septicemia)** | ৬ মাস বা তার বেশি | ৬ মাস-১ বছর | বছরে দুইবার (বর্ষার আগে) |
| **ক্ষুরা রোগ (FMD)** | ৪ মাস বা তার বেশি | ৬ মাস | বছরে দুইবার (ছয় মাস পর পর) |
| **পিপিআর (PPR - ছাগলের জন্য)** | ৪ মাস বা তার বেশি | ১ বছর | প্রতি বছর একবার |

*সতর্কতা:* সুস্থ পশুকে টিকা দিন, অসুস্থ পশুকে টিকা দেওয়া যাবে না। স্থানীয় ভেটেরিনারি চিকিৎসকের পরামর্শ নিন।`;
        }

        if (lowerQuery.includes("গরু") || lowerQuery.includes("ছাগল") || lowerQuery.includes("মোটাতাজাকরণ")) {
            return `🐄 **উন্নত জাতের গরু মোটাতাজাকরণ পদ্ধতি:**

কম সময়ে লাভজনকভাবে গরু মোটাতাজাকরণে নিচের নিয়মগুলো অনুসরণ করুন:

১. **জাত নির্বাচন:** উন্নত জাত যেমন- শাহীওয়াল, ক্রস-ফ্রিজিয়ান বা দেশি ষাঁড় গরু নির্বাচন করুন। বয়স ১.৫ থেকে ২ বছরের মধ্যে হওয়া ভালো।
২. **কৃমিনাশক প্রয়োগ:** খামারে আনার পর শুরুতেই চিকিৎসকের পরামর্শে কৃমিনাশক ওষুধ ও লিভার টনিক খাওয়ান।
৩. **সুষম খাদ্য তালিকা:**
   - **আঁশযুক্ত খাদ্য:** কাঁচা ঘাস (যেমন- নেপিয়ার, জাম্বো) ও ইউরিয়া মোলাসেস স্ট্র (UMS)।
   - **দানাদার খাদ্য:** গমের ভুসি, চালের কুঁড়া, খৈল, ডালের ভুষি এবং খনিজ লবণ মিশ্রণ (প্রতিদিন দেহের ওজনের ১.৫ - ২%)।
৪. **পর্যাপ্ত বিশুদ্ধ পানি:** গরুর সামনে সবসময় পরিষ্কার ও বিশুদ্ধ পানি রাখুন।`;
        }

        if (lowerQuery.includes("সাইলেজ") || lowerQuery.includes("খাদ্য")) {
            return `🍀 **দানাদার খাদ্য ও সাইলেজ (Silage) তৈরি পদ্ধতি:**

সাইলেজ হলো কাঁচা ঘাসকে বৈজ্ঞানিক উপায়ে সংরক্ষণ করার পদ্ধতি, যা শুকনো মরসুমে ঘাসের অভাব মেটায়।

**তৈরির ধাপসমূহ:**
১. **ঘাস নির্বাচন ও কাটা:** ফুল আসার আগে ভুট্টা ঘাস বা নেপিয়ার ঘাস কেটে ছোট ছোট টুকরো (১-২ ইঞ্চি) করে কেটে নিন।
২. **চিটাগুড় (Molasses) মিশ্রণ:** কাটা ঘাসের সাথে ৩-৪% চিটাগুড় এবং সামান্য পানি ভালোভাবে মিশিয়ে নিন।
৩. **বাতাসবিহীন সংরক্ষণ (Compacting):** ঘাসগুলো মোটা পলিথিন ব্যাগে বা সাইলো পিটে স্তরে স্তরে রেখে পা দিয়ে চেপে বাতাস সম্পূর্ণ বের করে দিন।
৪. **মুখ বন্ধ করা:** মুখ ভালো করে বেঁধে রাখুন। ৩-৪ সপ্তাহ পর সুস্বাদু সাইলেজ গরুকে খাওয়ানোর উপযোগী হবে।`;
        }

        if (lowerQuery.includes("বাজার") || lowerQuery.includes("দাম") || lowerQuery.includes("দর")) {
            return `📊 **আজকের বাজার দর ( simulated live updates ):**

দেশের প্রধান বাজারগুলোর পাইকারি ও খুচরা মূল্যের গড় তালিকা:

| পণ্যের নাম | পাইকারি মূল্য | খুচরা মূল্য | বাজার পরিস্থিতি |
| :--- | :--- | :--- | :--- |
| **মিনিকেট চাল** | ২৫০০ - ২৬৫০ টাকা (মণ) | ৬৮ - ৭২ টাকা (কেজি) | স্বাভাবিক |
| **রুই মাছ (বড়)** | ২৬০ - ২৮০ টাকা (কেজি) | ৩২০ - ৩৫০ টাকা (কেজি) | সরবরাহ বেশি |
| **পাঙ্গাস মাছ** | ১৩০ - ১৪০ টাকা (কেজি) | ১৬০ - ১৮০ টাকা (কেজি) | স্বাভাবিক |
| **ব্রয়লার মুরগি** | ১৬০ - ১৭০ টাকা (কেজি) | ১৮৫ - ১৯৫ টাকা (কেজি) | সামান্য কমতির দিকে |
| **কাঁচা মরিচ** | ৮০ - ১০০ টাকা (কেজি) | ১২ো - ১৪০ টাকা (কেজি) | বর্ষার কারণে ঊর্ধ্বমুখী |
| **ডিম (লাল)** | ১১৫ টাকা (ডজন) | ১৩০ - ১৩৫ টাকা (ডজন) | স্বাভাবিক |

*পরামর্শ:* আপনার উৎপাদিত পণ্য সরাসরি আড়তে বিক্রির জন্য আমাদের **'কৃষি বাজার'** পেজটি ব্যবহার করুন।`;
        }

        if (lowerQuery.includes("হেল্পলাইন") || lowerQuery.includes("যোগাযোগ") || lowerQuery.includes("নাম্বার")) {
            return `📞 **জরুরি কৃষি হেল্পলাইন ও নিকটস্থ সেবা কেন্দ্র:**

যেকোনো জরুরি সমস্যায় সরাসরি কথা বলতে যোগাযোগ করুন:

- **সরকারি কৃষি কল সেন্টার:** \`১৬১২৩\` (যেকোনো মোবাইল থেকে টোল-ফ্রি, সকাল ৯টা থেকে বিকাল ৫টা)
- **মৎস্য ও প্রাণিসম্পদ কল সেন্টার:** \`১৬১২২\` (টোল-ফ্রি)
- **নিকটস্থ ইউনিয়ন ডিজিটাল সেন্টার (UDC):** আপনার ইউনিয়ন পরিষদে অবস্থিত তথ্য সেবা কেন্দ্রে বিনামূল্যে বিশেষজ্ঞ পরামর্শ ও সরকারি সেবা আবেদনের সুবিধা পাবেন।
- **উপজেলা কৃষি/প্রাণিসম্পদ অফিস:** যেকোনো জটিল রোগের লক্ষণ দেখা দিলে সরাসরি উপজেলা ভেটেরিনারি সার্জন বা কৃষি সম্প্রসারণ অফিসারের সাথে যোগাযোগ করুন।`;
        }

        if (lowerQuery.includes("ছাদ") || lowerQuery.includes("ইরিগেশন")) {
            return `🏡 **ছাদ কৃষি ও আধুনিক ড্রিপ ইরিগেশন পদ্ধতি:**

শহরাঞ্চলে ছাদ কৃষি অত্যন্ত জনপ্রিয় হয়ে উঠছে।

১. **টব ও মাটির প্রস্তুতি:** ৩ ভাগ দোআঁশ মাটির সাথে ১ ভাগ গোবর সার বা কম্পোস্ট এবং সামান্য কোকোপিট মিশিয়ে টব প্রস্তুত করুন।
২. **ড্রিপ ইরিগেশন (ফোটা ফোটা সেচ):** প্রতিটি টবে পাইপের মাধ্যমে সরাসরি শিকড়ে ফোটা ফোটা পানি দেওয়ার ব্যবস্থা করুন। এতে পানির অপচয় ৭০% কমে এবং গাছের আর্দ্রতা ঠিক থাকে।
৩. **উপযুক্ত গাছ:** টমেটো, মরিচ, লেবু, বেগুন, ধনেপাতা এবং বিভিন্ন পাতাবাহার সবজি ছাদ কৃষির জন্য সবচেয়ে উপযোগী।`;
        }

        return `🤖 **আমি আপনার প্রশ্নের উত্তর দেওয়ার চেষ্টা করছি...**

আপনার প্রশ্ন: *"${query}"*

এর ওপর ভিত্তি করে আমাদের প্রাথমিক কৃষি পরামর্শ:

১. **সমস্যা চিহ্নিতকরণ:** এটি কৃষি/মৎস্য/প্রাণিসম্পদ ব্যবস্থাপনার আওতাধীন বিষয়।
২. **জরুরি পদক্ষেপ:** সর্বদা বিশুদ্ধ পানি ব্যবহার করুন এবং আক্রান্ত অংশ দ্রুত আলাদা করুন।
৩. **প্রতিকার:** জৈব বা রাসায়নিক প্রয়োগের আগে উপজেলা কৃষি কর্মকর্তা বা লাইভ চ্যাটের মাধ্যমে বিশেষজ্ঞের সাথে যোগাযোগ করুন। বিশদ তথ্যের জন্য আমাদের কল সেন্টার \`১৬১২৩\` নম্বরে যোগাযোগ করতে পারেন।`;
    };

    const handleSendMessage = (e, customText = '') => {
        if (e) e.preventDefault();
        const textToSend = customText || input;
        if (!textToSend.trim()) return;

        // Add user message
        const userMsg = {
            sender: 'user',
            text: textToSend,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);
        if (!customText) setInput('');

        // Show typing indicator
        setIsTyping(true);

        setTimeout(() => {
            const aiResponseText = getAiResponse(textToSend);
            setIsTyping(false);

            // Stream simulation
            simulateStreamingResponse(aiResponseText);
        }, 1200);
    };

    const simulateStreamingResponse = (fullText) => {
        const newMsg = {
            sender: 'assistant',
            text: '',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMsg]);

        let currentIdx = 0;
        const interval = setInterval(() => {
            if (currentIdx < fullText.length) {
                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        ...updated[updated.length - 1],
                        text: fullText.substring(0, currentIdx + 2)
                    };
                    return updated;
                });
                currentIdx += 2;
            } else {
                clearInterval(interval);
            }
        }, 10);
    };

    // Custom UI Parser to render nice markdown-style elements (Bold, bullets, tables)
    const renderMessageText = (text) => {
        if (text.includes('|')) {
            const lines = text.split('\n');
            const tableLines = lines.filter(line => line.trim().startsWith('|'));
            if (tableLines.length >= 3) {
                // Table parsing
                const headers = tableLines[0].split('|').map(h => h.trim()).filter(h => h);
                const rows = tableLines.slice(2).map(line => {
                    return line.split('|').map(cell => cell.trim()).filter(cell => cell);
                }).filter(row => row.length > 0);

                const beforeTable = lines.slice(0, lines.indexOf(tableLines[0])).join('\n');
                const afterTable = lines.slice(lines.indexOf(tableLines[tableLines.length - 1]) + 1).join('\n');

                return (
                    <div className="space-y-3">
                        {beforeTable && renderMessageText(beforeTable)}
                        <div className="overflow-x-auto my-3 border border-green-800/40 rounded-xl shadow-lg">
                            <table className="w-full text-sm text-left text-gray-250 table-auto">
                                <thead className="text-xs uppercase bg-green-900/80 text-lime-400 font-bold border-b border-green-800/60">
                                    <tr>
                                        {headers.map((h, i) => (
                                            <th key={i} className="px-4 py-3 font-semibold tracking-wide">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-green-850 bg-green-950/30">
                                    {rows.map((row, rIdx) => (
                                        <tr key={rIdx} className="hover:bg-green-900/30 transition-colors">
                                            {row.map((cell, cIdx) => (
                                                <td key={cIdx} className="px-4 py-3 text-gray-200">{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {afterTable && renderMessageText(afterTable)}
                    </div>
                );
            }
        }

        const parts = text.split('\n').map((line, lIdx) => {
            let trimmed = line.trim();
            if (!trimmed) return <div key={lIdx} className="h-2" />;

            let isBullet = false;
            if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
                trimmed = trimmed.substring(1).trim();
                isBullet = true;
            }

            // Parse bold symbols
            const boldRegex = /\*\*(.*?)\*\*/g;
            const lineParts = [];
            let lastIdx = 0;
            let match;
            while ((match = boldRegex.exec(trimmed)) !== null) {
                if (match.index > lastIdx) {
                    lineParts.push(trimmed.substring(lastIdx, match.index));
                }
                lineParts.push(<strong key={match.index} className="text-lime-400 font-bold">{match[1]}</strong>);
                lastIdx = boldRegex.lastIndex;
            }
            if (lastIdx < trimmed.length) {
                lineParts.push(trimmed.substring(lastIdx));
            }

            const content = lineParts.length > 0 ? lineParts : trimmed;

            if (isBullet) {
                return (
                    <div key={lIdx} className="flex items-start gap-2 pl-2 my-1">
                        <span className="text-lime-400 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-lime-400 shadow-glow" />
                        <span className="text-gray-200 text-sm leading-relaxed">{content}</span>
                    </div>
                );
            }

            return <p key={lIdx} className="my-1.5 text-gray-200 text-sm leading-relaxed">{content}</p>;
        });

        return <div className="space-y-1">{parts}</div>;
    };

    return (
        <div className="bg-[#01160c] min-h-[calc(100vh-80px)] text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                
                {/* Coming Soon Announcement Alert */}
                <div className="mb-6 bg-lime-500/10 border border-lime-500/20 px-6 py-3 rounded-2xl flex items-center justify-between text-xs text-lime-400">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
                        </span>
                        <span><strong>আপডেট নোটিশ:</strong> শীঘ্রই AI আরো আপডেট হবে (Gemini API Integration Coming Soon) | AI নিয়ে আরও আপডেট আসছে।</span>
                    </div>
                    <span className="bg-lime-500/20 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider hidden sm:inline-block">Coming Soon</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Sidebar - Help Topics */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-green-950/45 border border-green-800/60 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-lime-400 mb-6 pb-2 border-b border-green-800/40 flex items-center gap-2">
                                <FaRobot />
                                সহযোগিতা সূচী
                            </h2>

                            <div className="space-y-4">
                                {activeTopics.map((topic, tIdx) => (
                                    <div key={tIdx} className="bg-green-900/20 border border-green-800/40 rounded-2xl p-4">
                                        <h3 className="font-semibold text-lg flex items-center gap-2 mb-3 text-gray-200">
                                            {topic.icon}
                                            {topic.category}
                                        </h3>
                                        <div className="flex flex-col gap-2">
                                            {topic.queries.map((q, qIdx) => (
                                                <button
                                                    key={qIdx}
                                                    onClick={() => handleSendMessage(null, q)}
                                                    className="w-full text-left text-sm text-gray-300 hover:text-lime-400 bg-green-900/10 hover:bg-green-900/30 border border-green-800/20 hover:border-green-800/50 rounded-xl px-3.5 py-2.5 transition-all duration-200 flex items-center justify-between group cursor-pointer"
                                                >
                                                    <span className="line-clamp-1">{q}</span>
                                                    <FaArrowRight className="text-[10px] text-lime-400/50 group-hover:text-lime-400 transition-colors transform group-hover:translate-x-1" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Chat Interface */}
                    <div className="lg:col-span-2 flex flex-col h-[calc(100vh-210px)] min-h-[520px] bg-green-950/45 border border-green-800/60 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden">
                        
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-green-900/80 to-emerald-950/80 border-b border-green-800/40 p-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-11 h-11 rounded-full bg-green-800 border-2 border-lime-400 flex items-center justify-center text-lime-400 shadow-md">
                                        <FaRobot size={22} className="animate-pulse" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#01160c]"></span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg text-white">বাঘা এগ্রো AI সহকারী</span>
                                    <span className="text-xs text-lime-400 flex items-center gap-1.5">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping"></span>
                                        অনলাইন | শীঘ্রই AI আরো আপডেট হবে 🚀
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Log */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-green-950/10">
                            <AnimatePresence initial={false}>
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className={`flex gap-3 max-w-[90%] ${
                                            msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                                        }`}
                                    >
                                        {/* Avatar */}
                                        <div className={`w-9 h-9 rounded-full flex items-center justify-center border shrink-0 shadow-md ${
                                            msg.sender === 'user' 
                                                ? 'bg-lime-500 border-lime-400 text-green-950' 
                                                : 'bg-green-900 border-green-700 text-lime-400'
                                        }`}>
                                            {msg.sender === 'user' ? <FaUser size={14} /> : <FaRobot size={15} />}
                                        </div>

                                        {/* Message Bubble */}
                                        <div className="flex flex-col gap-1 max-w-[calc(100%-48px)]">
                                            <div className={`rounded-2xl p-4.5 shadow-md text-sm leading-relaxed ${
                                                msg.sender === 'user'
                                                    ? 'bg-lime-600 text-green-950 font-medium rounded-tr-none'
                                                    : 'bg-gradient-to-br from-green-900/80 to-emerald-950/80 border border-green-800/40 text-gray-100 rounded-tl-none'
                                            }`}>
                                                {msg.sender === 'user' ? msg.text : renderMessageText(msg.text)}
                                            </div>
                                            <span className={`text-[10px] text-gray-400 px-1 ${
                                                msg.sender === 'user' ? 'text-right' : 'text-left'
                                            }`}>
                                                {msg.time}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing/Thinking Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-3 max-w-[70%]"
                                    >
                                        <div className="w-9 h-9 rounded-full bg-green-900 border border-green-700 text-lime-400 flex items-center justify-center shrink-0 shadow-md">
                                            <FaRobot size={15} />
                                        </div>
                                        <div className="bg-green-900/40 border border-green-800/40 rounded-2xl rounded-tl-none p-4 shadow-md flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                            <span className="w-2.5 h-2.5 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                            <span className="w-2.5 h-2.5 bg-lime-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={chatEndRef} />
                        </div>

                        {/* Quick Action Suggestion Row */}
                        <div className="px-6 py-2 bg-green-950/25 border-t border-green-800/20 overflow-x-auto flex gap-2 no-scrollbar">
                            {quickSuggestions.map((s, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSendMessage(null, s)}
                                    className="shrink-0 text-xs bg-green-900/20 hover:bg-green-900/50 hover:text-lime-400 border border-green-800/30 hover:border-green-850 rounded-full px-4 py-2 transition-all duration-200 shadow-sm cursor-pointer"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* Input Form */}
                        <form 
                            onSubmit={handleSendMessage}
                            className="bg-green-950/60 border-t border-green-800/40 p-4 flex gap-3 items-center"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="আপনার কৃষি বিষয়ক প্রশ্নটি এখানে লিখুন..."
                                className="flex-1 bg-green-900/30 border border-green-850 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30 transition-all placeholder-gray-400 shadow-inner"
                            />
                            <button
                                type="submit"
                                className="bg-lime-500 hover:bg-lime-400 text-green-950 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 shrink-0 cursor-pointer"
                            >
                                <FaPaperPlane size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            
            {/* Custom styles for hidden scrollbars */}
            <style dangerouslySetInnerHTML={{__html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(163, 230, 53, 0.15); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(163, 230, 53, 0.3); }
                .shadow-glow { box-shadow: 0 0 8px rgba(163, 230, 53, 0.6); }
            `}} />
        </div>
    );
};

export default Ai;