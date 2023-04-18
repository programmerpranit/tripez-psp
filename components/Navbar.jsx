import React from "react";
import Link from "next/link";
export default function Navbar({ login, signup }) {
  return (
    <div className="flex text-slate-300 justify-between items-center">
      <div className="ml-4 m-2 p-2">
        <h1 className="text-2xl font-semibold italic">Tripez</h1>
      </div>
      <div className="flex space-x-4 m-2 p-2">
        {login && (
          <button className="border-black border-0 rounded-md p-2 text-black shadow-2xl bg-slate-200">
            {" "}
            <Link href="/auth/login">Login</Link>
          </button>
        )}

        {signup && (
          <button className="border-black border-0 rounded-md p-2 text-black shadow-2xl bg-slate-200">
            {" "}
            <Link href="/auth/signup">Sign-up</Link>
          </button>
        )}
      </div>
    </div>
  );
}
