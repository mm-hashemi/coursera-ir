import Link from 'next/link'
import React, { useContext } from 'react'
import {panelActive} from '@/app/admin/page'

export default function ItemAdminPanel({title}) {
    const { setIsActive }=useContext(panelActive)
    const handleActive=(e)=>{
       setIsActive(title);
    }

  return (
    <>
    
    <Link href='#' className='hover:bg-blue-400 px-3 rounded-2xl' onClick={handleActive}> {title} </Link>
    
    </>
  )
}
