'use client'
import React, { useEffect, useState } from 'react'
// import roles_api from "@/lib/api";

export default function Courses() {
    const [Roles,setRoles]=useState([]);
    
       useEffect(() => {
          fetch('http://127.0.0.1:8000/api/roles/')
            .then(res => res.json())
            .then(data => {
              setRoles(data);
            })
            .catch(err => {
              console.error('Error fetching roles:', err);
            });
        }, []);
    
  return (
    <div>
    
    
    <div className='flex bg-zinc-300 w-[1400px] mx-auto gap-4 py-7 rounded-2xl'>
        <div className='flex flex-col justify-center items-start w-[200px] px-5'>
            <h3 className='text-2xl'>Choose your role</h3>
            <p>Gain the knowledge and skills you need to advance.</p>
            <button className='bg-blue-700 rounded-2xl px-3 py-2'>Explore all roles</button>
        </div>
       {/* c1*/}
       <ul>
        {Roles.map(r=>(
            <li key={r.id}>


                <div className='w-[370px] rounded-2xl bg-zinc-50 overflow-hidden'>
                <img src={r.image} alt="" className=''/>
                <div className='px-5'>

                <h3 className='text-2xl'><strong>{r.title}</strong></h3>
                <p>{r.description} </p><br />
                <p> <strong>if you like</strong>Lorem, ipsum dolor sit amet consectetur adipisicing. </p><br />
                <p><strong>{r.salary} $ </strong>mdeia salary </p>
                <p><strong>1,260 </strong>job avaliable </p><br />
                <strong>credentails</strong>

                 <a href=""><img src="/assets/images/Coursera.png" alt="" className='w-10' /></a><span className='text-blue-600'>Google Data Analytics</span>
                 <a href=""><img src="/assets/images/Coursera.png" alt="" className='w-10' /></a><span className='text-blue-600'>Google Data Analytics</span>

                </div>


            </div>







            </li>
        ))}
      




       </ul>
      
     
       
    </div>
    </div>

  )
}
