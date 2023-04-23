import Link from 'next/link'
import React from 'react'

const Partner = () => {
  return (
   <>
   
   <div className="h-screen flex justify-center items-center gap-5">

    <Link className='px-10 py-2 border rounded-md' href={'/partner/trips'}>Trips</Link>
    <Link className='px-10 py-2 border rounded-md' href={'/partner/enquries'}>Enquries</Link>

   </div>
   
   </>
  )
}

export default Partner