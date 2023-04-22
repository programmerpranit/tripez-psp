import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TripCard({ img, title, desc }) {
  return (
    <>
      <div className="max-w-sm  m-4  border border-gray-200 rounded-lg shadow bg-gray-800 ">
        <Image
          src="/trip1.jpg"
          className="rounded-lg"
          width={500}
          height={400}
          alt="img"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold  text-white ">{title}</h5>

          <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4     "
          >
            Explore
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
