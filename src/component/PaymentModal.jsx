export const PaymentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="p-6">
            {/* Payment Options */}
            <div className="space-y-4">
              {/* Auto Bkash Payment Option */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 6V12C4 15.31 7.58 18.5 12 20C16.42 18.5 20 15.31 20 12V6L12 2Z" fill="#E2136E" />
                      <path d="M10.24 8.56L8.04 10.76L7.2 9.92L6.4 10.72L8.04 12.36L11.04 9.36L10.24 8.56Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Auto বিকাশ পেমেন্ট</h3>
                    <p className="text-xs text-gray-500">recommended</p>
                  </div>
                </div>
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Manual Send Money Option */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 6V12C4 15.31 7.58 18.5 12 20C16.42 18.5 20 15.31 20 12V6L12 2Z" fill="#E2136E" />
                      <path d="M10.24 8.56L8.04 10.76L7.2 9.92L6.4 10.72L8.04 12.36L11.04 9.36L10.24 8.56Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">ম্যানুয়াল Send Money</h3>
                  </div>
                </div>
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Cancel Button */}
            <div className="mt-6">
              <button 
                onClick={onClose}
                className="w-full bg-red-500 text-white py-2 px-4 rounded-md flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                বাতিল করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };