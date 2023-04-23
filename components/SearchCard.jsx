import { useState, React } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SearchCard({image, title, description, price}) {
  return (
    <>
      <div className="flex border shadow-md rounded-md border-gray-300 bg-gray-100">
        <Image
          src="/trip1.jpg"
          width={250}
          height={100}
          alt="img"
          className="rounded-md object-cover"
        />
        <div className="flex-col p-5 w-2/3">
          <h3>Himalayas</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet
            debitis doloremque magnam amet blanditiis iste. Nulla suscipit
            minima reprehenderit.
          </p>
          <div className="flex pt-5 justify-between">

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
