import React from 'react'

export default function LoginModal({handleLogin}) {
  return (
    <div>
<div className='w-[100vw] h-full fixed right-0 left-0 top-0 bg-black/55'>
  <div className='w-[550px] mx-auto mt-60 bg-zinc-300 py-10 rounded-2xl shadow-2xl shadow-zinc-400 flex flex-col justify-center items-center relative'>
  <div onClick={handleLogin} className='absolute right-4 top-4 cursor-pointer'><i className='bx bx-x'></i></div>
    <h4 className='text-3xl font-bold'>Welcome Back!</h4>
<form action="">

<div className='flex flex-col justify-center items-start text-xl gap-2 py-10'>

    <label htmlFor="">Email</label>
    <input type="email" name='email' className='bg-zinc-50'/>

    <label htmlFor="">Password</label>
    <input type="password" name='password' className='bg-zinc-50'/>

    <a href="#" className='underline text-blue-500'>Forgot Password?</a>

</div>

    </form>

  </div>
</div>






    </div>
  )
}
