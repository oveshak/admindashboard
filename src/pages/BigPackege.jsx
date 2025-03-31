import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const BigPackege = () => {
   const navigate=useNavigate()
    
    return (
      <div className="bg-gray-100 min-h-screen">



<div className="bg-teal-50 p-4 flex items-center ">
          <Link to="/packege" className='flex'>
          <button className="text-gray-600 mr-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button></Link>
          <h1 className="text-xl font-medium">বড় প্যাকেজ</h1>
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
            {/* ১টি উপজেলা Map Package */}
            <div className="bg-teal-50 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-medium mb-7">১টি উপজেলা</h2>
              {/* <p className="text-green-600 font-medium mb-2"></p> */}
              <p className="text-gray-600 text-sm mb-6">একটি উপজেলা নিকুঞ্জ অফারটির মূল্য।</p>
              <div className="flex justify-end">
              <button 
                className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded-md text-sm hover:bg-green-600 transition"
               onClick={()=>navigate('/upazila')}
              >
                ক্রয় করুন
              </button>
              </div>
            </div>
            
            {/* ১টি জেলা Map Package */}
            <div className="bg-teal-50 rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-medium mb-7">১টি জেলা</h2>
             
              <p className="text-gray-600 text-sm mb-6">একটি জেলার সকল স্থান সমগ্রী মূল্য।</p>
              <div className="flex justify-end">
              <button 
                className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition"
                onClick={()=>navigate('/zila')}
              >
                ক্রয় করুন
              </button>
              </div>
            </div>
          </div>
          
          {/*১টি ডিভিশন Map Package - Full Width */}
          <div className="bg-teal-50 rounded-lg p-4 shadow-sm mb-4">
          <h2 className="text-lg font-medium mb-7">১টি জরিপ</h2>
             
             <p className="text-gray-600 text-sm mb-6">১ টি ডিভিশনের ১ টি জিলার সকল স্থান। ( যেমন: শ্রীপুর BS )</p>
            <div className="flex justify-end">
            <button 
                className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition"
                onClick={()=>navigate('/bs')}
              >
                ক্রয় করুন
              </button>
            </div>
          </div>
        </div>



     

    

     
    </div>
    );
}

export default BigPackege;
