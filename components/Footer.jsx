import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="flex justify-between m-2 p-2">
        <div>
            <h1 className="text-2xl italic font-semibold">Tripez</h1>
        </div>
        <div>
            <h2 className=""> <Link href="/about"> About Us</Link> </h2>
        </div>
      
    </div>
  )
}
