import React from 'react'

export default function Sliders() {
  return (
    <section className="relative w-full h-[400px] flex items-center ">
      {/* Background Image */}
      <img 
        src="/assets/images/banner.png" 
        alt="Learning in German banner" 
        className="absolute w-full h-full object-cover"
      />
      
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
