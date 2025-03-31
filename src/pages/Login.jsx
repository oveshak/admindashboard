import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (!email.trim()) {
      toast.error("অনুগ্রহ করে ইমেইল লিখুন!");
      return;
    }
  
    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("একটি বৈধ ইমেইল লিখুন!");
      return;
    }
  
    // Simulate OTP sending process
    toast.success("ওটিপি পাঠানো হয়েছে!");
    
    // Navigate to OTP verification page (pass email if needed)
    navigate("/otpverify", { state: { email: email.trim() } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="lg:bg-white p-8 lg:rounded-xl lg:shadow-xl w-full max-w-md text-center">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">আপনার ইমেইল লিখুন</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="আপনার ইমেইল লিখুন..."
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Send OTP Button */}
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          onClick={handleSendOTP}
        >
          Send OTP
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500 font-medium">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition shadow-sm">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="w-6 h-6 mr-3"
          />
          <span className="text-gray-700 font-medium">Login with Google</span>
        </button>

        {/* Privacy Policy & Disclaimer */}
        <p className="text-sm text-gray-500 mt-6">
          By logging in, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">Disclaimer</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
