'use client'
import React, { useContext, useState } from 'react'
import {  UserIdContext } from './header';
import {  useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { AuthContext } from '@/app/CardShop/[courseId]/page';
export default function LoginModal({handleLogin,setStatus}) {
  
    const router=useRouter()
    // const { setStatus } = useContext(AuthContext);
    const { setUserId } = useContext(UserIdContext);
    // const { setStateBuy } = useContext(AuthContext);

    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

   

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleModal=()=>{
      handleLogin();
      setStatus(true);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        const text = await res.text();
        
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error('Invalid JSON response from server');
        }
  
        if (res.ok) {
          // ✅ Save tokens in localStorage
          localStorage.setItem('access', data.access);
          localStorage.setItem('refresh', data.refresh);
          const accessToken = data.access;
          const decodedToken = jwtDecode(accessToken);
          console.log(decodedToken);
           // Decode the JWT
          const userId = decodedToken.user_id; 
          const userEmail = decodedToken.email;// Extract user ID
          setMessage('Login successful!');
          // Optionally close the modal
          handleModal();
          setUserId(userId);
          if (decodedToken.role === 'Admin') {
            router.push('/admin/');
          } else {
           
            router.push(`/${userId}`); 
          }
      

        } else {
          setMessage(data?.error || 'Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setMessage('Server error. Try again later.');
      }
    };
  





  return ( 
    <div>
<div className='w-[100vw] h-full fixed right-0 left-0 top-0 bg-black/55'>
  <div className='w-[550px] mx-auto mt-60 bg-zinc-300 py-10 rounded-2xl shadow-2xl shadow-zinc-400 flex flex-col justify-center items-center relative'>
  <div onClick={handleLogin} className='absolute right-4 top-4 cursor-pointer'><i className='bx bx-x'></i></div>
    <h4 className='text-3xl font-bold'>Welcome Back!</h4>
    {message && <p className='mt-4 text-red-600'>{message}</p>}
<form onSubmit={handleSubmit}>

<div className='flex flex-col justify-center items-start text-xl gap-2 py-10'>

    <label htmlFor="">Email</label>
    <input type="email" name='email' className='bg-zinc-50'
    value={form.email}
    onChange={handleChange}
    />

    <label htmlFor="">Password</label>
    <input type="password" name='password' className='bg-zinc-50'
     value={form.password}
     onChange={handleChange}
    />

    <a href="#" className='underline text-blue-500'>Forgot Password?</a>

</div>
<button
              type="submit"
              className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
            >
              Login
            </button>
    </form>

  </div>
</div>






    </div>
  )
}
