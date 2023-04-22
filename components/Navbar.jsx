import React from "react";
import Link from "next/link";
export default function Navbar({ login, signup }) {
  return (
    <div className="flex text-slate-300 justify-between items-center">
      <div className="ml-4 m-2 p-2">
        <h3 className=" text-black ">Tripez</h3>
      </div>
      <div className="m-2 p-2 mr-4">
        {login && (
          <button className="border-black border-0 rounded-lg p-2  transition-all px-6 text-sm text-black shadow-2xl bg-slate-400">
            <Link href="/auth/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
}
