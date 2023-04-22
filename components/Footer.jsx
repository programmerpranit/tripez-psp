import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="flex text-slate-200 justify-between m-2 p-2">
        <div>
          <h3 className="ml-4 m-2 text-black ">Tripez</h3>
        </div>
        <div>
          <h4 className="m-2 text-black">
            <Link href="/about"> About Us</Link>{" "}
          </h4>
        </div>
      </div>
    </>
  );
}
