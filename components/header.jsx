'use client'

import React, { createContext, use, useContext, useEffect, useState } from 'react'
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/app/CardShop/[courseId]/page';
import Link from 'next/link';




export const UserIdContext = createContext();

export default function Headers({setStateBuy}) {
  const [showSignUp,setShowSignup]=useState(false);
  const [showLogin,setShowLogin]=useState(false);
  const [status,setStatus] = useState(false);
  const [userId,setUserId] = useState('')
    const [Roles,setRoles]=useState([]);
  
  const router=useRouter()
  

  const handleModal=()=>{
   setShowSignup(prev => !prev);
  }
  const handleLogin=()=>{
    setShowLogin(prev => !prev);
  }
 

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/roles/')
      .then(res => res.json())
      .then(data => {
        setRoles(data);
        console.log(Roles);
      })
      .catch(err => {
        console.error('Error fetching roles:', err);
      });
    
      
    }, []);
      

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // optionally redirect to home:
    window.location.href = '/';
  };







  return (
    <div className='flex justify-between items-center w-full mx-auto px-20 py-8 sticky z-50 bg-zinc-100 '>
        <nav className='flex gap-4 items-center'>
        <div>
            <img src="/assets/images/Coursera.png" alt="" className='w-50 cursor-pointer' onClick={()=>router.push('/')}/>
        </div>
        <button 
            className="flex items-center transition-all duration-700 delay-500 leading-40 h-12 gap-2 group relative bg-blue-700 rounded-2xl px-4  text-white hover:bg-blue-800 "
            aria-label="Explore courses"
          >
            <span>Explore</span>
            <i className='bx bx-chevron-down text-xl'></i>
            <ul className=' hidden grid-cols-2 w-[200px] h-36 bg-zinc-100 shadow-2xl shadow-black text-black items-start absolute top-16 left-0 group-hover:grid px-4 leading-10'>
            {Roles && Roles.length > 0 && Roles.map(r=>(

              <li key={r.id} className='hover:text-blue-500 '><Link href={`/Courses/${r.id}`}>{r.title}</Link></li>
            ))}
            </ul>
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
        {status ? (
          <div className='flex justify-center items-center gap-3 cursor-pointer relative h-14 duration-700 transition-all leading-10 group ' onClick={()=>router.push(`/${userId}`)}>
          <div className='w-14 h-14 bg-blue-500 rounded-full '></div>
          <div><i class='bx bx-chevron-down'></i></div>
          <div className='w-56 h-52 bg-zinc-100 shadow-2xl shadow-zinc-600 rounded-2xl hidden absolute top-[60px] right-0 group-hover:block p-8'>
            <ul>
              <li onClick={handleLogout}>Log out</li>
            </ul>
          </div>
           </div> 
        )
       
          : ( <a 
            href="#" 
            className="text-blue-700 hover:underline px-2 py-1"
           onClick={handleLogin} >
            Log In
          </a> 
        )}
         {status ? <div></div> :  <button 
            className="bg-blue-700 rounded-2xl px-4 py-2 text-white hover:bg-blue-800 transition-colors"
          onClick={handleModal} >
            Join for Free
          </button>  }

        </div>
        <UserIdContext value={{userId,setUserId}}>
     
       

        {showSignUp && <SignUpModal handleModal={handleModal} />}
        {showLogin && <LoginModal handleLogin={handleLogin} setStatus={setStatus}/>}

      
        </UserIdContext>
    </div>
  )
}
