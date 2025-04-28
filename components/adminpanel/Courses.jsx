'use client'
import React, { useEffect, useState } from 'react'

export default function CoursesAdmin() {
const [list,setList]=useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/courses/') // your backend API URL
          .then(res => res.json())
          .then(data => setList(data))
          .catch(err => console.error('Failed to fetch users:', err));
      }, []);
    console.log(list);
    
    
  return (
    
    <div className="flex justify-center items-center py-28">
    <div className="w-[800px] min-h-48 bg-white rounded-2xl overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Students</th>

           
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{course.id}</td>
                <td className="py-2 px-4 border-b">{course.title}</td>
                <td className="py-2 px-4 border-b">{course.students_count}</td>
               
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 text-center text-gray-400">
                No courses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  )
}
