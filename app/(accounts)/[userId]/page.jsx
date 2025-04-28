import React from 'react'

export default function page({params,searchParams}) {
 
  return (
    <div>
   <div className='flex justify-evenly mt-9'>
{/* left menu */}
<div className='relative w-[400px] h-[500px] bg-zinc-300 rounded-2xl flex flex-col justify-baseline py-20 items-center '>
<i className='bx bxs-pencil absolute right-4 top-4 cursor-pointer' ></i>
  <div className='rounded-full w-40 h-40 bg-zinc-500 cursor-pointer'>
  <img src="" alt="" />
  </div>
  <h4 className='text-2xl font-bold'>mahdi hashemi</h4>
</div>
{/* right boxes */}
<div className='w-[60vw] h-[100vh] bg-zinc-400 rounded-2xl flex justify-center items-start gap-7 py-7'>
<div className='flex flex-col gap-4'>
  
<div className='w-[600px] h-[400px] bg-zinc-50 rounded-2xl'>
  <form >

<div className='flex justify-center items-start text-xl gap-2 py-10'>
<div className='flex flex-col gap-2'>

<label htmlFor="">Full Name</label>
<input type="email" name='email' className='bg-zinc-50 border-2 border-zinc-500 rounded-2xl'/>

<label htmlFor="">Password</label>
<input type="password" name='password' className='bg-zinc-50 border-2 border-zinc-500 rounded-2xl'/>

<button type="submit" className='bg-blue-600 text-white px-4 py-2 mt-5 rounded-2xl hover:bg-blue-700' >
          save
        </button>
</div>
<div className='flex flex-col gap-2'>
  
<label htmlFor="">Email</label>
<input type="email" name='email' className='bg-zinc-50 border-2 border-zinc-500 rounded-2xl'/>

<label htmlFor="">Country</label>
<select name="" id="" className=' border-2 border-zinc-500 rounded-2xl'>
  <option value="">iran</option>
</select>

</div>
</div>

</form>

 
</div>
{/* courses */}
<div className='w-[600px] h-[200px] bg-zinc-50 rounded-2xl p-4'>
<h4 className='font-bold'> Courses</h4>

</div>

</div>

<div>
<div className='w-[300px] h-[400px] bg-zinc-50 rounded-2xl p-4'>
<h4 className='font-bold'> Degrees</h4>

</div>
</div>

</div>




   </div>
  

  </div>
  )
}
