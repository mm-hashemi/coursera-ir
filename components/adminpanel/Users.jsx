import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users/') // your backend API URL
          .then(res => res.json())
          .then(data => setUsers(data))
          .catch(err => console.error('Failed to fetch users:', err));
      }, []);
    console.log(users);
    
  return (
    
    <div className='flex justify-center items-center py-28'>
        <div className='w-[800px] h-48 bg-white rounded-2xl '>
        <table className="min-w-full bg-white border border-gray-300">
  <thead>
    <tr className="bg-gray-100 text-gray-700 text-left">
      <th className="py-2 px-4 border-b">ID</th>
      <th className="py-2 px-4 border-b">Name</th>
      <th className="py-2 px-4 border-b">Email</th>
      <th className="py-2 px-4 border-b">Role</th>
      <th className="py-2 px-4 border-b">Status</th>
      {/* <th className="py-2 px-4 border-b">Created At</th> */}
      <th className="py-2 px-4 border-b">Courses</th>
    </tr>
  </thead>
  <tbody>
     {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className={`py-2 px-4 border-b ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                  {user.status}
                </td>
                {/* <td className="py-2 px-4 border-b">{user.created_at}</td> */}
                <td className="py-2 px-4 border-b">{user.enrolled_courses} courses</td>
              </tr>
            ))}
    </tbody>
    </table>
        </div>



    </div>
  )
}
