import React from 'react';
import Weather from '../Home/Weather';
import AgriculturalAdvice from './AgriculturalAdvice';
import FertilizerMeter from './FertilizerMeter';
import AgriculturalTechnology from './AgriculturalTechnology';
import CropDiseaseGuide from './CropDiseaseGuide';

const Agriculture = () => {
    return (
        <div className="bg-[#01160c] space-y-4">
            {/* ১. আবহাওয়া সেকশন */}
            <Weather />
            
            {/* ২. কৃষি পরামর্শ হিরো সেকশন */}
            <AgriculturalAdvice />
            
            {/* ৩. সার পরিমাপক ক্যালকুলেটর */}
            <FertilizerMeter />
            
            {/* ৪. আধুনিক কৃষি প্রযুক্তি */}
            <AgriculturalTechnology />
            
            {/* ৫. মূল শস্য রোগবালাই ও রোপণ গাইড */}
            <CropDiseaseGuide />
        </div>
    );
};

export default Agriculture;