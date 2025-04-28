// pages/Courses/[id].js
'use client'
import {  useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



export default function page({params,searchParams}) {
  const router = useRouter();
  const data=useParams(params)
 


  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (data.id) {
      console.log(data);
      
      fetch(`http://127.0.0.1:8000/api/courses/${data.id}/`)
        .then(res => res.json())
        .then(data => setCourse(data))
        .catch(err => console.error('Error loading course:', err));
    }
  }, [data.id]);

  if (!course) return <p>Loading...</p>;


  const handleJoin = () => {
    router.push(`/CardShop/${course.id}`);
  };




  return (
    <div className='w-[70vw] mx-auto mt-16 flex justify-between'>

    <div>
    <h1>{course.title}</h1>
    <p>{course.description}</p>
    <p>{course.salary}</p>
    <button className='bg-blue-600 px-5 py-2 text-white cursor-pointer mt-7' onClick={handleJoin}>join for free</button>

    </div>
    <img src={course.image} alt="" className='w-[300px] h-[300px] '/>
      {/* Show other properties if available */}
     
    </div>
  );
}
