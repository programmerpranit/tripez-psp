import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="flex text-slate-200 justify-between m-2 p-2">
        <div>
          <h1 className="text-2xl italic m-2 font-semibold">Tripez</h1>
        </div>
        <div>
          <h2 className="m-2 text-black">
            {" "}
            <Link href="/about"> About Us</Link>{" "}
          </h2>
        </div>
      </div>
      <div className="flex items-center text-white justify-center ">
        <h2>© Tripez 2023</h2>
      </div>
    </>
  );
}
