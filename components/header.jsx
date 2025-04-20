import React from 'react'

export default function Headers() {
  return (
    <div className='flex justify-between items-center w-full mx-auto px-20 py-8 sticky z-50 bg-zinc-100 '>
        <nav className='flex gap-4 items-center'>
        <div>
            <img src="/assets/images/Coursera.png" alt="" className='w-50'/>
        </div>
        <button 
            className="flex items-center gap-2 bg-blue-700 rounded-2xl px-4 py-2 text-white hover:bg-blue-800 transition-colors"
            aria-label="Explore courses"
          >
            <span>Explore</span>
            <i className='bx bx-chevron-down text-xl'></i>
          </button>
          {/* search-bar */}
          <form role="search" className="hidden md:block">
            <div className="relative">
              <input 
                type="search" 
                placeholder="What do you want to learn?" 
                className="w-full md:w-80 lg:w-96 px-4 py-2 border-2 border-zinc-300 rounded-full focus:outline-none focus:border-blue-500 text-lg"
                aria-label="Search courses"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1/2 w-10 -translate-y-1/2 bg-blue-700 rounded-full text-white p-2 hover:bg-blue-800 transition-colors"
                aria-label="Submit search"
              >
                <i className='bx bx-search-alt-2 text-xl'></i>
              </button>
            </div>
          </form>

        </nav>
        {/* right items */}
        <div className="flex items-center gap-3 md:gap-5">
          <a 
            href="#" 
            className="text-blue-700 hover:underline px-2 py-1"
          >
            Log In
          </a>
          <button 
            className="bg-blue-700 rounded-2xl px-4 py-2 text-white hover:bg-blue-800 transition-colors"
          >
            Join for Free
          </button>
        </div>
    </div>
  )
}
