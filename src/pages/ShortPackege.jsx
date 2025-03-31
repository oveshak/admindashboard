import React, { useState } from 'react';
import { PaymentModal } from '../component/PaymentModal';
import { Link } from 'react-router-dom';

const ShortPackege = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    return (
        <div className="bg-gray-100 min-h-screen">
        {/* Header with back button */}
        <div className="bg-teal-50 p-4 flex items-center ">
          <Link to="/packege" className='flex'>
          <button className="text-gray-600 mr-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button></Link>
          <h1 className="text-xl font-medium">ছোট্ট প্যাকেজ</h1>
        </div>
        
        {/* Support Info */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center text-gray-600 text-sm">
            <span>হেল্পলাইন এক্সটেনশন: </span>
            <a href="mailto:support@emouza.com" className="text-blue-500 flex items-center ml-2">
              <span className="bg-blue-500 text-white rounded p-0.5 mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              support@emouza.com
            </a>
          </div>
        </div>
        
        {/* Package Cards */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* 5 Map Package */}
            <div className="bg-teal-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-medium mb-1">৫টি ম্যাপ</h2>
              <p className="text-green-600 font-medium mb-2">৳৩০০</p>
              <p className="text-gray-600 text-sm mb-4">যেকোনো ৫টি ম্যাপ ডাউনলোড করা যাবে।</p>
              <div className="flex justify-end">
              <button 
                className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded-md text-sm hover:bg-green-600 transition"
                onClick={openModal}
              >
                ক্রয় করুন
              </button>
              </div>
            </div>
            
            {/* 10 Map Package */}
            <div className="bg-teal-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-medium mb-1">১০টি ম্যাপ</h2>
              <p className="text-green-600 font-medium mb-2">৳৫০০</p>
              <p className="text-gray-600 text-sm mb-4">যেকোনো ১০টি ম্যাপ ডাউনলোড করতে পারে।</p>
              <div className="flex justify-end">
              <button 
                className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition"
                onClick={openModal}
              >
                ক্রয় করুন
              </button>
              </div>
            </div>
          </div>
          
          {/* 25 Map Package - Full Width */}
          <div className="bg-teal-50 rounded-lg p-4 shadow-sm mb-4">
            <h2 className="text-lg font-medium mb-1">২৫টি ম্যাপ</h2>
            <p className="text-green-600 font-medium mb-2">৳১০০০</p>
            <p className="text-gray-600 text-sm mb-4">যেকোনো ২৫টি ম্যাপ ডাউনলোড করতে পারে।</p>
            <div className="flex justify-end">
            <button 
                className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition"
                onClick={openModal}
              >
                ক্রয় করুন
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
       
        <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
}

export default ShortPackege;
