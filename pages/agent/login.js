import Link from "next/link";

export default function login() {
  return (
    <div className="w-screen h-screen bg-img flex items-center justify-center">
      
    <div className="w-1/3 border-2 rounded-lg backdrop-blur-[2px]">
      <div className="text-white p-4 text-xl font-semibold">
        <h1 className="text-center text-2xl my-2">Hello Welcome to TRIPEZ</h1>
        <p className="font-normal text-center">Don't have a Account ?<Link href='/agent/signup' className="underline m-2">Sign Up</Link>For Free</p>
        <form className="">

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium' htmlFor="name">Name</label>
          <input
            id="name"
            className='border rounded-lg p-2 text-black'
            type='text'
          />
        </div>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium' htmlFor="email">Email Address</label>
          <input
            id="email"
            className='border rounded-lg p-2 text-black'
            type='email'
          />
        </div>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium' htmlFor="password">Password</label>
          <input
            id="password"
            className='border rounded-lg p-2 text-black'
            type='password'
          />
        </div>

        <div className='flex flex-col py-2'>
        <button  className='border rounded-lg border-white bg-cyan-600 hover:bg-cyan-500 w-full p-4 my-2 text-white'>
          Login
        </button>
        </div>
      </form>
  
      </div>
    </div>
  </div>
  )
}
