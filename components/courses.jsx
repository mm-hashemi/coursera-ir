'use client'
import React, { useEffect, useState } from 'react'
// import roles_api from "@/lib/api";
import {  useRouter } from 'next/navigation';


export default function Courses() {
  const [Roles,setRoles]=useState([]);
  const router=useRouter()
  console.log(Roles);
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses/')
    .then(res => res.json())
    .then(data => {
      setRoles(data);
    })
    .catch(err => {
      console.error('Error fetching roles:', err);
    });
  
    
  }, []);
    
        const handleJoin= (index)=>{
          console.log(index);
          
          router.push(`/Courses/${index}`); 
          
          
        }




  return (
    <div>
    
    
    <div className='flex bg-zinc-300 w-[1400px] mx-auto gap-4 py-7 rounded-2xl'>
        <div className='flex flex-col justify-center items-start w-[200px] px-5'>
            <h3 className='text-2xl'>Choose your role</h3>
            <p>Gain the knowledge and skills you need to advance.</p>
            <button className='bg-blue-700 rounded-2xl px-3 py-2'>Explore all roles</button>
        </div>
       {/* c1*/}
       <ul className='flex gap-6'>
        {Roles && Roles.length > 0 &&  Roles.map(r=>(
            <li key={r.id}>


                <div className='w-[370px] rounded-2xl pb-7 bg-zinc-50 overflow-hidden'>
               
                  <div className='h-40 overflow-hidden'>
                  <img src={r.image} alt="" className=''/>
                  </div>
                <div className='px-5 flex flex-col gap-1'>

                <h3 className='text-2xl'><strong>{r.title}</strong></h3>
                <p className='overflow-hidden text-ellipsis line-clamp-3'>{r.description} </p>
                <p> <strong>if you like</strong>Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
                <p><strong>{r.salary} $ </strong>mdeia salary </p>
                <p><strong>1,260 </strong>job avaliable </p>
                <strong>credentails</strong>

                <div className='flex gap-3 items-center'>
                <a href=""><img src="/assets/images/Coursera.png" alt="" className='w-10' /></a><span className='text-blue-600'>Google Data Analytics</span>
                </div>
                

                <button className='bg-blue-600 px-5 py-2 cursor-pointer text-white' onClick={()=> handleJoin(r.id)}>join for free</button>
                </div>

            </div>







            </li>
        ))}
      




       </ul>
      
     
       
    </div>
    </div>

  )
}
