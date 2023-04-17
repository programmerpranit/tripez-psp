import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="ml-4 m-2 p-2">
        <h1 className="text-2xl font-semibold italic" >Tripez</h1>
      </div>
      <div className="flex space-x-4 m-2 p-2">
        <button> <Link href="/agent/login" >Login</Link> </button>
        <button><Link href="/agent/signup" >Sign-up</Link></button>
      </div>
    </div>
  )
}
