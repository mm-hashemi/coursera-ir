'use client'
import CoursesAdmin from '@/components/adminpanel/Courses'
import Dashboard from '@/components/adminpanel/Dashboard'
import Settings from '@/components/adminpanel/Settings'
import Users from '@/components/adminpanel/Users'
import ItemAdminPanel from '@/components/itemAdminPanel'
import React, { createContext, useState } from 'react'

export const panelActive=createContext()
export default function page() {
    const[isActive,setIsActive]=useState('Dashboard')

    const renderComponent = () => {
        switch (isActive) {
          case 'Dashboard':
            return <Dashboard />;
          case 'Users':
            return <Users />;
          case 'Courses':
            return <CoursesAdmin />;
          case 'Settings':
            return <Settings />;
          default:
            return <Dashboard />;
        }
      };



  return (
    <div>
        <div className='flex justify-evenly py-14'>
{/* left menu */}
<div className='w-[300px] bg-zinc-300  rounded-2xl flex flex-col justify-center items-center py-10'>
<div className='w-40 h-40 bg-zinc-600 rounded-full'>
    <img src="#" alt="" />
</div>
<h4 className='text-2xl'>admin</h4>


<div className='w-full text-xl flex flex-col gap-2 p-5'>

<panelActive.Provider value={{setIsActive}}>
<ItemAdminPanel title={'Dashboard'} />
<ItemAdminPanel title={'Users'} />
<ItemAdminPanel title={'Courses'} />
<ItemAdminPanel title={'Settings'} />
</panelActive.Provider>

</div>


</div>
{/* right items */}
<div className='w-[1000px] bg-zinc-300 rounded-2xl '>


{renderComponent()}






</div>




        </div>


    </div>
  )
}
