'use client'
import Headers from '@/components/header';
import LoginModal from '@/components/LoginModal';
import SignUpModal from '@/components/SignUpModal';
import { useParams, useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';


const BuyCourseButton = ({ params,searchParams }) => {
  const [message, setMessage] = useState('');
  const accessToken = localStorage.getItem("access");
      const router=useRouter()
      const { id } = useParams();  // مثلا id دوره از URL
  
      const handleBuyCourse = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/courses/1/buy/`, {
                method: "POST",
                headers: {
                  "Authorization": `Bearer ${accessToken}`,
                  "Content-Type": "application/json",
                },
            });
    console.log(response);
    
            // Check if response is okay (status code 200-299)
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }
    
            // Check if the response is in JSON format before parsing
            const contentType = response.headers.get("Content-Type");
            let dataRes = {};
    
            if (contentType && contentType.includes("application/json")) {
                dataRes = await response.json();
            } else {
                throw new Error("Response is not in JSON format.");
            }
    
            // Handle the success response
            setMessage(dataRes.message);
            console.log('Success:', dataRes.message);
            router.push('/'); // Redirect or handle the success further
        } catch (error) {
            console.error('Error:', error);
            setMessage(error.message || 'Network error.');
        }
    };
    
      
  return (
    <div>
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
  <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Product" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Product Title</div>
    <p className="text-gray-700 text-base">
      This is a short description of the product. It looks clean and concise.
    </p>
  </div>
  <div className="px-6 py-4 flex items-center justify-between">
    <span className="text-lg font-semibold text-green-600">$49.99</span>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" onClick={handleBuyCourse}>
      Buy Now
    </button>
  </div>
{}
</div>
      
{ <p className='mt-4 text-red-600'>{message}</p>}

 
</div>
  )}
export default BuyCourseButton;
