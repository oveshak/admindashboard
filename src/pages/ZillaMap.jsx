import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ZillaMap = () => {
    const [formData, setFormData] = useState({
        division: '',
        district: '',
        upazila: '',
        weight: 426 // Default weight (example)
      });
      const unitPrice = 3.30; // Price per kg
      // Sample data - you can replace with your actual data
      const locations = {
        divisions: ['ঢাকা', 'চট্টগ্রাম', 'রাজশাহী', 'খুলনা', 'বরিশাল', 'সিলেট', 'রংপুর', 'ময়মনসিংহ'],
        districts: {
          'ঢাকা': ['ঢাকা', 'গাজীপুর', 'নারায়ণগঞ্জ', 'মানিকগঞ্জ'],
          'চট্টগ্রাম': ['চট্টগ্রাম', 'কক্সবাজার', 'রাঙ্গামাটি', 'খাগড়াছড়ি'],
          // Add more as needed
        },
        upazilas: {
          'ঢাকা': ['সাভার', 'ধামরাই', 'কেরানীগঞ্জ', 'নবাবগঞ্জ'],
          'গাজীপুর': ['গাজীপুর সদর', 'কালিয়াকৈর', 'কাপাসিয়া', 'শ্রীপুর'],
          // Add more as needed
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
          const newData = { ...prev, [name]: value };
          
          // Reset dependent fields
          if (name === 'division') {
            newData.district = '';
            // newData.upazila = '';
          } else if (name === 'district') {
            newData.upazila = '';
          }
          
          return newData;
        });
      };
    
      const getDistrictOptions = () => {
        if (!formData.division) return [];
        return locations.districts[formData.division] || [];
      };
    
    //   const getUpazilaOptions = () => {
    //     if (!formData.district) return [];
    //     return locations.upazilas[formData.district] || [];
    //   };
    
      const handleSubmit = () => {
        console.log('Submitted data:', formData);
        // Handle form submission here
      };
    
      const isSelectionComplete = () => {
        return formData.division && formData.district ;
      };
    // Calculate total price
    const totalPrice = (formData.weight * unitPrice).toFixed(2);

      return (
        <div className=" min-h-screen ">
          {/* Header with back button */}
          <div className="flex bg-green-50 items-center p-4 mb-6">
          <Link to="/bigpackege" className='flex'>
          <button className="text-gray-600 mr-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button></Link>
            <h1 className="text-lg font-medium text-gray-700">জেলার সকল স্থাপ</h1>
          </div>
    
          {/* Form Section */}
          <div className="mb-6 p-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                বিভাগ <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 appearance-none leading-tight focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option className='py-2' value="">বিভাগ নির্বাচন করুন</option>
                  {locations.divisions.map(division => (
                    <option key={division} value={division}>{division}</option>
                  ))}
                </select>
              
              </div>
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                জেলা <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  disabled={!formData.division}
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 appearance-none leading-tight focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">জেলা নির্বাচন করুন</option>
                  {getDistrictOptions().map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
               
              </div>
            </div>
    
            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                উপজেলা <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="upazila"
                  value={formData.upazila}
                  onChange={handleChange}
                  disabled={!formData.district}
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 appearance-none leading-tight focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">উপজেলা নির্বাচন করুন</option>
                  {getUpazilaOptions().map(upazila => (
                    <option key={upazila} value={upazila}>{upazila}</option>
                  ))}
                </select>
             
              </div>
            </div> */}
          </div>
    
          {/* Selection Summary Section */}
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <h2 className="text-black  font-bold mb-3">Your Selection:</h2>
            <p className="text-gray-700 text-sm mb-1">বিভাগ: {formData.division || 'Not selected'}</p>
            <p className="text-gray-700 text-sm mb-1">জেলা: {formData.district || 'Not selected'}</p>
            {/* <p className="text-gray-700 text-sm mb-3">উপজেলা: {formData.upazila || 'Not selected'}</p> */}
            <hr className='mb-2 '/>
            {isSelectionComplete() ? (
        <>
            <p className="text-gray-700 text-sm mb-1">মোট মাপ: {formData.weight} কেজি</p>
            <p className="text-gray-700 text-sm mb-1">প্রতি কেজির মূল্য: {unitPrice} টাকা</p>
            <p className="text-gray-700 text-sm mb-3 font-bold">মোট মূল্য: ৳{totalPrice} টাকা</p>
        </>
    ) : (
        <p className="text-gray-600 text-sm mb-4">সকল তথ্য নির্বাচন করুন।</p>
    )}
            <button 
              onClick={handleSubmit}
              disabled={!isSelectionComplete()}
              className={`flex items-center justify-center  py-2 px-4 rounded-md text-white font-medium ${isSelectionComplete() ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              ক্রয় করুন
            </button>
          </div>
        </div>
    );
}

export default ZillaMap;
