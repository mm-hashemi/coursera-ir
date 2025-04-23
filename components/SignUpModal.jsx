'use client'
import React, { useState } from 'react'

export default function SignUpModal({handleModal}) {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await fetch('http://localhost:8000/api/signup/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          });
        
          const text = await res.text();  // get raw response
          console.log(text);              // see what came back
          const data = JSON.parse(text);  // try parsing manually
    
          if (res.ok) {
            setMessage('Sign-up successful!');
            // Optionally close modal or redirect user
            // handleModal();
          } else {
            setMessage(data.error || 'Something went wrong!');
          }
        } catch (error) {
          console.error('Error during sign-up:', error);
          setMessage('Server error. Please try again.');
        }
      };


  return (
    <div>
<div className='w-[100vw] h-full fixed right-0 left-0 top-0 bg-black/55'>
  <div className='w-[550px] mx-auto mt-60 bg-zinc-300 py-10 rounded-2xl shadow-2xl shadow-zinc-400 flex flex-col justify-center items-center relative'>
      <div onClick={handleModal} className='absolute right-4 top-4 cursor-pointer'><i className='bx bx-x'></i></div>
    <h4 className='text-3xl font-bold'>Sign Up</h4>
    {message && <p className='mt-4 text-red-600'>{message}</p>}
<form onSubmit={handleSubmit}>

<div className='flex flex-col justify-center items-start text-xl gap-2 py-10'>

    <label htmlFor="">Email</label>
    <input type="email" name='email' className='bg-zinc-50' 
    value={form.email}
    onChange={handleChange}
    required
    />

    <label htmlFor="">Password</label>
    <input type="password" name='password' className='bg-zinc-50' 
    value={form.password}
    onChange={handleChange} 
    required
    />

    <a href="#" className='underline text-blue-500'>Forgot Password?</a>



    <button
              type="submit"
              className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
            >
              Sign Up
            </button>
</div>

    </form>

  </div>
</div>






    </div>
  )
}
