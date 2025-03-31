import React, { useState, useEffect } from 'react';

function Header({
  sidebarOpen,
  setSidebarOpen,
  variant = 'default',
}) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Sample breaking news content
  const newsString = "এখন থেকে খতিয়ানের কিউ আর কোড সম্বলিত অনলাইন/তাৎক্ষনিক কপি ১০০ টাকার বিনিময়ে পাওয়া যাচ্ছে। এছাড়াও সার্টিফাইড/সত্যায়িত খতিয়ান এখন থেকে খতিয়ানের কিউ আর কোড সম্বলিত অনলাইন/তাৎক্ষনিক কপি ১০০ টাকার বিনিময়ে পাওয়া যাচ্ছে। এছাড়াও সার্টিফাইড/সত্যায়িত খতিয়ান কপি ১০০ টাকার বিনিময়ে পাওয়া যাচ্ছে।";

  return (
    <header className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 ${variant === 'v2' || variant === 'v3' ? 'before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10' : 'max-lg:shadow-xs lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90'} ${variant === 'v2' ? 'dark:before:bg-gray-800' : ''} ${variant === 'v3' ? 'dark:before:bg-gray-900' : ''}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 ${variant === 'v2' || variant === 'v3' ? '' : 'lg:border-b border-gray-200 dark:border-gray-700/60'}`}>
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Breaking News Ticker - Added to the right side */}
          <div 
            className="flex-1 mx-4 overflow-hidden"
            onMouseEnter={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center h-full">
              {/* <div className="font-bold bg-red-600 text-white px-2 py-1 rounded mr-2 text-sm whitespace-nowrap">
                ব্রেকিং নিউজ
              </div> */}
              <div className="overflow-hidden w-full">
                <div 
                  className={`whitespace-nowrap ${isPaused ? '' : 'ticker-slide'}`}
                >
                  <span className="inline-block text-red-600  text-right" dir="rtl">
                    {newsString}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/* Your existing right side content */}
          </div>
        </div>
      </div>

      {/* CSS for the sliding animation */}
      <style >{`
        @keyframes slide {
          0% {
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        .ticker-slide {
          display: inline-block;
          animation: slide 25s linear infinite;
        }
         
      `}</style>
    </header>
  );
}

export default Header;