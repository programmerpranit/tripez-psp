import { useState, React } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SearchCard() {
  return (
    <>
      <div className="flex rounded border border-gray-300 bg-gray-100">
        <Image
          src="/trip1.jpg"
          width={250}
          height={100}
          alt="img"
        />
        <div className="flex-col p-2 w-2/3">
          <h3>Himalayas</h3>
          <p className="font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet
            debitis doloremque magnam amet blanditiis iste. Nulla suscipit
            minima reprehenderit.
          </p>
          <div className="flex mt-16 justify-between   ">

          <Link href={"/"}>
            <p>Read More</p>
          </Link>
          <h4>5000/-</h4>
          </div>
        </div>
      </div>
    </>
  );
}
