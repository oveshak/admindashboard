import React from 'react';
import { useNavigate } from 'react-router-dom';
const Packege = () => {
    const navigate=useNavigate()
    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">হেল্পলাইন এক্সটেনশন:</div>
          <a href="mailto:support@emouza.com" className="text-blue-500 flex items-center">
            <span className="bg-blue-500 text-white rounded p-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            support@emouza.com
          </a>
        </div>

        {/* Account Balance */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center mb-2">
            <div className="bg-gray-800 text-white p-2 rounded-md mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Account Balance</h2>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">ব্যালান্সঃ 0 টি ম্যাপ</div>
                <div className="text-sm text-gray-500">মেয়াদ: LifeTime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Choto Package */}
        <div  onClick={()=>navigate('/shortpackege')} className="bg-teal-50 rounded-lg shadow-md p-4 mb-6 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-teal-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">ছোট্ট প্যাকেজ</h3>
                <p className="text-sm text-gray-600">এই প্যাকেজটি ক্যানসেল করার জন্য।</p>
              </div>
            </div>
            <div className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Boro Package */}
        <div onClick={()=>navigate('/bigpackege')} className="bg-yellow-50 rounded-lg shadow-md p-4 mb-6 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">বড় প্যাকেজ</h3>
                <p className="text-sm text-gray-600">এই প্যাকেজটি জেলা এবং উপজেলার সব ম্যাপ সংরক্ষণের জন্য।</p>
              </div>
            </div>
            <div className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">অতিরিক্ত তথ্য</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>সকল তথ্য ব্যবহারযোগ্য নয়।</li>
            <li>প্যাকেজ কিনতে সমস্যা হলে আমাদের সাপোর্ট টিকেট করে যোগাযোগ করুন।</li>
            <li>দাম পরিবর্তনের বিষয়টি পরিবর্তিত হতে, ব্যবহারকারীদের পূর্ব জানানো হবে।</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="flex justify-center py-6">
          <div className="text-red-500">•</div>
        </div>
      </div>
    </div>
    );
}

export default Packege;
