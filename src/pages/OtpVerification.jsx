import React, { useState, useRef, useEffect } from 'react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  useEffect(() => {
    // Focus on first input when component mounts
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, []);

  useEffect(() => {
    // Auto-hide notification after 3 seconds
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
  };
  
  const handleChange = (index, value) => {
    // Allow only digits
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto focus next input
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  
  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };
  
  const handleVerifyOtp = () => {
    const otpString = otp.join('');
    
    if (otpString.length !== 4) {
      showNotification("সঠিক ৪ ডিজিটের ওটিপি লিখুন!", "error");
      return;
    }
    
    showNotification("ওটিপি সফলভাবে যাচাই হয়েছে!", "success");
    
    // Handle verification success (redirect or authentication)
  };
  
  const handleResendOtp = () => {
    showNotification("নতুন ওটিপি পাঠানো হয়েছে!", "info");
    // Clear inputs
    setOtp(['', '', '', '']);
    inputRefs[0].current.focus();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md text-center">
        {/* Custom Notification */}
        {notification.show && (
          <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-md ${
            notification.type === 'success' ? 'bg-green-500 text-white' : 
            notification.type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
          }`}>
            {notification.message}
          </div>
        )}
        
        {/* OTP Title */}
        <h2 className="text-xl font-medium mb-4 text-gray-800">
          OTP <span className="text-red-500">*</span>
        </h2>
        
        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-16 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        
        {/* Message */}
        <p className="text-gray-600 text-sm mb-1">
          ইমেইলে otp কোড পাঠানো হয়েছে, সেটি লিখুন।
        </p>
        <p className="text-gray-600 text-sm mb-6">
          ইমেইল ভুল হয়েছে?
        </p>
        
        {/* Resend OTP Link */}
        <button 
          onClick={handleResendOtp}
          className="text-blue-500 hover:text-blue-700 text-sm font-medium mb-8"
        >
          পুনরায় otp পাঠান
        </button>
        
        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 mb-4">
          By logging in, you agree to our <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Disclaimer</a>.
        </p>
        
        {/* Continue Button */}
        <button
          onClick={handleVerifyOtp}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition mt-4"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;