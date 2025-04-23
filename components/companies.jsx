'use client'
import React, { useEffect, useState } from 'react'

export default function Companies() {

 const [company,setCompany]=useState([]);

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/company/')
    .then(res=> res.json())
    .then(data=>{
      setCompany(data)
    } )
    .catch(err => {
      console.error('Error fetching roles:', err);
    });
  },[])

  return (
    <div className='flex flex-col items-center py-20 mt-9'>

        <h3 className='text-2xl text-center'>
         <a href="" className=''> We collaborate with <span className='text-blue-700'> 350+ leading universiteis and companies</span> </a>
        </h3>
        <div className='w-[900px] mx-auto flex gap-5'>
         {company.map(m=>(

           <img key={m.id} src={m.logoImage} alt="" />

         ))}
            
        </div>
    </div>
  )
}
