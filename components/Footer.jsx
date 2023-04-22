import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="flex text-slate-200 justify-around p-5 py-20 max-w-6xl mt-20 rounded-lg bg-blue-50 m-auto">
        <div>
          <h3 className="ml-4 m-2 text-black ">Tripez</h3>
        </div>
        <div>
          <Link href="/about">
            {" "}
            <h4 className="m-2 text-black"> About Us</h4>
          </Link>{" "}
          <Link href="/trips">
            {" "}
            <h4 className="m-2 text-black"> Trips</h4>
          </Link>{" "}
          <Link href="/partner">
            {" "}
            <h4 className="m-2 text-black"> Partner</h4>
          </Link>{" "}
        </div>
      </div>
    </>
  );
}
