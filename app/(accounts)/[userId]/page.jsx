import React from 'react'

export default function page({params,searchParams}) {
  return (
    <div>
    <pre>{JSON.stringify({params,searchParams})}</pre>
  

  </div>
  )
}
