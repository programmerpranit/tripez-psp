import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TripCard({ img, title, desc }) {
  return (
    <>
      <div className="max-w-sm  m-4  border border-secondary rounded-lg shadow  ">
        <Image
          src="/trip1.jpg"
          className="rounded-lg"
          width={500}
          height={400}
          alt="img"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold">{title}</h5>

          <p className="my-3 font-normal text-secondary ">
            {desc}
          </p>
          <Link
            href="/search/himalaya"
          >
            <button className="bg-primary">

            Explore
            </button>
          
          </Link>
        </div>
      </div>
    </>
  );
}
