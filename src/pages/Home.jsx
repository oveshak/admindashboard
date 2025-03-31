import React, { useState, useEffect } from 'react';

const Home = () => {
 // State for each selection
 const [selectedDivision, setSelectedDivision] = useState('');
 const [selectedDistrict, setSelectedDistrict] = useState('');
 const [selectedUpazila, setSelectedUpazila] = useState('');
 const [selectedSurveyType, setSelectedSurveyType] = useState('');
 const [searchType, setSearchType] = useState('newList'); // 'newList' or 'jlNumber'
 const [selectedMouza, setSelectedMouza] = useState('');
 const [jlNumber, setJLNumber] = useState('');

 // Mock data (would come from API in real application)
 const divisions = [
   { id: 1, name: 'বরিশাল' },
   { id: 2, name: 'চট্টগ্রাম' },
   { id: 3, name: 'ঢাকা' },
   { id: 4, name: 'খুলনা' },
   { id: 5, name: 'রাজশাহী' },
   { id: 6, name: 'রংপুর' },
   { id: 7, name: 'সিলেট' }
 ];

 // Mock data for districts, upazilas, surveys, and mouzas
 const [districts, setDistricts] = useState([]);
 const [upazilas, setUpazilas] = useState([]);
 const [surveyTypes, setSurveyTypes] = useState([]);
 const [mouzas, setMouzas] = useState([]);

 // Effect to fetch districts when division is selected
 useEffect(() => {
   if (selectedDivision) {
     // This would be an API call in a real application
     setDistricts([
       { id: 1, name: `${selectedDivision} জেলা 1` },
       { id: 2, name: `${selectedDivision} জেলা 2` },
       { id: 3, name: `${selectedDivision} জেলা 3` },
     ]);
     // Reset subsequent selections
     setSelectedDistrict('');
     setSelectedUpazila('');
     setSelectedSurveyType('');
     setSelectedMouza('');
     setUpazilas([]);
     setSurveyTypes([]);
     setMouzas([]);
   }
 }, [selectedDivision]);

 // Effect to fetch upazilas when district is selected
 useEffect(() => {
   if (selectedDistrict) {
     setUpazilas([
       { id: 1, name: `${selectedDistrict} উপজেলা 1` },
       { id: 2, name: `${selectedDistrict} উপজেলা 2` },
       { id: 3, name: `${selectedDistrict} উপজেলা 3` },
     ]);
     // Reset subsequent selections
     setSelectedUpazila('');
     setSelectedSurveyType('');
     setSelectedMouza('');
     setSurveyTypes([]);
     setMouzas([]);
   }
 }, [selectedDistrict]);

 // Effect to fetch survey types when upazila is selected
 useEffect(() => {
   if (selectedUpazila) {
     setSurveyTypes([
       { id: 1, name: 'এসএ জরিপ' },
       { id: 2, name: 'আরএস জরিপ' },
       { id: 3, name: 'বিএস জরিপ' },
     ]);
     // Reset subsequent selections
     setSelectedSurveyType('');
     setSelectedMouza('');
     setMouzas([]);
   }
 }, [selectedUpazila]);

 // Effect to fetch mouzas when survey type is selected
 useEffect(() => {
   if (selectedSurveyType) {
     setMouzas([
       { id: 1, name: `${selectedSurveyType} মৌজা 1` },
       { id: 2, name: `${selectedSurveyType} মৌজা 2` },
       { id: 3, name: `${selectedSurveyType} মৌজা 3` },
     ]);
     // Reset mouza selection
     setSelectedMouza('');
   }
 }, [selectedSurveyType]);

 // Handle radio button change
 const handleSearchTypeChange = (type) => {
   setSearchType(type);
 };

 return (
   <div className="w-full max-w-4xl mx-auto p-4">
       <h1 className="text-center text-2xl md:text-3xl font-bold text-green-600 mb-6">সার্ভে খাতিয়ান অনুসন্ধান</h1>
     
     <div className="space-y-4">
       {/* Division */}
       <div className="flex flex-col">
         <label className="mb-1 text-sm font-medium">
           বিভাগ <span className="text-red-500">*</span>
         </label>
         <div className="relative">
           <select 
             className="w-full p-3 border rounded appearance-none bg-white pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
             value={selectedDivision}
             onChange={(e) => setSelectedDivision(e.target.value)}
           >
             <option value="">বিভাগ নির্বাচন করুন</option>
             {divisions.map((division) => (
               <option key={division.id} value={division.name}>
                 {division.name}
               </option>
             ))}
           </select>
           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
             </svg>
           </div>
         </div>
       </div>

       {/* District */}
       <div className="flex flex-col">
         <label className="mb-1 text-sm font-medium">
           জেলা <span className="text-red-500">*</span>
         </label>
         <div className="relative">
           <select 
             className="w-full p-3 border rounded appearance-none bg-white pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
             value={selectedDistrict}
             onChange={(e) => setSelectedDistrict(e.target.value)}
             disabled={!selectedDivision}
           >
             <option value="">জেলা নির্বাচন করুন</option>
             {districts.map((district) => (
               <option key={district.id} value={district.name}>
                 {district.name}
               </option>
             ))}
           </select>
           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
             </svg>
           </div>
         </div>
       </div>

       {/* Upazila */}
       <div className="flex flex-col">
         <label className="mb-1 text-sm font-medium">
           উপজেলা <span className="text-red-500">*</span>
         </label>
         <div className="relative">
           <select 
             className="w-full p-3 border rounded appearance-none bg-white pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
             value={selectedUpazila}
             onChange={(e) => setSelectedUpazila(e.target.value)}
             disabled={!selectedDistrict}
           >
             <option value="">উপজেলা নির্বাচন করুন</option>
             {upazilas.map((upazila) => (
               <option key={upazila.id} value={upazila.name}>
                 {upazila.name}
               </option>
             ))}
           </select>
           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
             </svg>
           </div>
         </div>
       </div>

       {/* Survey Type */}
       <div className="flex flex-col">
         <label className="mb-1 text-sm font-medium">
           জরিপের ধরণ <span className="text-red-500">*</span>
         </label>
         <div className="relative">
           <select 
             className="w-full p-3 border rounded appearance-none bg-white pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
             value={selectedSurveyType}
             onChange={(e) => setSelectedSurveyType(e.target.value)}
             disabled={!selectedUpazila}
           >
             <option value="">জরিপের ধরণ নির্বাচন করুন</option>
             {surveyTypes.map((surveyType) => (
               <option key={surveyType.id} value={surveyType.name}>
                 {surveyType.name}
               </option>
             ))}
           </select>
           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
             </svg>
           </div>
         </div>
       </div>

       {/* Radio Buttons */}
       <div className="flex justify-center space-x-8 my-4">
         <label className="inline-flex items-center">
           <input
             type="radio"
             className="form-radio h-5 w-5 text-green-600"
             name="search-type"
             checked={searchType === 'newList'}
             onChange={() => handleSearchTypeChange('newList')}
           />
           <span className="ml-2">মুতুন লিস্ট</span>
         </label>
         <label className="inline-flex items-center">
           <input
             type="radio"
             className="form-radio h-5 w-5 text-green-600"
             name="search-type"
             checked={searchType === 'jlNumber'}
             onChange={() => handleSearchTypeChange('jlNumber')}
           />
           <span className="ml-2">জে এল নাম্বার</span>
         </label>
       </div>

       {/* Mouza Selection or JL Number */}
       <div className="flex flex-col">
         <label className="mb-1 text-sm font-medium">
           মৌজা ম্যাপ <span className="text-red-500">*</span>
         </label>
         {searchType === 'newList' ? (
           <div className="relative">
             <select 
               className="w-full p-3 border rounded appearance-none bg-white pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
               value={selectedMouza}
               onChange={(e) => setSelectedMouza(e.target.value)}
               disabled={!selectedSurveyType}
             >
               <option value="">মৌজা নির্বাচন করুন</option>
               {mouzas.map((mouza) => (
                 <option key={mouza.id} value={mouza.name}>
                   {mouza.name}
                 </option>
               ))}
             </select>
             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
               </svg>
             </div>
           </div>
         ) : (
           <input
             type="text"
             className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
             value={jlNumber}
             onChange={(e) => setJLNumber(e.target.value)}
             placeholder="জে এল নাম্বার লিখুন"
           />
         )}
       </div>

       {/* Search Button */}
       <div className="mt-6">
         <button 
           className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition duration-200"
         >
           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
           </svg>
           অনুসন্ধান
         </button>
       </div>
     </div>
   </div>
  );
};


export default Home;


  // State for each selection
//   const [selectedDivision, setSelectedDivision] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [selectedUpazila, setSelectedUpazila] = useState('');
//   const [selectedSurvey, setSelectedSurvey] = useState('');
//   const [searchType, setSearchType] = useState({
//     byMouza: false,
//     byJLNo: false
//   });
//   const [jlNumber, setJLNumber] = useState('');

//   // Mock data (would come from API in real application)
//   const divisions = [
//     { id: 1, name: 'বরিশাল' },
//     { id: 2, name: 'চট্টগ্রাম' },
//     { id: 3, name: 'ঢাকা' },
//     { id: 4, name: 'খুলনা' },
//     { id: 5, name: 'রাজশাহী' },
//     { id: 6, name: 'রংপুর' },
//     { id: 7, name: 'সিলেট' }
//   ];

//   // Mock data for districts, upazilas, surveys, and mouzas
//   const [districts, setDistricts] = useState([]);
//   const [upazilas, setUpazilas] = useState([]);
//   const [surveys, setSurveys] = useState([]);
//   const [mouzas, setMouzas] = useState([]);

//   // Effect to fetch districts when division is selected
//   useEffect(() => {
//     if (selectedDivision) {
//       // This would be an API call in a real application
//       setDistricts([
//         { id: 1, name: `${selectedDivision} জেলা 1` },
//         { id: 2, name: `${selectedDivision} জেলা 2` },
//         { id: 3, name: `${selectedDivision} জেলা 3` },
//       ]);
//       // Reset subsequent selections
//       setSelectedDistrict('');
//       setSelectedUpazila('');
//       setSelectedSurvey('');
//       setUpazilas([]);
//       setSurveys([]);
//       setMouzas([]);
//     }
//   }, [selectedDivision]);

//   // Effect to fetch upazilas when district is selected
//   useEffect(() => {
//     if (selectedDistrict) {
//       setUpazilas([
//         { id: 1, name: `${selectedDistrict} উপজেলা 1` },
//         { id: 2, name: `${selectedDistrict} উপজেলা 2` },
//         { id: 3, name: `${selectedDistrict} উপজেলা 3` },
//       ]);
//       // Reset subsequent selections
//       setSelectedUpazila('');
//       setSelectedSurvey('');
//       setSurveys([]);
//       setMouzas([]);
//     }
//   }, [selectedDistrict]);

//   // Effect to fetch surveys when upazila is selected
//   useEffect(() => {
//     if (selectedUpazila) {
//       setSurveys([
//         { id: 1, name: 'এসএ জরিপ' },
//         { id: 2, name: 'আরএস জরিপ' },
//         { id: 3, name: 'বিএস জরিপ' },
//       ]);
//       // Reset subsequent selections
//       setSelectedSurvey('');
//       setMouzas([]);
//     }
//   }, [selectedUpazila]);

//   // Effect to fetch mouzas when survey is selected
//   useEffect(() => {
//     if (selectedSurvey) {
//       setMouzas([
//         { id: 1, name: `${selectedSurvey} মৌজা 1` },
//         { id: 2, name: `${selectedSurvey} মৌজা 2` },
//         { id: 3, name: `${selectedSurvey} মৌজা 3` },
//       ]);
//     }
//   }, [selectedSurvey]);

//   // Handle checkbox changes
//   const handleCheckboxChange = (type) => {
//     if (type === 'mouza') {
//       setSearchType({ byMouza: true, byJLNo: false });
//     } else if (type === 'jlno') {
//       setSearchType({ byMouza: false, byJLNo: true });
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <h1 className="text-center text-2xl md:text-3xl font-bold text-green-600 mb-6">সার্ভে খাতিয়ান অনুসন্ধান</h1>
      
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-6 border">
//           {/* Header row */}
//           <div className="bg-green-50 p-3 border font-medium text-center">বিভাগ</div>
//           <div className="bg-green-50 p-3 border font-medium text-center">জেলা</div>
//           <div className="bg-green-50 p-3 border font-medium text-center">উপজেলা</div>
//           <div className="bg-green-50 p-3 border font-medium text-center">জরিপের ধরণ</div>
//           <div className="bg-green-50 p-3 border font-medium text-center">মৌজা</div>
//           <div className="bg-green-50 p-3 border font-medium text-center">জরিপের তালিকা</div>
//         </div>

//         {/* Data rows */}
//         <div className="grid grid-cols-1 md:grid-cols-6">
//           {/* Division selection */}
//           <div className="border overflow-y-auto h-64">
//             {divisions.map((division) => (
//               <div 
//                 key={division.id} 
//                 className={`p-2 border-b cursor-pointer hover:bg-gray-100 ${selectedDivision === division.name ? 'bg-green-100' : ''}`}
//                 onClick={() => setSelectedDivision(division.name)}
//               >
//                 {division.name}
//               </div>
//             ))}
//           </div>

//           {/* District selection */}
//           <div className="border overflow-y-auto h-64">
//             {districts.map((district) => (
//               <div 
//                 key={district.id} 
//                 className={`p-2 border-b cursor-pointer hover:bg-gray-100 ${selectedDistrict === district.name ? 'bg-green-100' : ''}`}
//                 onClick={() => setSelectedDistrict(district.name)}
//               >
//                 {district.name}
//               </div>
//             ))}
//           </div>

//           {/* Upazila selection */}
//           <div className="border overflow-y-auto h-64">
//             {upazilas.map((upazila) => (
//               <div 
//                 key={upazila.id} 
//                 className={`p-2 border-b cursor-pointer hover:bg-gray-100 ${selectedUpazila === upazila.name ? 'bg-green-100' : ''}`}
//                 onClick={() => setSelectedUpazila(upazila.name)}
//               >
//                 {upazila.name}
//               </div>
//             ))}
//           </div>

//           {/* Survey type selection */}
//           <div className="border overflow-y-auto h-64">
//             {surveys.map((survey) => (
//               <div 
//                 key={survey.id} 
//                 className={`p-2 border-b cursor-pointer hover:bg-gray-100 ${selectedSurvey === survey.name ? 'bg-green-100' : ''}`}
//                 onClick={() => setSelectedSurvey(survey.name)}
//               >
//                 {survey.name}
//               </div>
//             ))}
//           </div>

//           {/* Mouza selection */}
//           <div className="border p-2 h-64">
//             <div className="mb-2">
//               <label className="inline-flex items-center">
//                 <input 
//                   type="checkbox" 
//                   className="form-checkbox h-5 w-5 text-green-600" 
//                   checked={searchType.byMouza}
//                   onChange={() => handleCheckboxChange('mouza')}
//                 />
//                 <span className="ml-2">অনুসন্ধান</span>
//               </label>
//             </div>

//             {searchType.byMouza && (
//               <div className="overflow-y-auto h-48">
//                 {mouzas.map((mouza) => (
//                   <div 
//                     key={mouza.id} 
//                     className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                   >
//                     {mouza.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* JL No input/search */}
//           <div className="border p-2 h-64">
//             <div className="mb-2">
//               <label className="inline-flex items-center">
//                 <input 
//                   type="checkbox" 
//                   className="form-checkbox h-5 w-5 text-green-600" 
//                   checked={searchType.byJLNo}
//                   onChange={() => handleCheckboxChange('jlno')}
//                 />
//                 <span className="ml-2">জেএল নং</span>
//               </label>
//             </div>

//             {searchType.byJLNo && (
//               <div>
//                 <input
//                   type="text"
//                   className="border p-2 w-full mb-2"
//                   value={jlNumber}
//                   onChange={(e) => setJLNumber(e.target.value)}
//                   placeholder="জেএল নম্বর লিখুন"
//                 />
//                 <button 
//                   className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700 w-full"
//                 >
//                   খুঁজুন
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 text-center">
//         <button 
//           className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700"
//         >
//           অধিকতর অনুসন্ধান
//         </button>
//       </div>

//       <div className="mt-4 text-right text-red-600">
//         জেএল নং এবং মালিকের নাম দিয়ে খতিয়ান অনুসন্ধান
//       </div>
//     </div>
