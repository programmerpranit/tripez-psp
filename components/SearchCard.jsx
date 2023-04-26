import { useState, React } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SearchCard({ image, title, description, price, slug, cta }) {
  console.log(slug);
  return (
    <>
      <div className="flex border shadow-md rounded-md border-gray-300 bg-gray-100">
        <Image
          src={image}
          width={250}
          height={100}
          alt="img"
          className="rounded-md object-cover"
        />
        <div className=" flex flex-col p-5 w-2/3">
          
          <h3>{title}</h3>

          
          <p>{description}</p>
          <div className="flex-1"></div>
          <div className="flex pt-5 justify-between">
            <Link href={slug}>
              <p className="hover:text-primary">{cta ? cta : "Read More"}</p>
            </Link>
            <p>
              Starting From <span className="text-xl"> {price}/-</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
