'use client'

import React, { useEffect, useState } from 'react'

export default function Sliders() {
  const [bannerUrl, setBannerUrl] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hero-banner/')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
         
          setBannerUrl(data[0].banner);
        }
      })
      .catch(err => console.error(err));
  }, []);
console.log(bannerUrl);

  return (
    <section className="relative w-full h-[400px] flex items-center ">
      {/* Background Image */}
      {bannerUrl && (
        <img 
          src={bannerUrl} 
          alt="Hero banner"
          className="absolute w-full h-full object-cover"
        />
      )}
    
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-[700px] px-28 text-white"> 
        <h2 className="text-3xl font-bold mb-2">Say hello to learning in German</h2>
        <p className="text-lg mb-4">
          Learn seamlessly with 100+ smoothly dubbed courses from IBM, Microsoft, and DeepLearning.AI.
        </p>
        <button 
          className="bg-white rounded-2xl text-blue-700 px-5 py-3 font-medium hover:bg-blue-50 transition-colors"
        >
          Explore Now
        </button>
      </div>
    </section>
  )
}
